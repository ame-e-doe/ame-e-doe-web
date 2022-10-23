import { FormEvent, useContext, useState } from 'react';
import './App.css';
import { AuthContext } from '../src/contexts/auth-context';

function App() {
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
    const credentials = {
      email,
      password,
    };

    await signIn(credentials);
  }

  return (
    <div className='App'>
      <h1>Teste do rennan</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder='email'
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder='senha'
          type='password'
          value={password}
          onChange={(e) => setpassword(e.target.value)}
        />
        <button type='submit'> aperta aí </button>
      </form>
    </div>
  );
}

export default App;
