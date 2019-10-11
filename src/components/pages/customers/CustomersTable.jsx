import React from "react";
import { Table, Row, Col } from "antd";

const CustomersTable = ({ data }) => {
  const columns = [
    {
        title: "Numero Cliente",
        dataIndex: "id",
        render: text => (
          <span
            style={{ cursor: "pointer", color: "#3498DB" }}
            onClick={e => console.log(data)}
          >
            {text}
          </span>
        )
      },
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {
      title: "Phone",
      dataIndex: "phone"
    },
    {
      title: "Web Site",
      dataIndex: "website"
    }
  ];

  return (
    <Row type="flex" justify="center">
      <Col span={23}>
        <Table
          style={{ background: "#fff" }}
          rowKey="id"
          columns={columns}
          dataSource={data}
          title={() => "Customers"}
          bordered={true}
          size="small"
        />
      </Col>
    </Row>
  );
};

export default CustomersTable;
