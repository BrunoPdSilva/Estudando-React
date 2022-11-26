import { useState, useReducer } from 'react';

import { Todo } from './components/Todo';

import './App.css';

const ACTIONS = {
  ADD_TODO: 'addTodo',
};

function reducer(state, action) {
  console.log(state);

  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, newTodo(action.payload.name)];
    default:
      return state;
  }
}

function newTodo(name) {
  return { id: Date.now(), name: name, complete: false };
}

export default function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (name.length > 0) {
      dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    }

    setName('');
  }


  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>

      <form onSubmit={handleSubmit}>
        <h2>Crie uma tarefa</h2>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <button>Adicionar</button>
      </form>

      {todos.map(todo => {
        return <Todo key={todo.id} name={todo.name} />;
      })}
    </div>
  );
}
