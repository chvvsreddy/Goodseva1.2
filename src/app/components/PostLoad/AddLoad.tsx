"use client";
import {  Button, Col, DatePicker, Divider, Flex, Form, Input, Row, Space, Typography,} from "antd";
import "../../styles/Postload.css";
import Lorryimg1 from "../../../../public/Lp3.png";
import Image from "next/image";
import { Radio } from "antd";
import Title from "antd/es/typography/Title";

export default function AddLoad() {
  const Goods_Types = [
    {
      title: "Comedities - Lorry",
      example: "Ex: Grains, Coal, Ore, Cement.",
    },
    {
      title: "Container",
      example: "Ex: Electronics, Clothing, Foo...",
    },
    {
      title: "Liquid - Tanker",
      example: "Ex: Crude Oil, Chemicals, LNG",
    },
    {
      title: "Gas- Tanker",
      example: "Ex: Natural Gas, Propane, Hy...",
    },
    {
      title: "Roll-on/Roll-off - Flatbed",
      example: "Ex: Cars, trucks, heavy mach...",
    },
    {
      title: "Project- Flatbed",
      example: "Ex: Large, Heavy, Complex Eq...",
    },
    {
      title: "Hazardous - SP Truck",
      example: "Ex: Chemicals, Explosives, Ra...",
    },
    {
      title: "A/C Reefer",
      example: "Ex: Fresh Produce, Meats, Da...",
    },
    {
      title: "Box Truck",
      example: "Ex: A Mix of Goods.",
    },
  ];
  return (
    <Flex vertical gap={15} style={{paddingTop:40, paddingBottom:40}}>
      <Flex vertical gap={10}>
      <Title level={2} style={{margin:0}}>Post a Load</Title>
      <Title level={5} style={{marginTop:0}}>Upload invoice to autofill load details</Title>
      </Flex>
      <Row>
        <Col lg={24}>
          <Flex id="upload-block" gap={20}>
            <div id="file-upload-btn">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 3H9C8.20435 3 7.44129 3.31607 6.87868 3.87868C6.31607 4.44129 6 5.20435 6 6V30C6 30.7956 6.31607 31.5587 6.87868 32.1213C7.44129 32.6839 8.20435 33 9 33H27C27.7956 33 28.5587 32.6839 29.1213 32.1213C29.6839 31.5587 30 30.7956 30 30V12M21 3L30 12M21 3V12H30M24 19.5H12M24 25.5H12M15 13.5H12"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Flex vertical style={{ marginTop: 8 }}>
              <Typography.Text id="drag-text1">
                Drag and drop an word/PDF file of invoice or Upload
              </Typography.Text>
              <Typography.Text id="drag-text2">
                Max file size: 10 MB. Supported formats: jpg/PDF/png/jpeg/img.
                Please ensure that all details on the image are clearly visible.
              </Typography.Text>
            </Flex>
          </Flex>
        </Col>
      </Row>
      <Row>
        <Col lg={24}>
        <Title level={5}>
            <Typography.Text>Load details</Typography.Text>
        </Title>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col lg={6}>
            <Form.Item>
              <Typography.Text>To</Typography.Text>
              <Input prefix={ <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" >
                    <circle cx="15" cy="15" r="15" fill="#E8F9EE" />
                    <circle cx="15" cy="15" r="5" fill="#0EBC93" />
                  </svg>  } placeholder="Vishakapatnam"  />
            </Form.Item> 
        </Col>
        <Col lg={6}>
          <Form.Item>          
              <Typography.Text>From</Typography.Text>
              <Input prefix={ <svg width="31" height="30"  viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <rect x="0.5" y="0" width="30" height="30" fill="#DCE0F9" fill-opacity="0.5" />
                    <rect x="10.5" y="10" width="10" height="10" fill="#8205AF" /> </svg>  } placeholder="Hyderabad" />
          </Form.Item>      
      </Col>
       
        <Col lg={6}>  
          <Form.Item>
            <Typography.Text>Weight</Typography.Text>
            <Input suffix="Tones" size="large" />
          </Form.Item>
          </Col>
          <Col lg={6}> 
            <Form.Item>
              <Flex vertical gap={0}>
                <Typography.Text>Select Date</Typography.Text>
                <DatePicker renderExtraFooter={() => "extra footer"} showTime size="large"  />
                  </Flex>
              </Form.Item>
          </Col>
          <Col lg={12}> 
            <Form.Item>
              <Flex vertical gap={10}>
                <Typography.Text>Price Type</Typography.Text>
                <Radio.Group size="large" className="radio-grp">
                  <Radio.Button value="a" id="radio-btn">
                    SpotPrice
                  </Radio.Button>
                  <Radio.Button value="b" id="radio-btn">
                    Your Price
                  </Radio.Button>
                  <Radio.Button value="c" id="radio-btn">
                    Smart Bid
                  </Radio.Button>
                </Radio.Group>
               
              </Flex>
            </Form.Item>
          </Col>
          <Col lg={12}> 
            <Form.Item>
              <Typography.Text>No of Truck</Typography.Text>
              <Input size="large" type="number" />
            </Form.Item>
          </Col>
          <Col lg={12}> 
            <Form.Item>
              <Typography.Text>Frequency Once in</Typography.Text>
              <Input suffix="Tones" size="large" />
            </Form.Item>
          </Col>

          <Col lg={6}>
            <Form.Item hasFeedback validateStatus="success">
              <Input value="Full Truck load" style={{ padding: 8 }} />
            </Form.Item>                
        </Col>
        <Col lg={6}>         
              <Form.Item hasFeedback>
                <Input value="Part Truck Load" style={{ padding: 8 }} />
              </Form.Item>           
        </Col>
        <Col lg={12}>
        <Typography.Text>Goods Type - Truck</Typography.Text>
        <Flex wrap gap={15}>
                {Goods_Types.map((e, index) => {
                  return (
                    <Button className="materials-btn" key={index}>
                      <Flex vertical gap={1}>
                        <Typography.Text id="materials-btn-text-main">
                          {e.title}
                        </Typography.Text>
                        <Typography.Text id="materials-btn-text">
                          {e.example}
                        </Typography.Text>
                      </Flex>
                    </Button>
                  );
                })}
              </Flex>
        </Col>
        <Col lg={12}>
          <Flex vertical gap={5}>
            <Typography.Text >
              Suggestions
            </Typography.Text>
            <Flex gap={20} wrap>
              <Flex vertical gap={10}>
                <Flex vertical id="selecting-trucks1">
                  <Image src={Lorryimg1} alt="lorry" width={50} />

                  <Flex justify="center" id="open-truck-div">
                    <Typography.Text id="open-truck-text">
                      Open Truck
                    </Typography.Text>
                  </Flex>
                  <Flex justify="space-evenly">
                    <Typography.Text id="truck-properities">
                      20Ton
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      SXL
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      20*8*8
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex vertical gap={10}>
                <Flex vertical id="selecting-trucks1">
                  <Image src={Lorryimg1} alt="lorry" width={50} />

                  <Flex justify="center" id="open-truck-div">
                    <Typography.Text id="open-truck-text">
                      Box Truck
                    </Typography.Text>
                  </Flex>
                  <Flex justify="space-evenly">
                    <Typography.Text id="truck-properities">
                      20Ton
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      SXL
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      20*8*8
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
              <Flex vertical gap={10}>
                <Flex vertical id="selecting-trucks1">
                  <Image src={Lorryimg1} alt="lorry" width={50} />

                  <Flex justify="center" id="open-truck-div">
                    <Typography.Text id="open-truck-text">
                      Refrigerator Truck
                    </Typography.Text>
                  </Flex>
                  <Flex justify="space-evenly">
                    <Typography.Text id="truck-properities">
                      20Ton
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      SXL
                    </Typography.Text>
                    <Typography.Text id="truck-properities">
                      20*8*8
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Col>
      </Row>

      <Row>
        <Col lg={18}></Col>
        <Col lg={6}>
          <Flex gap={25}>
            <Button size="large" id="saveAsDraftBtn">
              Save as Draft
            </Button>
            <Button size="large" id="postBtn">
              Post
            </Button>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
}
