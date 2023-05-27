import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button, Typography } from "antd";
import { FlooringForm, Wrapper } from "./styles";

const { Title } = Typography;

const NewFlooring: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [defect, setDefect] = useState("");

  return (
    <Wrapper>
      <FlooringForm onSubmit={() => navigate("")}>
        <Title level={2}>Cadastrar pavimento</Title>
        <Input
          placeholder="Nome"
          type="name"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          placeholder="Cep"
          onChange={(event) => setCep(event.target.value)}
        />
        <Input
          placeholder="Defeitos"
          onChange={(event) => setDefect(event.target.value)}
        />
        <Button type="primary" htmlType="submit">
          Cadastrar pavimento
        </Button>
      </FlooringForm>
    </Wrapper>
  );
};

export default NewFlooring;
