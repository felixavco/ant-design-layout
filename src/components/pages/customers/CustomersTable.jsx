import React from "react";
import { Table } from "antd";

const CustomersTable = ({ data, getId }) => {
  const columns = [
    {
      title: "Numero Cliente",
      dataIndex: "id",
      render: text => (
        <span
          style={{ cursor: "pointer", color: "#3498DB" }}
          onClick={() => getId(parseInt(text))}
        >
          {text}
        </span>
      )
    },
    {
      title: "Name",
      dataIndex: "name"
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
    <Table
      style={{ background: "#fff" }}
      rowKey="id"
      columns={columns}
      dataSource={data}
      title={() => "Customers"}
      bordered={true}
      size="small"
    />
  );
};

export default CustomersTable;
