import { Counter } from './components/Counter';
import { DoubleCounter } from './components/DoubleCounter';
import { CounterContextProvider } from './contexts/CounterContext';

import './App.css';

export default function App() {
  return (
    <CounterContextProvider>
      <div className="App">
        <Counter />
        <DoubleCounter />
      </div>
    </CounterContextProvider>
  );
}
