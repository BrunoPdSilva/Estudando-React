import { useState, useReducer } from 'react';

import './App.css';

const ACTIONS = {
  ADD_TODO: 'addTodo'
}

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload]
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setName('')
    dispatch({ type: ACTIONS.ADD_TODO, payload: name })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>Adicionar Todo</p>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </form>

      {state.map(todo => (<p key={todo}>{todo}</p>))}
    </>
  )
}
