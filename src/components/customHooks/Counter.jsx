import useCounter from "./useCounter";

const Counter = () => {
  const [count, increment, decrement] = useCounter();
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};

export default Counter;
