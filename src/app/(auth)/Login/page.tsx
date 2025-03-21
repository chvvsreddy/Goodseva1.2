"use client";

import { MobileOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Flex, Input, Row, Space,Typography,} from "antd";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [number, setNumber] = useState("");
  return (
    <>
      <Flex className="bg-lp" vertical>
        <div className="LoginlayoutStyle">
          <Row>
            
            <Col lg={10} xs={24} sm={12} className="bg-lp-div">
              <Flex justify="space-between" style={{ margin: 20 }}>
                <Link href={"/"}>
                  <img src="goodseva-logo.png" alt=" Goodseva logo" height={50} />
                </Link>
              </Flex>
              <div style={{ margin: 20 }}>
              <Typography.Title id="login-text">Login</Typography.Title>
              <Typography.Title level={3} id="login-para">
                Very good works are waiting for you
              </Typography.Title>
              </div>
              
              <div className="input-details">
                <Input
                  size="large"
                  placeholder="Enter your Registered Phone Number/Email"
                  prefix={<MobileOutlined />}
                  className="input-login"
                  type="number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <Link href={"/otp"}>
                  <Button id="otp-button">Get OTP</Button>
                </Link>
              </div>
              <div className="providers">
                <Divider style={{ borderColor: "lightgray" }}>
                  <span>
                    <b>Login</b>
                  </span>{" "}
                  <span style={{ color: "#525252" }}>With Others</span>
                </Divider>
                <Flex justify="center" gap={30}>
                  <Image
                    width="48"
                    height="48"
                    src="/google.png"
                    alt="google-logo"
                  />
                  <Image width="48" height="48" src="/fb.png" alt="facebook" />
                </Flex>
              </div>
            </Col>
            <Col lg={14} xs={24} sm={12}></Col>
          </Row>
        </div>
      </Flex>
    </>
  );
}
