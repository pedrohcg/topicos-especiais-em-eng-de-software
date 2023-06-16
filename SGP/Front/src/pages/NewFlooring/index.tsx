import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Button,
  Typography,
  DatePicker,
  InputNumber,
  message,
} from "antd";
import { FlooringForm, Wrapper } from "./styles";
import { createPavement } from "../../services/pavements";

const { Title } = Typography;

const NewFlooring: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [dtLast, setDtLast] = useState("");
  const [igg, setIgg] = useState(0);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const flooring = {
      nome: name,
      cep,
      dtUltimaIntervencao: dtLast,
      IGG: igg,
    };
    console.log(flooring);
    await createPavement(flooring);
    message.success("Pavimento cadastrado com sucesso!");
    navigate("/floorings");
  };

  return (
    <Wrapper>
      <FlooringForm onSubmit={handleSubmit}>
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
        <DatePicker
          placeholder="Data da última intervenção"
          onChange={(event) => setDtLast(event?.format("DD/MM/YYYY") || "")}
        />
        <InputNumber
          placeholder="Índice de gravidade global"
          onChange={(event) => setIgg(event as number)}
          style={{ width: "100%" }}
        />
        <Button
          type="primary"
          htmlType="submit"
          onClick={(event) => handleSubmit(event)}
        >
          Cadastrar pavimento
        </Button>
      </FlooringForm>
    </Wrapper>
  );
};

export default NewFlooring;
