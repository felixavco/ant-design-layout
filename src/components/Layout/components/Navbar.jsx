import React from "react";
import {
  Row,
  Col,
  Icon,
  Avatar,
  Popover,
  Divider,
  Typography,
  Layout
} from "antd";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;
const { Header } = Layout;

const text = <span>Opciones</span>;
const content = (
  <div>
    <span>
      <Icon type="user" />
      &nbsp;
      <Link to="/profile">
        <Text>Perfil</Text>
      </Link>
    </span>
    <Divider />
    <span>
      <Icon type="logout" />
      &nbsp;
      <Link to="/login">
        <Text>Cerrar Sesion</Text>
      </Link>
    </span>
  </div>
);

const Navbar = () => {
  return (
    <Header style={{ background: "#fff" }}>
      <Row type="flex" justify="space-between" align="middle">
        <Col span={2}>
          <Title style={{ margin: 0 }} type="secondary">
            Logo
          </Title>
        </Col>
        <Col span={10}>
          <Row type="flex" justify="end">
            <Col>
              <Popover
                placement="bottomRight"
                title={text}
                content={content}
                trigger="hover"
              >
                <Text strong>Joe Doe</Text>
                &nbsp;
                <Avatar size="large" icon="user" />
              </Popover>
            </Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default Navbar;
