import React, { useRef, useContext } from 'react';
import styles from './NewToDo.module.css'
import { ToDoContext } from '../store/ToDoContext';

const NewToDo:React.FC = () => {

    const toDoContext = useContext(ToDoContext);
    const todoTextInputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current?.value;
        if(enteredText){
            if (enteredText?.trim().length === 0) {
                return;
            }

            toDoContext.addToDo(enteredText);
        }        
    }
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor='text'>ToDo text </label>
            <input type='text' id='text' ref={todoTextInputRef} />
            <button> Add Todo</button>
        </form>
    );
}

export default NewToDo;