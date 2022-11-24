import { Input } from './Input';
import { Check } from 'phosphor-react';

import './Form.css';

export function Form() {
  return (
    <form>
      <header>
        <h2>Bem vindo de volta, Bruno</h2>
        <h4>Adoramos ter você de volta, faça login para continuar</h4>
      </header>

      <Input type="text" text="Email" />
      <Input type="password" text="Senha" />

      <section className="checkboxSection">
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox" id="checkbox-label">
          <Check size={24} color="#407bff" id="check-icon" />
        </label>
        <h4>Lembrar de mim por 30 dias</h4>
      </section>

      <button>Fazer login</button>
    </form>
  );
}
