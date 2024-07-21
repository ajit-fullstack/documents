import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, dcrement } from "./redux/slices/counterSlices";

export function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    return (
        <div>
            {process.env.REACT_APP_WELCOME_TEXT}
            <button onClick={()=> dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(dcrement())}>-</button>
        </div>
    );
}