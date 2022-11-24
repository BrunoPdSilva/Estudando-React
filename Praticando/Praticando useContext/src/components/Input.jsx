import { useContext } from 'react';
import { AuthContext } from '../context/authContext';

import './Input.css';
  
export function Input(props) {
  const { setEmail, setPassword } = useContext(AuthContext);

  function handleInput(e) {
    e.target.type === 'text'
      ? setEmail(e.target.value)
      : setPassword(e.target.value);
  }

  return (
    <input
      className="inputField"
      type={props.type}
      placeholder={props.text}
      autoComplete="none"
      onChange={e => handleInput(e)}
    />
  );
}
