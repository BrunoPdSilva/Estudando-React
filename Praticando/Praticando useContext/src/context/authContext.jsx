import { createContext, useState } from 'react';

export const AuthContext = createContext();

const credentials = {
  email: 'teste@hotmail.com',
  password: 'teste123',
};

export function AuthContextP({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkEmail = credentials.email === email;
  const checkPassword = credentials.password === password;

  let user = null;

  if (checkEmail && checkPassword) {
    user = 'Bruno Peres';
  }

  return (
    <AuthContext.Provider value={{ setEmail, setPassword, user }}>
      {children}
    </AuthContext.Provider>
  );
}
