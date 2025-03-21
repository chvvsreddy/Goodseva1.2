"use client";
import { useParams } from "next/navigation";
import "../../../../../styles/Step1.css";

import { Button, Col, Flex, Row, Space, Typography } from "antd";
import Link from "next/link";

export default function Step2() {
  const params = useParams();
  return (
    <div className="main-register">
      <Row>
        <Col
          lg={24}
          style={{
            backgroundColor: "black",
            color: "white",
            fontSize: 14,
            fontWeight: 400,
          }}
          sm={24}
          xs={24}
        >
          <Flex justify="center">
            <Space className="header-number">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_823_2303)">
                  <path
                    d="M14.6667 11.2802V13.2802C14.6675 13.4659 14.6294 13.6497 14.555 13.8198C14.4807 13.9899 14.3716 14.1426 14.2348 14.2681C14.0979 14.3937 13.9364 14.4892 13.7605 14.5487C13.5847 14.6082 13.3983 14.6303 13.2134 14.6136C11.1619 14.3907 9.19137 13.6897 7.46004 12.5669C5.84926 11.5433 4.48359 10.1777 3.46004 8.56689C2.33336 6.8277 1.6322 4.84756 1.41337 2.78689C1.39671 2.60254 1.41862 2.41673 1.4777 2.24131C1.53679 2.06589 1.63175 1.90469 1.75655 1.76797C1.88134 1.63126 2.03324 1.52203 2.20256 1.44724C2.37189 1.37245 2.55493 1.33374 2.74004 1.33356H4.74004C5.06357 1.33038 5.37723 1.44495 5.62254 1.65592C5.86786 1.86689 6.02809 2.15986 6.07337 2.48023C6.15779 3.12027 6.31434 3.74871 6.54004 4.35356C6.62973 4.59218 6.64915 4.8515 6.59597 5.10081C6.5428 5.35012 6.41928 5.57897 6.24004 5.76023L5.39337 6.60689C6.34241 8.27592 7.72434 9.65786 9.39337 10.6069L10.24 9.76023C10.4213 9.58099 10.6501 9.45746 10.8994 9.40429C11.1488 9.35112 11.4081 9.37053 11.6467 9.46023C12.2516 9.68593 12.88 9.84248 13.52 9.92689C13.8439 9.97258 14.1396 10.1357 14.3511 10.3852C14.5625 10.6348 14.6748 10.9533 14.6667 11.2802Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_823_2303">
                    <rect width="16" height="16" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <span> +91 864 6444 2222</span>
            </Space>

            <Space className="header-mail">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.66659 2.6665H13.3333C14.0666 2.6665 14.6666 3.2665 14.6666 3.99984V11.9998C14.6666 12.7332 14.0666 13.3332 13.3333 13.3332H2.66659C1.93325 13.3332 1.33325 12.7332 1.33325 11.9998V3.99984C1.33325 3.2665 1.93325 2.6665 2.66659 2.6665Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.6666 4L7.99992 8.66667L1.33325 4"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span> info@suvega.com</span>
            </Space>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col lg={24} style={{ width: "100%", height: 50 }} sm={0} xs={0}></Col>
      </Row>
      <div className="bg-register-card">
        <Row>
          <Col lg={4} sm={0}></Col>

          <Col sm={24} lg={8} xs={24} className="left-register-div">
            <Flex gap={5}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 0.666504L11.575 5.88317L17.3333 6.72484L13.1666 10.7832L14.15 16.5165L8.99996 13.8082L3.84996 16.5165L4.83329 10.7832L0.666626 6.72484L6.42496 5.88317L8.99996 0.666504Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Flex vertical gap={5}>
                <Typography.Text style={{ color: "#FFFFFF80" }}>
                  Your Registered Email/Phone Number
                </Typography.Text>
                <span style={{ color: "white" }}>{params.numId}</span>
              </Flex>
            </Flex>
            <Flex gap={5}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.99996 0.666504L11.575 5.88317L17.3333 6.72484L13.1666 10.7832L14.15 16.5165L8.99996 13.8082L3.84996 16.5165L4.83329 10.7832L0.666626 6.72484L6.42496 5.88317L8.99996 0.666504Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Flex vertical gap={5}>
                <Typography.Text style={{ color: "#FFFFFF80" }}>
                  Using this app for
                </Typography.Text>
                <span style={{ color: "white" }}>{params.cType}</span>
              </Flex>
            </Flex>
          </Col>

          <Col sm={24} className="bg-lp-div" lg={8} xs={24}>
            <Flex
              justify="space-between"
              style={{
                margin: 20,
                border: "1px solid black",
                borderTop: "none",
                borderLeft: "none",
                borderRight: "none",
                borderColor: "#B0B0B0",
              }}
            >
              <Typography.Title id="offeringTxt">goodSeva</Typography.Title>
              <Typography.Title level={2} id="Text-Register">
                REGISTER
              </Typography.Title>
            </Flex>
            <Typography.Title
              style={{ fontSize: 24, textAlign: "center", fontWeight: 500 }}
              level={5}
            >
              Your Company category?
            </Typography.Title>

            <Flex vertical gap={30} className="company-div-step2">
              <Link
                href={`/register/${params.numId}/step1/${params.cType}/step2/Corporate/step3`}
              >
                <Button
                  style={{
                    width: "157px",
                    height: "42px",
                    backgroundColor: "#FEC6D1",
                  }}
                >
                  Corporate
                </Button>
              </Link>
              <Link
                href={`/register/${params.numId}/step1/${params.cType}/step2/Ecom/step3`}
              >
                <Button
                  style={{
                    width: "157px",
                    height: "42px",
                    backgroundColor: "#FEC6D1",
                  }}
                >
                  Ecom
                </Button>
              </Link>
              <Link
                href={`/register/${params.numId}/step1/${params.cType}/step2/Export/step3`}
              >
                <Button
                  style={{
                    width: "157px",
                    height: "42px",
                    backgroundColor: "#FEC6D1",
                  }}
                >
                  Export
                </Button>
              </Link>
            </Flex>
            <Row>
              <Col lg={1}></Col>
              <Col lg={23} className="backgoing-btn">
                <Button
                  shape="circle"
                  icon={
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.75 10H1.25M1.25 10L10 18.75M1.25 10L10 1.25"
                        stroke="#1E1E1E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  }
                  onClick={() => window.history.back()}
                ></Button>
              </Col>
            </Row>
          </Col>
          <Col lg={4} sm={0} xs={0}></Col>
        </Row>
      </div>
      <Row>
        <Col lg={24} style={{ width: "100%", height: 50 }} sm={0} xs={0}></Col>
      </Row>
    </div>
  );
}
