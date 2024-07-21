import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, dcrement } from "./redux/slices/counterSlices";

export function Counter() {
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    console.log("test");
    return (
        <div>
            <button onClick={()=> dispatch(increment())}>+</button>
            <span>{count}</span>
            <button onClick={()=> dispatch(dcrement())}>-</button>
        </div>
    );
}