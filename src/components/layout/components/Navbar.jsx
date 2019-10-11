import React from "react";
import './styles/navbar.less';
import { Row, Col, Icon, Avatar, Popover, Divider, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;

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
    <Row type="flex" justify="space-between" align="middle">
      <Col span={2}>
        <Title level={3} style={{ margin: "0" }} type="secondary">
          <Icon type="menu-fold" />
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
  );
};

export default Navbar;
