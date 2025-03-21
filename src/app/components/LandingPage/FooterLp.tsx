
import { Button, Col, Divider, Flex, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";
import "../../styles/LandingPage.css";

export default function FooterLp() {
  return (
    <div style={{ width: "100%" }} className="footer-main">
      <Flex vertical gap={5}>
        <Row>
          <Col sm={2} xs={0}></Col>
          <Col sm={5} xs={24}>
            <Flex vertical>
              <Title style={{ fontFamily: "El Messiri", color: "#7F1126" }}>
                goodSeva
              </Title>
              <Typography.Paragraph
                style={{ fontSize: 16, width: 331, height: 78 }}
              >
                {" "}
                Faucibus quis fringilla scelerisque dui. Amet parturient dui
                venenatis amet sagittis viverra vel tincidunt. Orci tincidunt.
              </Typography.Paragraph>
            </Flex>
            <Button id="footer-chat-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8144 10.6623C20.8179 11.8355 20.5095 12.9928 19.9144 14.04C19.2089 15.2949 18.1242 16.3504 16.7819 17.0883C15.4396 17.8261 13.8927 18.2173 12.3144 18.2178C10.9946 18.2209 9.69256 17.9468 8.51444 17.4178L2.81445 19.1067L4.71445 14.04C4.11938 12.9928 3.81101 11.8355 3.81445 10.6623C3.81506 9.25938 4.25506 7.88435 5.08517 6.6912C5.91527 5.49804 7.1027 4.53388 8.51444 3.90671C9.69256 3.37776 10.9946 3.10366 12.3144 3.10671H12.8144C14.8988 3.20893 16.8675 3.99095 18.3436 5.30303C19.8197 6.61512 20.6994 8.36506 20.8144 10.2178V10.6623Z"
                  stroke="#7F1126"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.84684 12.1067C8.55018 12.1067 8.30098 12.0131 8.09925 11.826C7.90939 11.6272 7.81445 11.3874 7.81445 11.1067C7.81445 10.826 7.90939 10.5921 8.09925 10.4049C8.30098 10.2061 8.55018 10.1067 8.84684 10.1067C9.13163 10.1067 9.36897 10.2061 9.55883 10.4049C9.76056 10.5921 9.86142 10.826 9.86142 11.1067C9.86142 11.3874 9.76056 11.6272 9.55883 11.826C9.36897 12.0131 9.13163 12.1067 8.84684 12.1067Z"
                  fill="#7F1126"
                />
                <path
                  d="M12.3234 12.1067C12.0267 12.1067 11.7775 12.0131 11.5758 11.826C11.3859 11.6272 11.291 11.3874 11.291 11.1067C11.291 10.826 11.3859 10.5921 11.5758 10.4049C11.7775 10.2061 12.0267 10.1067 12.3234 10.1067C12.6081 10.1067 12.8455 10.2061 13.0353 10.4049C13.2371 10.5921 13.3379 10.826 13.3379 11.1067C13.3379 11.3874 13.2371 11.6272 13.0353 11.826C12.8455 12.0131 12.6081 12.1067 12.3234 12.1067Z"
                  fill="#7F1126"
                />
                <path
                  d="M15.7999 12.1067C15.5032 12.1067 15.254 12.0131 15.0523 11.826C14.8624 11.6272 14.7675 11.3874 14.7675 11.1067C14.7675 10.826 14.8624 10.5921 15.0523 10.4049C15.254 10.2061 15.5032 10.1067 15.7999 10.1067C16.0847 10.1067 16.322 10.2061 16.5119 10.4049C16.7136 10.5921 16.8145 10.826 16.8145 11.1067C16.8145 11.3874 16.7136 11.6272 16.5119 11.826C16.322 12.0131 16.0847 12.1067 15.7999 12.1067Z"
                  fill="#7F1126"
                />
              </svg>
              Start Live Chat
            </Button>
          </Col>
          <Col sm={5} xs={0}></Col>
          <Col sm={10} xs={24} className="f-resources">
            <Flex gap={30}>
              <Flex vertical gap={8}>
                <Title
                  level={5}
                  style={{ color: "#7F1126" }}
                  id="footer-head-Title"
                >
                  Company
                </Title>
                <Typography.Text style={{ fontSize: 16 }}>
                  About Us
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Our Partners
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Support Center
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Our Network
                </Typography.Text>
              </Flex>
              <Flex vertical gap={8}>
                <Title
                  level={5}
                  style={{ color: "#7F1126" }}
                  id="footer-head-Title"
                >
                  Resources
                </Title>
                <Typography.Text style={{ fontSize: 16 }}>
                  Packing Supplies
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>Faqs</Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Pricing and Quotes
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Tips and Guides
                </Typography.Text>
              </Flex>
              <Flex vertical gap={8}>
                <Title
                  level={5}
                  style={{ color: "#7F1126" }}
                  id="footer-head-Title"
                >
                  Help
                </Title>
                <Typography.Text style={{ fontSize: 16 }}>
                  Customer Support
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Delivery Details
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Terms & Conditions
                </Typography.Text>
                <Typography.Text style={{ fontSize: 16 }}>
                  Privacy Policy
                </Typography.Text>
              </Flex>
            </Flex>
          </Col>

          <Col sm={2} xs={0}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={20}>
            <Divider variant="solid" style={{ borderColor: "black" }} />
          </Col>
          <Col sm={2}></Col>
        </Row>
        <Row>
          <Col sm={2}></Col>
          <Col sm={20}>
            <Typography.Text>Copyright &copy; 2024 Suvega</Typography.Text>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Flex>
    </div>
  );
}
