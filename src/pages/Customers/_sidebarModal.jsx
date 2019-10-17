import React from "react";
import { Drawer } from "antd";

const SidebarModal = ({ data, visible, onClose }) => {
  const { name } = data;

  return (
    <Drawer
      title={name}
      placement="right"
      visible={visible}
      onClose={onClose}
      width={500}
    >
      <h1>test</h1>
    </Drawer>
  );
};

export default SidebarModal;
