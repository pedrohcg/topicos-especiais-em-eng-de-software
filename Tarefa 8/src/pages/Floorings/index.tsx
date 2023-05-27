import React, { useState } from "react";
import { Input, List, Typography, Space, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { Wrapper, FlooringsContainer } from "./styles";

const { Title } = Typography;
const { Search } = Input;

const Floorings: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const [flooringData, setFlooringData] = useState([
    { name: "Pavimento 1", cep: "12345", defects: "Defect 1" },
    { name: "Pavimento 2", cep: "23456", defects: "Defect 2" },
  ]);

  const filteredData = flooringData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <Button type="primary" onClick={() => navigate("/newFlooring")}>
            Add
          </Button>
        </Space>
        <Search
          placeholder="Search Floorings"
          onSearch={handleSearch}
          style={{ marginBottom: "1rem" }}
        />
        <List
          itemLayout="vertical"
          size="large"
          dataSource={filteredData}
          renderItem={(item) => (
            <List.Item key={item.name}>
              <List.Item.Meta
                title={item.name}
                description={`CEP: ${item.cep}, Defeitos: ${item.defects}`}
              />
            </List.Item>
          )}
        />
      </FlooringsContainer>
    </Wrapper>
  );
};

export default Floorings;
