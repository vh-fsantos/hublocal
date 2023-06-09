import { useDispatch } from 'react-redux';
import { login } from '../actions/authActions';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function LoginForm() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <Button type="submit" color="secondary">Login</Button>
    </form> 
  );
}

export default LoginForm;