"use client";
import { Layout, Menu } from "antd";
import { useState } from "react";
const { Sider } = Layout;
import SideBarItems from "@/constant/SideBarItems";
import { getUserInfo } from "@/service/auth.service";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { role } = getUserInfo() as any;
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        right: 0,
        top: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        PH-UNIVERSITY
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={SideBarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
