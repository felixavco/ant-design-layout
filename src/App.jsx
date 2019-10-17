import React, { lazy } from "react";
import "./App.less";
import Layout from "./components/layout/Layout";
import { Route, Redirect } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));

function App() {
  return (
    <Layout>
      <Redirect exact path="/" to="/dashboard" />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/customers" component={Customers} />
      <Route exact path="/page-not-found" component={NotFound} />
      {/* <Redirect to="/page-not-found" /> */}
    </Layout>
  );
}

export default App;
