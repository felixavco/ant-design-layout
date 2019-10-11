import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Loader from "../commons/loader/Loader";
import ErrorBoundary from "../commons/errorPages/ErrorBoundary";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { CHANGE_SEARCH_MODAL_STATE } from "../../redux/types";
import { Layout as AntLayout } from "antd";
const { Content } = AntLayout;

const Layout = ({ children }) => {
  const keyMap = {
    OPEN_MODAL_SEARCH: "ctrl+b"
  };

  const handlers = {
    OPEN_MODAL_SEARCH: () => {
      store.dispatch({
        type: CHANGE_SEARCH_MODAL_STATE,
        payload: true
      });
    }
  };

  const loader = <Loader fullPage={true} />;

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <HotKeys keyMap={keyMap} handlers={handlers}>
            <AntLayout>
              <Sidebar />
              <AntLayout>
                <Navbar />
                <Switch>
                  <Suspense fallback={loader}>
                    <Content>{children}</Content>
                  </Suspense>
                </Switch>
                <Footer />
              </AntLayout>
            </AntLayout>
          </HotKeys>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default Layout;
