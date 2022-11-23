import { useState, createContext, useEffect } from 'react';

export const CounterContext = createContext();

export function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [doubleCounter, setDoubleCounter] = useState(0);

  const increaseCounter = () => setCount(prev => prev + 1);

  useEffect(() => {
    setDoubleCounter(count * 2);
  }, [count]);

  return (
    <CounterContext.Provider value={{ count, increaseCounter, doubleCounter }}>
      {children}
    </CounterContext.Provider>
  );
}
