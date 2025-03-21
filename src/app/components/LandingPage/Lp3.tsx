import { Col,  Row, Typography } from "antd";
import Image from "next/image";
import lorry from "../../../../public/Lorry1.png";
import Title from "antd/es/typography/Title";
import "../../styles/LandingPage.css";

export default function Lp3() {
  return (
    <div className="layoutStyle">
      <div className="L3Main" >
        <Row gutter={[16, 16]}>
          <Col lg={2}></Col>
          <Col xs={24} sm={20} md={24} lg={9}>
            <Image src={lorry} alt="lorry" className="Lp2-Left_img" />
          </Col>
          <Col lg={2}></Col>
          <Col xs={24} sm={20} md={14} lg={9}>
            <div>
              <Title level={2} id="lp3-banner">
                <span style={{ color: "yellow" }}>About Us:</span> Your Reliable
                Goods Moving Partner
              </Title>

              <Typography.Paragraph className="Lp3-paragraph">
                Elementum fames et massa molestie. Dolor habitasse id sit cras
                ultricies sit. Morbi sollicitudin quam enim est turpis aliquet.
                Diam in id quis diam. Lacus vestibulum habitant sollicitudin
                egestas. Porttitor enim duis dui in mi.
              </Typography.Paragraph>
            </div>
            <Row gutter={[16, 16]} className="Lp3-Head">
              <Col xs={8}>
                <Title level={2} id="lp3-head-text">
                  32+
                </Title>
                <Typography.Text id="lp3-head-span">
                  Years Of Experience
                </Typography.Text>
              </Col>
              <Col xs={8}>
                <Title level={2} id="lp3-head-text">
                  12k
                </Title>
                <Typography.Text id="lp3-head-span">
                  Satisfied Clients
                </Typography.Text>
              </Col>
              <Col xs={8}>
                <Title level={2} id="lp3-head-text">
                  20+
                </Title>
                <Typography.Text id="lp3-head-span">
                  Countries Served
                </Typography.Text>
              </Col>
            </Row>
          </Col>
          <Col lg={2}></Col>
        </Row>
      </div>
    </div>
  );
}
