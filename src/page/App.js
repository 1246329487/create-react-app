import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./home/index.tsx";
import Login from "./login/index.tsx";
import { Menu, Button } from "antd";
import {
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Header from "../component/Header";
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Router>
      <Header />
      <div style={{'height':'100%','display':'flex'}}>
        <div
          style={{
            width: 256,
            height: "100%",
          }}
        >
          <Menu
            defaultSelectedKeys={[`${window.location.pathname}`]}
            mode="inline"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key={"/home"}>
              <Link to={"/home"}>
                <PieChartOutlined /> <span>home</span>{" "}
              </Link>
            </Menu.Item>
            <Menu.Item key={"/login"}>
              <Link to={"/login"}>
                <DesktopOutlined />
                <span>login</span>{" "}
              </Link>
            </Menu.Item>
            <Menu.SubMenu title="子菜单" key={'children'} icon={<ContainerOutlined />}>
              <Menu.Item key='/children2'>
                <ContainerOutlined /> <span>子菜单项</span>{" "}
              </Menu.Item>
            </Menu.SubMenu>
            <Button
              type="text"
              onClick={toggleCollapsed}
              style={{
                marginBottom: 16,
                position: "absolute",
                bottom: "0",
              }}
            >
              <MenuFoldOutlined style={{ fontSize: "16px", color: "grey" }} />
            </Button>
          </Menu>
        </div>
        <div style={{'width':'100%'}}>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
