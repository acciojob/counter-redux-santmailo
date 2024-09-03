import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={dispatch(increment())}>+</button>
    </div>
  );
}
