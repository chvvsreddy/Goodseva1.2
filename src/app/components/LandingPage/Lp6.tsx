import { Col, Divider, Flex, Row, Typography } from "antd";
import Image from "next/image";
import worker from "../../../../public/happiness.png";
import Title from "antd/es/typography/Title";
import "../../styles/LandingPage.css";

export default function Lp6() {
  return (
    <div>
      <Row style={{ display: "flex" }} className="main-Lp6">
        <Col sm={0} xs={0} lg={2}></Col>
        <Col sm={24} xs={24} lg={8}>
          <Flex vertical gap={10} >
            <Image src={worker} alt="worker" className="Lp6-Img"></Image>
            <Flex vertical>
              <Title level={4} style={{ fontSize: 32, fontWeight: 400 }}>
                Contact Our Expert
              </Title>
              <Typography.Text
                style={{ fontWeight: 400, fontSize: 16, color: "#98A393" }}
              >
                Reach Out to Our Professionals
              </Typography.Text>
              <Typography.Text
                style={{ fontWeight: 400, fontSize: 16, color: "#98A393" }}
              >
                for Moving Advice
              </Typography.Text>
            </Flex>
          </Flex>
        </Col>
        <Col sm={0} xs={0} lg={1}></Col>
        <Col sm={24} xs={24} lg={11}>
          <Flex vertical wrap>
            <Flex>
              <Title level={2} id="main-head-Lp6">
                The <span id="offeringTxt">Step-by-Step</span> Guide to Your
                Seamless Loads
              </Title>
            </Flex>
            <Flex vertical>
              <Typography.Paragraph
                style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
              >
                <span style={{ color: "black" }}>
                  Initial Consultation and Assessment -{" "}
                </span>
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget.
                <Divider variant="solid" style={{ borderColor: "#DEE2DD" }} />
              </Typography.Paragraph>
              <Typography.Paragraph
                style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
              >
                <span style={{ color: "black" }}>
                  Customized Moving Plan -{" "}
                </span>
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget.
                <Divider variant="solid" style={{ borderColor: "#DEE2DD" }} />
              </Typography.Paragraph>
              <Typography.Paragraph
                style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
              >
                <span style={{ color: "black" }}>
                  Packing and Transportation -{" "}
                </span>
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget.
                <Divider variant="solid" style={{ borderColor: "#DEE2DD" }} />
              </Typography.Paragraph>
              <Typography.Paragraph
                style={{ fontSize: 18, fontWeight: 400, color: "#808380" }}
              >
                <span style={{ color: "black" }}>
                  Delivery and Unpacking -{" "}
                </span>
                Lorem morbi et amet suscipit. At sed proin quis risus urna a.
                Magna in odio in urna amet ultrices fermentum. Mauris in pretium
                eget.
              </Typography.Paragraph>
            </Flex>
          </Flex>
        </Col>
        <Col sm={2} xs={0} lg={2}></Col>
      </Row>
    </div>
  );
}
