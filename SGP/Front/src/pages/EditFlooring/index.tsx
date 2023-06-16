import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Input,
  Button,
  Typography,
  DatePicker,
  InputNumber,
  message,
} from "antd";
import { FlooringForm, Wrapper } from "./styles";
import { createPavement, updatePavementById } from "../../services/pavements";
import dayjs from "dayjs";
import { useQuery } from "../../hooks/useQuery";

const { Title } = Typography;

const EditFlooring: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [cep, setCep] = useState("");
  const [dtLast, setDtLast] = useState("");
  const [igg, setIgg] = useState(0);
  const params = useParams();
  const query = useQuery();

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const flooring = {
      nome: name,
      cep,
      dtUltimaIntervencao: dtLast,
      IGG: igg,
    };
    console.log(flooring);
    await updatePavementById(query.get("id") || "", flooring);
    message.success("Pavimento atualizado com sucesso!");
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
          defaultValue={query.get("nome") || ""}
        />
        <Input
          placeholder="Cep"
          onChange={(event) => setCep(event.target.value)}
          defaultValue={query.get("cep") || ""}
        />
        <DatePicker
          placeholder="Data da última intervenção"
          onChange={(event) => setDtLast(event?.format("DD/MM/YYYY") || "")}
          style={{ width: "100%" }}
          defaultValue={dayjs(query.get("dtUltimaIntervencao") || "")}
        />
        <InputNumber
          placeholder="Índice de gravidade global"
          onChange={(event) => setIgg(event as number)}
          style={{ width: "100%" }}
          defaultValue={query.get("IGG") || 0}
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

export default EditFlooring;
