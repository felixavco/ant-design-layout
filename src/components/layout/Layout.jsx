import React, { Suspense, useState } from "react";
import Navbar from "./components/Navbar";
import AppFooter from "./components/Footer";
// import SearchModal from "./components/SearchModal";
import SideMenu from "./components/SideMenu";
import Loader from "../commons/loader/Loader";
import ErrorBoundary from "../commons/errorPages/ErrorBoundary";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { CHANGE_SEARCH_MODAL_STATE } from "../../redux/types";
import { Layout as AntLayout } from "antd";
const { Header, Footer, Sider, Content } = AntLayout;

const keyMap = {
  OPEN_MODAL_SEARCH: "ctrl+b"
};

const Layout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handlers = {
    OPEN_MODAL_SEARCH: () => {
      store.dispatch({
        type: CHANGE_SEARCH_MODAL_STATE,
        payload: true
      });
    }
  };

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <HotKeys keyMap={keyMap} handlers={handlers}>
            <AntLayout>
              <Sider
                collapsible
                collapsed={isCollapsed}
                onCollapse={() => setIsCollapsed(!isCollapsed)}
                style={{ height: "100vh" }}
              >
                <SideMenu />
              </Sider>
              <AntLayout>
                <Header style={{ background: "#fff" }}>
                  <Navbar />
                </Header>
                <Switch>
                  <Suspense fallback={<Loader fullPage={true} />}>
                    <Content>{children}</Content>
                  </Suspense>
                </Switch>
                <Footer>
                  <AppFooter />
                </Footer>
              </AntLayout>
            </AntLayout>
          </HotKeys>
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default Layout;
