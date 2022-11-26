import { X, Trash, CheckCircle } from 'phosphor-react';

import './Todo.css';

export function Todo(props) {
  return (
    <div className="todoContainer">
      <p>{props.name}</p>

      <div className="controlBtns">
        <CheckCircle size={28} color="#000" />
        <X size={28} color="#000" />
        <Trash size={28} color="#000" />
      </div>
    </div>
  );
}
