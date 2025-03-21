"use client";
import React, { useState } from "react";
import type { RadioChangeEvent, TabsProps } from "antd";
import { Radio, Tabs } from "antd";

import { Col, Row, Typography } from "antd";
import styles from "./LogisticsForm.module.css"; // Import CSS Module
import AddLoad from "../PostLoad/AddLoad";
import TrackShipment from "../_Form/TrackShipment";
import PostLoad from "../_Form/PostLoad";

const { Title, Text } = Typography;
const onChange = (key: string) => {
  console.log(key);
};

const LogisticsForm: React.FC = () => {
  //const [size, setSize] = useState<"small" | "middle" | "large">("small");
  const [activeKey, setActiveKey] = useState("1");
  const [items, setItems] = useState<TabsProps["items"]>([
    {
      label: "Track Shipment",
      key: "1",
      children: <TrackShipment/>,
    },
    {
      label: "Post Load",
      key: "2",
      children: <PostLoad/>,
    },

  ]);


  return (
    <div className={styles.container}>
      <div className={styles.bannerColor}></div>
      <div className="layoutStyle">
        <Row>
          <Col lg={14}>
            <div className={styles.leftSection}>
              <Title className={styles.title}>
                Digital Transport @ it's BEST
              </Title>
              <Text className={styles.text}>
                Improve your logistics with our quick, seamless, and economical
                dispatch service. Beyond Expectations.
              </Text>
              <div className="homebannerForm">
              <Tabs defaultActiveKey="1" items={items} /> 
              </div>
               
            </div>
          </Col>
          <Col lg={24}>
            <div className="rightSection">              
                       
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default LogisticsForm;
