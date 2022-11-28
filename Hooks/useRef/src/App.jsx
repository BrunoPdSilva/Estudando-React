import { useRef, useEffect } from 'react';

export default function App() {
  const countRef = useRef(0);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function incrementCount() {
    countRef.current += 1;

    alert(`Count ${countRef.current}`);
  }

  return (
    <div className="App">
      <form>
        <h2>Input auto focus</h2>
        <input type="text" ref={inputRef} />
      </form>

      <button onClick={incrementCount}>Add to Count</button>
    </div>
  );
}
