import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../Redux/Action/todoAction";

const AddTodo = () => {

    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');

    const handleTask = (e) => {
        setTask(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)
    }

    const dispatch = useDispatch();

    return (

        <div>
            <label>Name:</label>
            <input type={'text'} value={task} onChange={handleTask} />
            <label>Description:</label>
            <input type={'text'} value={description} onChange={handleDescription} />
            <button onClick={() => dispatch(addTodo({ task, description }))}>Add Todo</button>
        </div>
    )
}

export default AddTodo;