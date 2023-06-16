import React, { useState, useEffect } from "react";
import { Input, List, Typography, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Wrapper, FlooringsContainer } from "./styles";
import { deletePavement, getPavements } from "./helper";

const { Title } = Typography;
const { Search } = Input;

const Floorings: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [flooringData, setFlooringData] = useState<any[]>([]);

  useEffect(() => {
    getPavements(setFlooringData);
  }, []);

  const filteredData =
    flooringData.length > 0
      ? flooringData?.filter((item) =>
          item?.nome?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : [];

  const handleSearch = (value: any) => {
    setSearchTerm(value);
  };

  return (
    <Wrapper>
      <FlooringsContainer>
        <Space
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem",
          }}
        >
          <Title level={2}>Todos os pavimentos</Title>
          <div>
            <Button type="primary" onClick={() => navigate("/newFlooring")}>
              Add
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </div>
        </Space>
        <Search
          placeholder="Search Floorings"
          onSearch={handleSearch}
          style={{ marginBottom: "1rem" }}
        />
        {flooringData.length === 0 && <p>Carregando...</p>}
        {flooringData.length > 0 && (
          <List
            itemLayout="vertical"
            size="large"
            dataSource={filteredData}
            style={{ overflowY: "auto" }}
            renderItem={(item) => (
              <List.Item key={item.name}>
                <List.Item.Meta
                  title={item.nome}
                  description={`CEP: ${item.cep}, Última intervenção: ${item.dtUltimaIntervencao}, IGG ${item.IGG}, Criticidade: ${item.criticidade}`}
                />
                <Button
                  onClick={() =>
                    navigate(
                      `/editFlooring?id=${item._id}&nome=${item.nome}&cep=${item.cep}&dtUltimaIntervencao=${item.dtUltimaIntervencao}&IGG=${item.IGG}&criticidade=${item.criticidade}`
                    )
                  }
                  type="primary"
                >
                  Editar
                </Button>
                <Button
                  onClick={() => deletePavement(item._id, setFlooringData)}
                  danger
                  style={{ marginLeft: 16 }}
                >
                  Excluir
                </Button>
              </List.Item>
            )}
          />
        )}
      </FlooringsContainer>
    </Wrapper>
  );
};

export default Floorings;
