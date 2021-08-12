import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import loginSchema from '../../utils/validateSchema';
import { Context } from '../../hooks/AuthContext';

import {
  Container,
  Title,
  TitleContainer,
  LoginContainer,
  LogoContainer,
  InputContainer,
  Form,
  Error,
} from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setloginError] = useState(false);
  const history = useHistory();

  const { handleLogin } = useContext(Context);

  const validateLoginSchema = async (requestBody) => {
    try {
      await loginSchema.validate(requestBody);
    } catch (err) {
      throw new Error(err.errors);
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const requestBody = { email, password };
      await validateLoginSchema(requestBody);
      await handleLogin(email, password);
      setloginError(false);
      history.push('/home');
    } catch (error) {
      setloginError(true);
    }
  }

  return (
    <Container>
      <LoginContainer>
        <TitleContainer>
          <LogoContainer />
          <Title>Books</Title>
        </TitleContainer>
        <Form>
          <InputContainer>
            <label>Email</label>
            <input
              name="email"
              type="text"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input
              name="password"
              type="password"
              id="password"
              autoComplete="off"
              onChange={(event) => setPassword(event.target.value)}
            />
            <button type="submit" value="Entrar" onClick={handleSubmit}>Entrar</button>
          </InputContainer>
        </Form>
        {loginError && <Error>Email e/ou senha incorretos.</Error>}
      </LoginContainer>
    </Container>
  );
}

export default Login;