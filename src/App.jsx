import React, { lazy } from "react";
import "./App.less";
import Layout from "./components/layout/Layout";
import { Route } from "react-router-dom";

import Landing from "./components/pages/landing/Landing";
const Customers = lazy(() => import("./components/pages/customers/Customers"));

function App() {
  return (
    <Layout>
      <Route exact path="/" component={Landing} />
      <Route exact path="/customers" component={Customers} />
    </Layout>
  );
}

export default App;