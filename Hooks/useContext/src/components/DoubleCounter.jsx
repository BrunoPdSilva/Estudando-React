import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

import './Counter.css';

export function DoubleCounter() {
  const { doubleCounter } = useContext(CounterContext);

  return (
    <div className="counter">
      <h2>{doubleCounter}</h2>
      <button>Adicionar</button>
    </div>
  );
}
