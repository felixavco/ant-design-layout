import React, { lazy } from "react";
import "./styles/App.less";
import Layout from "./components/Layout";
import { Route, Redirect, Switch } from "react-router-dom";
import "remixicon/fonts/remixicon.css";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Customers = lazy(() => import("./pages/Customers"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Layout>
      <Switch>
        <Redirect exact path="/" to="/dashboard" />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/customers" component={Customers} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </Layout>
  );
}

export default App;
