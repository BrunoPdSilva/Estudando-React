import { Component, useState } from 'react';

interface State {
  status?: string;
  loading: boolean;
}

interface List {
  total: number;
  langs: string[];
}

const Bank = () => {
  const [value, setValue] = useState<number>(100);

  function add() {
    setTimeout(() => {
      setValue(prevState => prevState + 15);
    }, 2000);
  }

  return (
    <div>
      <button onClick={add}>Depositar R$15,00</button>
      <button onClick={() => setValue(value - 100)}>Sacar R$100,00</button>
      R$ {value},00
    </div>
  );
};

const Languages = () => {
  const [state, setState] = useState<List>({
    total: 2,
    langs: ['JavaScript', 'TypeScript'],
  });

  function addLang() {
    setTimeout(() => {
      setState(prev => ({
        total: prev.langs.length + 1,
        langs: [...prev.langs, 'CSS'],
      }));
    }, 2000);
  }

  return (
    <div>
      <button onClick={addLang}>Add Func</button>
      <button onClick={() => setState({ total: 0, langs: [] })}>Clear</button>
      {JSON.stringify(state)}
    </div>
  );
};

const HookState = () => {
  const [state, setState] = useState<State>({ status: 'idle', loading: false });

  return (
    <div>
      <button
        onClick={() => {
          setState({ loading: true });
        }}
      >
        Add Func
      </button>
      {JSON.stringify(state)}
    </div>
  );
};

class ClassState extends Component {
  constructor(props: object) {
    super(props);

    this.state = { status: 'idle', loading: false };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ loading: true });
          }}
        >
          Add Class
        </button>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Languages />
      <hr />
      <ClassState />
      <hr />
      <Languages />
      <hr />
      <Bank />
    </div>
  );
}

export default App;
