import React from "react";
import { Row, Spin } from "antd";

const Loader = ({ fullPage = false }) => {
  return (
    <Row
      style={fullPage ? { height: "85vh" } : {}}
      type="flex"
      justify="center"
      align="middle"
    >
      <Spin tip="Loading..." size="large" />
    </Row>
  );
};

export default Loader;
