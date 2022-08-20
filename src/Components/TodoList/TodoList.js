import React from "react";
import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

const TodoList = () => {

    const todosList = useSelector(state => state.todos);

    return (
        <div>
            {todosList?.map((item, i) => {
               return <Todo {...item} key={i} />
            })}
        </div>
    )
}

export default TodoList;