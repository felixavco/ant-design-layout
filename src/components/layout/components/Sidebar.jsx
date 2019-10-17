import React, { useState } from "react";
import "./styles/sideMenu.less";
import { Menu, Icon, Typography, Row, Layout } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { SubMenu } = Menu;
const { Sider } = Layout;

const isAuth = true;

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  let content = null;

  if(isAuth) {
    content = (
      <Sider
      collapsible
      collapsed={isCollapsed}
      onCollapse={() => setIsCollapsed(!isCollapsed)}
      style={{ height: "100vh" }}
    >
      <Row type="flex" justify="end" align="middle">
        <Title level={4} style={{ margin: "1rem" }} type="secondary">
          <Icon style={{ color: "#ffffff" }} type="menu-fold" />
        </Title>
      </Row>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Icon type="dashboard" />
          <span>
            <Link to="/dashboard">Dashboard</Link>
          </span>
        </Menu.Item>

        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Usuarios</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to="/customers">Clientes</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    )
  }

  return content;
};

export default Sidebar;
