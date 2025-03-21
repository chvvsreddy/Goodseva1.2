"use client";
import { Button, Col, Flex, GetProps, Input, Row, Typography } from "antd";
import "./Header.css";
import {
  MailOutlined,
  PhoneOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import Link from "next/link";
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
  console.log(info?.source, value);

export default function Header() {
  return (
    <>
      <div style={{ background: "black", color: "white",padding: "5px 0px"}}>
        <Row  className="layoutStyle">
          <Col lg={20}>
            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              <div className="navbar-icon">
                <WhatsAppOutlined />
              </div>
              <div className="navbar-icon">
                <VideoCameraOutlined />
              </div>
              <div className="navbar-icon">
                <PhoneOutlined />
              </div>
              <Typography className="mobile-number">
                +91 864 6444 2222
              </Typography>
              <div className="navbar-mail">
                <MailOutlined
                  style={{
                    fontSize: "larger",
                    borderLeft: "1px solid white",
                    paddingLeft: "15px",
                  }}
                />
                info@suvega.com
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="header-second-row layoutStyle">
        <Row>
          <Col lg={12} xs={12}>
            <Flex className="header-column1">
            <Link href="/"><img src="goodseva-logo.png" alt=" Goodseva logo" height={50}/></Link>
              <Link href={"/Postload"}><Typography>Post Loads</Typography></Link>
              <Link href={"/FindTrucks"}><Typography>Find Trucks</Typography></Link>
            </Flex>
          </Col>
          {/* <Col lg={2}></Col> */}
          <Col lg={12} xs={12}>
            <Flex className="header-column2">
              <Search
                className="search-header"
                onSearch={onSearch}
                // enterButton={<SearchOutlined style={{backgroundColor:"transparent"}}/>} // Adds the search icon as a button
                style={{ width: 300, padding: 10 }} // Customize width and height
              />
              <Link href={"/Login"}>
                <Button className="button-secondary">Login</Button>
              </Link>
              <Link href={"/Register"}>
                <Button className="button-primary">Get Started</Button>
              </Link>
            </Flex>
          </Col>
        </Row>
      </div>
    </>
  );
}
