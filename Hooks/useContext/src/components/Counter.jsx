import { CounterContext } from '../contexts/CounterContext';
import { useContext } from 'react';

import './Counter.css';

export function Counter() {
  const { count, increaseCounter } = useContext(CounterContext);

  return (
    <div className="counter">
      <h2>{count}</h2>
      <button onClick={increaseCounter}>Adicionar</button>
    </div>
  );
}
