import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customAdd, decrement, increment, reset } from "../../Redux/Action/counterAction";

const Counter = () => {

    const CountCounter = useSelector(state => state.counter);

    const { count } = CountCounter;

    const dispatch = useDispatch();

    const [value, setValue] = useState();

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <p>{count}</p>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <div>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
            <input type={'number'} value={value} onChange={handleChange} />
            <button onClick={() => dispatch(customAdd(value))}>Custom Add</button>
        </div>
    )
}

export default Counter;