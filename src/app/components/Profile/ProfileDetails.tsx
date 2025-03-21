import { Button, Col, Flex, Row, Typography } from "antd";
import Image from "next/image";
import React from "react";
import pic from "../../../../public/profile.png";

export default function ProfileDetails() {
  return (
    <Row style={{ paddingTop: 25 }}>
      <Col lg={20}>
        <Flex vertical gap={20}>
          <Row>
            <Col lg={16}>
              <Flex justify="space-between">
                <Typography.Text style={{ fontSize: 20, fontWeight: 600 }}>
                  Welcome Venkat
                </Typography.Text>
                <Button>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 19H6.425L16.2 9.225L14.775 7.8L5 17.575V19ZM3 21V16.75L16.2 3.575C16.4 3.39167 16.6208 3.25 16.8625 3.15C17.1042 3.05 17.3583 3 17.625 3C17.8917 3 18.15 3.05 18.4 3.15C18.65 3.25 18.8667 3.4 19.05 3.6L20.425 5C20.625 5.18333 20.7708 5.4 20.8625 5.65C20.9542 5.9 21 6.15 21 6.4C21 6.66667 20.9542 6.92083 20.8625 7.1625C20.7708 7.40417 20.625 7.625 20.425 7.825L7.25 21H3ZM15.475 8.525L14.775 7.8L16.2 9.225L15.475 8.525Z"
                      fill="#1D1B20"
                    />
                  </svg>
                </Button>
              </Flex>
            </Col>
          </Row>

          <Row>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Company Name
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  MultiLoads
                </Typography.Text>
              </Flex>
            </Col>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Business Type
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  E-commerce
                </Typography.Text>
              </Flex>
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Mobile No
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  +91 98234 12321
                </Typography.Text>
              </Flex>
            </Col>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Alternative phone Number
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  +91 98234 11221
                </Typography.Text>
              </Flex>
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Registered Email
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Venkata1977@gmail.com
                </Typography.Text>
              </Flex>
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Company CIN no
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  9823 1122 2343 6754
                </Typography.Text>
              </Flex>
            </Col>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  GST No
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  22AAAAA0000A1Z5
                </Typography.Text>
              </Flex>
            </Col>
          </Row>
          <Row>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Address
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Dharmasthala, Dakshina Kannada, Karnataka, 574216
                </Typography.Text>
              </Flex>
            </Col>
            <Col lg={10}>
              <Flex vertical>
                <Typography.Text
                  style={{
                    color: "rgba(176, 176, 176, 1)",
                    fontSize: 14,
                    fontWeight: 400,
                  }}
                >
                  Permanent Address
                </Typography.Text>
                <Typography.Text
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                  }}
                >
                  Dharmasthala, Dakshina Kannada, Karnataka, 574216
                </Typography.Text>
              </Flex>
            </Col>
          </Row>
        </Flex>
      </Col>
      <Col lg={4}>
        <Flex vertical gap={20}>
          <Image src={pic} alt="profile" />
          <Button>Change Pic</Button>
        </Flex>
      </Col>
    </Row>
  );
}
