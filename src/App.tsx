import React, { useState } from "react";
import "./App.css";
import "antd/dist/reset.css";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import WidgetsSelector, {
  AVAILABLE_WIDGETS,
} from "./components/WidgetsSelector";
import RenderWidgets from "./components/RenderWidgets";

export type TAVAILABLE_WIDGETS =
  | AVAILABLE_WIDGETS.NOTES
  | AVAILABLE_WIDGETS.TASKS
  | AVAILABLE_WIDGETS.WORK_TIMER;

function App() {
  const [selectedWidgets, setSelectedWidgets] =
    useState<TAVAILABLE_WIDGETS[]>();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>Logo</div>
        <WidgetsSelector
          selectedWidgets={selectedWidgets}
          setSelectedWidgets={setSelectedWidgets}
        />
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <div style={{ padding: 24, minHeight: 380, background: "gray" }}>
          <RenderWidgets
            setSelectedWidgets={setSelectedWidgets}
            selectedWidgets={selectedWidgets}
          />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
}

export default App;
