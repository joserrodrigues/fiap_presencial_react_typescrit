import React, {useContext} from 'react';
import ToDo from '../Models/todo';
import ToDoItem from './ToDoItem';
import styles from './ToDos.module.css';

import { ToDoContext } from '../store/ToDoContext';

const ToDos:React.FC = () => {

    const toDoContext = useContext(ToDoContext);

    let info: any[] = [];
    toDoContext.items.map((item) => {
        info.push(
            <ToDoItem key={item.id} toDo={item} onClick={toDoContext.removeToDo} />
        )
    })

    return (
        <ul className={styles.todos}>{info}</ul>
    );
};

export default ToDos;