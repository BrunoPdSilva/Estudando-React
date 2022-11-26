import { useState, useReducer } from 'react';

import { Todo } from './components/Todo';

import './App.css';

export const ACTIONS = {
  ADD_TODO: 'addTodo',
  TOGGLE_TODO: 'toggleTodo',
  DELETE_TODO: 'deleteTodo',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    default:
      return todos;
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
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
}
