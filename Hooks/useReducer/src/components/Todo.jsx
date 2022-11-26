import { Trash, CheckCircle } from 'phosphor-react';

import { ACTIONS } from '../App';

import './Todo.css';

export function Todo({ todo, dispatch }) {
  return (
    <div
      className="todoContainer"
      style={{ backgroundColor: todo.complete ? '#80ed99' : '#d62828' }}
    >
      <p>{todo.name}</p>

      <div className="controlBtns">
        <span>
          <CheckCircle
            size={28}
            color="#000"
            onClick={() =>
              dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
            }
          />
        </span>
        <span>
          <Trash
            size={28}
            color="#000"
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
            }
          />
        </span>
      </div>
    </div>
  );
}
