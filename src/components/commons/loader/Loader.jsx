import React from "react";
import { Row, Col, Spin } from "antd";

const Loader = ({ fullPage = false }) => {
  return (
    <Row
      style={fullPage ? { height: "85vh" } : {}}
      type="flex"
      justify="center"
      align="middle"
    >
      <Col
        span={2}
      >
        <Spin tip="Loading..." size="large" />
      </Col>
    </Row>
  );
};

export default Loader;
