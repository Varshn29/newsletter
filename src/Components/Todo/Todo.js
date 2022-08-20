import React from "react";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../../Redux/Action/todoAction";

const Todo = ({ task, description, id, isComplete }) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div style={{textDecoration: (isComplete == true) ? 'line-through' : ''}}>
                <h2>{task}</h2>
                <p>{description}</p>
            </div>
            <div>
                <button onClick={() => dispatch(completeTodo(id))}>Complete</button>
                <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
            </div>

        </div>
    )
}

export default Todo;