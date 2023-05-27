import React, { useState } from "react";
import {
  CreateAccountLink,
  ForgotPasswordLLink,
  LoginForm,
  Wrapper,
} from "./styles";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "antd";

const { Title } = Typography;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Wrapper>
      <LoginForm onSubmit={() => navigate("/floorings")}>
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
