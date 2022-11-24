import { useContext } from 'react';

import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { Form } from './components/Form';
import { AuthContext } from './context/authContext';

import Image from './assets/side-image.svg';
import './App.css';

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <div className="App">
        <Navbar />
        {user ? <Home /> : (
          <main>
          <Form />
          <img className="side-img" src={Image} alt="Image" />
        </main>
        )}
    </div>
  );
}
