import React, {useState} from 'react';
import ToDo from '../Models/todo';

type ToDosContextObj = {
    items: ToDo[];
    addToDo: (toDoText: string) => void;
    removeToDo: (id: string) => void;
};

export const ToDoContext = React.createContext<ToDosContextObj>({
    items: [],
    addToDo: (toDoText: string) => {},
    removeToDo: (id: string) => {}
})

const ToDosContextProvider: React.FC = (props) => {
    const [toDosItems, setToDosItems] = useState<ToDo[]>([]);

    const onAddTodo = (toDoText: string) => {
        const NewToDo = new ToDo(toDoText);

        setToDosItems((prevToDo) => {
            return prevToDo.concat(NewToDo);
        });
    }

    const onRemoveToDo = (toDoID: string) => {

        setToDosItems((prevToDos) => {
            return prevToDos.filter(toDo => toDoID !== toDo.id);
        })

    }

    const contextValue: ToDosContextObj = {
        items: toDosItems,
        addToDo: onAddTodo,
        removeToDo: onRemoveToDo
    }

    return <ToDoContext.Provider value={contextValue}>{props.children}</ToDoContext.Provider>
}

export default ToDosContextProvider;