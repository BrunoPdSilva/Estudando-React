import { useContext } from "react";
import { AuthContext } from "../context/authContext";

import { UserCircle } from 'phosphor-react';

import './Navbar.css'

export function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav>
      <div className="user">
        <UserCircle size={36} color="#CACACA" />
        {user && <h3>{user}</h3>}
      </div>

      <ul className='navLinks'>
        <li><a href="#">Início</a></li>
        <li><a href="#">Contato</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Sair</a></li>
      </ul>
    </nav>
  );
}
