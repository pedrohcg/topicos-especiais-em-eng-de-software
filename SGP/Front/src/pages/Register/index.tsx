import React, { useState } from "react";
import {
  CreateAccountLink,
  ForgotPasswordLLink,
  LoginForm,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "antd";
import { createUser, loginUser } from "../../services/user";
import { setLSToken } from "../../utils/localStorage";

const { Title } = Typography;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const user = await createUser(email, password);

    if (user) {
      const login = await loginUser(email, password);

      if (login.token) {
        setLSToken(login.token);
        navigate("/floorings");
      }
    }
  };

  return (
    <Wrapper>
      <LoginForm onSubmit={handleSubmit}>
        <Title level={2}>Registro</Title>
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
          Sign Up
        </Button>
      </LoginForm>
    </Wrapper>
  );
};

export default Register;
