"use client";

import React from "react";
import { Tabs, Typography } from "antd";
import Title from "antd/es/typography/Title";
import type { TabsProps } from "antd";
import dynamic from "next/dynamic";

const Drafts = dynamic(() => import("../../../components/Loads/Drafts/page"));
const Posted = dynamic(() => import("../../../components/PostLoad/AddLoad"));

const onChange = (key: string) => {
  console.log(key);
};
const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Drafts",
    children: <Drafts />,
  },
  {
    key: "2",
    label: "Posted",
    children: <Posted />,
  },
  {
    key: "3",
    label: "Upcoming",
    children: "Content of Tab Pane 3",
  },
  {
    key: "4",
    label: "Running",
    children: "Content of Tab Pane 4",
  },
  {
    key: "5",
    label: "Completed",
    children: "Content of Tab Pane 5",
  },
  {
    key: "6",
    label: "Cancelled",
    children: "Content of Tab Pane 6",
  },
];

export default function Loads() {
  return (
    <div>
     <Title level={2}> Loads</Title>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        style={{ width: "100%" }}
      />
    </div>
  );
}
