import React, { useState } from "react";
import {
  CreateAccountLink,
  ForgotPasswordLLink,
  LoginForm,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography, message } from "antd";
import { loginUser } from "../../services/user";
import { setLSToken } from "../../utils/localStorage";

const { Title } = Typography;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const user = await loginUser(email, password);
      if (user.token) {
        setLSToken(user.token);
        navigate("/floorings");
      }
    } catch (error) {
      message.error("Usuário ou senha incorretos");
    }
  };

  return (
    <Wrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title level={2}>Login</Title>
        <Input
          placeholder="Email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input.Password
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <Button type="primary" htmlType="submit">
          Log In
        </Button>
        <CreateAccountLink href="/register">Criar uma conta</CreateAccountLink>
      </LoginForm>
    </Wrapper>
  );
};

export default Login;
