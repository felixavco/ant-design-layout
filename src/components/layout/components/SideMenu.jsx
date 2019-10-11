import React, { Fragment } from "react";
import './styles/sideMenu.less';
import { Menu, Icon, Typography } from "antd";
import { Link } from "react-router-dom";
const { Title } = Typography;
const { SubMenu } = Menu;

const SideMenu = () => {
  return (
    <Fragment>
      <Title style={{ margin: "1rem" }} type="secondary">
        Logo
      </Title>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
          <Icon type="dashboard" />
          <span>
           
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
          <Menu.Item key="3"> <Link to="/customers">Clientes</Link></Menu.Item>
          <Menu.Item key="4"> <Link to="/customers">Clientes</Link></Menu.Item>
          <Menu.Item key="4"> <Link to="/customers">Clientes</Link></Menu.Item>
          <Menu.Item key="4"> <Link to="/customers">Clientes</Link></Menu.Item>
        </SubMenu>
      </Menu>
    </Fragment>
  );
};

export default SideMenu;
