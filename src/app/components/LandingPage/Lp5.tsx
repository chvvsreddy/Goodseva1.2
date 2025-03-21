import { Button, Col, Row } from "antd";
import Title from "antd/es/typography/Title";


export default function Lp5() {
  return (
    <div className="layoutStyle">
    <div className="lp5-banner">
      <Row className="banner">
        <Col span={2}></Col>
        <Col span={20}>
          <Title level={2}>Mega Savings On Loads</Title>
          <Title level={2} style={{ color: "white" }}>
             Streamline Your Move, Save Big, and Enjoy
          </Title>
          <Title level={2} style={{ color: "white" }}>
            a Stress-Free Relocation!
          </Title>
          <Button className="button-primary">
            Get Started
          </Button>
        </Col>
        <Col span={2}></Col>
      </Row>
    </div>
    </div>
  );
}
