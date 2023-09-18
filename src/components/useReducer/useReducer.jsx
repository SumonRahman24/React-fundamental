import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const CounterReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
    </div>
  );
};

export default CounterReducer;
