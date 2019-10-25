import React from "react";
import { Button } from "antd";
import Metrics from "./_metrics";

const Dashboard = () => {
  return (
    <section>
      <h1>Welcome to Dashboard</h1>
      <Metrics />
      <Button type="primary" shape="circle">
      <i className="ri-search-line" />
      </Button>
    </section>
  );
};

export default Dashboard;
