import React from 'react';
import ToDo from '../Models/todo';
import styles from './ToDoItem.module.css'
const ToDoItem: React.FC<{ toDo: ToDo, onClick: (itemID: string) => void }> = (props) => {
    return (
        <li className={styles.item} onClick={() => props.onClick(props.toDo.id)}>
            {props.toDo.text}
        </li>
    );
};

export default ToDoItem;