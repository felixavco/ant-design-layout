import React, { lazy } from "react";
import "./App.less";
import Layout from "./components/layout/Layout";
import { Route, Redirect } from "react-router-dom";

const Dashboard = lazy(() => import("./components/pages/dashboard/Dashboard"));
const Customers = lazy(() => import("./components/pages/customers/Customers"));

function App() {
  return (
    <Layout>
      <Redirect exact path="/" to="/dashboard" />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/customers" component={Customers} />
    </Layout>
  );
}

export default App;
