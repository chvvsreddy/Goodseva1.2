"use client";
import React, { useState } from "react";
import "./Form.css";
import styles from "./Form.module.css";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Radio,
  Row,
  Select,
  Space,
  Tabs,
  TabsProps,
  theme,
  Typography,
} from "antd";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  FileTextOutlined,
  InfoCircleOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const goodsTruckTypes = [
  {
    title: "Commodities - Lorry",
    description: "Ex: Grains, Coal, Ore, Cement",
  },
  { title: "Container", description: "Ex: Electronics, Clothing, Food" },
  { title: "Gas - Tanker", description: "Ex: Natural Gas, Propane, Hydrogen" },
  {
    title: "Roll-on/Roll-off - Flatbed",
    description: "Ex: Cars, trucks, heavy machinery",
  },
  {
    title: "Hazardous - SP Truck",
    description: "Ex: Chemicals, Explosives, Radioactive",
  },
  { title: "A/C Reefer", description: "Ex: Fresh Produce, Meats, Dairy" },
  { title: "Liquid - Tanker", description: "Ex: Crude Oil, Chemicals, LNG" },
  {
    title: "Project - Flatbed",
    description: "Ex: Large, Heavy, Complex Equipment",
  },
  { title: "Box Truck", description: "Ex: A Mix of Goods" },
];

const priceType: TabsProps["items"] = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: "Content of Tab Pane 3",
  },
];

const LogisticsFormTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"post_load" | "shipment">(
    "post_load"
  );

  const [activePriceChangeTab, setActivePriceChangeTab] = useState<
    "spot_price" | "your_price" | "smart_bid"
  >("spot_price");

  const [form] = Form.useForm();
  const [loadType, setLoadType] = useState("full");

  const handleLoadTypeChange = (e: any) => {
    setLoadType(e.target.value);
  };

  const onChangePriceType = (key: string) => {
    console.log(key);
  };

  // for steps

  const [currentStep, setCurrentStep] = useState(0);
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => prev - 1);
  };

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const [activeTruckCard, setActiveTruckCard] = useState<number | null>(null);

  const handleTruckCardClick = (index: number) => {
    setActiveTruckCard(index);
  };

  const truckCardData = [
    {
      id: 1,
      imgSrc: "/container.png",
      title: "Open Truck",
      details: ["20Ton", "SXL", "20 x 8 x 8"],
    },
    {
      id: 2,
      imgSrc: "/container (1).png",
      title: "Box Truck",
      details: ["20Ton", "SXL", "20 x 8 x 8"],
    },
    {
      id: 3,
      imgSrc: "/container (2).png",
      title: "Refrigerator Truck",
      details: ["20Ton", "SXL", "20 x 8 x 8"],
    },
  ];

  // Trucks change
  const handleNumberOfTrucksChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const steps = [
    {
      title: "First",
      content: (
        <div>
          <Form layout="vertical" form={form}>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <Radio.Group defaultValue="company">
                <Radio.Button value="company">Company</Radio.Button>
                <Radio.Button value="ppersonal">Personal</Radio.Button>
              </Radio.Group>
              <div className="upload-invoice">
                <p className="form-titles">
                  Upload invoice to autofill load details
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    border: "2px dashed rgba(176, 176, 176, 1)",
                    borderRadius: 10,
                    padding: 5,
                    margin: "10px 0px",
                  }}
                >
                  <div
                    style={{
                      width: "15%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <FileTextOutlined
                      style={{
                        fontSize: 20,
                        border: "1px solid rgba(127, 17, 38, 1)",
                        borderRadius: "50%",
                        padding: 10,
                        background: "rgba(127, 17, 38, 1)",
                        color: "white",
                      }}
                    />
                  </div>
                  <div style={{ width: "85%" }}>
                    <p className="upload-inoiceTitle">
                      Drag and drop an Word/PDF file of invoice or Upload
                    </p>
                    <p className="upload-invoiceDescription">
                      Max file size: 10 MB. Supported formats:
                      jpg/PDF/png/jpeg/img. Please ensure that all details on
                      the image are clearly visible.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Row
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Col
                    lg={11}
                    style={{
                      borderBottom: "0.1px solid rgba(176, 176, 176, 1)",
                    }}
                  ></Col>
                  <Col lg={2}>or</Col>
                  <Col
                    lg={11}
                    style={{
                      borderBottom: "0.1px solid rgba(176, 176, 176, 1)",
                    }}
                  ></Col>
                </Row>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <Form.Item label="To" style={{ flex: 1, marginBottom: 0 }}>
                  <Input
                    placeholder="Visakhapatnam"
                    prefix={
                      <img
                        src="location1.png"
                        alt="Location Icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    }
                  />
                </Form.Item>
                <Form.Item label="From" style={{ flex: 1, marginBottom: 0 }}>
                  <Input
                    placeholder="Hyderabad"
                    prefix={
                      <img
                        src="location2.png"
                        alt="Location Icon"
                        style={{ width: "30px", height: "30px" }}
                      />
                    }
                  />
                </Form.Item>
              </div>
              <p className="form-titles">Choose Service Type</p>

              <Radio.Group
                onChange={handleLoadTypeChange}
                className="custom-radio-group"
                value={loadType}
                style={{
                  display: "flex",
                  width: "100%",
                  gap: 20,
                  borderRadius: 5,
                }}
              >
                <Radio.Button
                  value="full"
                  style={{
                    width: "100%",
                    borderRadius: 5,
                    height: 44,
                    border:
                      loadType === "full"
                        ? "1px solid rgba(127, 17, 38, 1)"
                        : " 1px solid rgba(196, 196, 196, 1)", // Highlight selected button
                    padding: "0 12px", // Add internal padding
                  }}
                >
                  {" "}
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "44px",
                    }}
                  >
                    <span>Full Truck Load</span>
                    {loadType === "full" && (
                      <CheckCircleFilled
                        style={{
                          fontSize: 20,
                          color: "#93d593",
                        }}
                      />
                    )}
                  </div>
                </Radio.Button>

                <Radio.Button
                  value="part"
                  style={{
                    width: "100%",
                    borderRadius: 5,
                    height: 44,
                    border:
                      loadType === "part"
                        ? "1px solid rgba(127, 17, 38, 1)"
                        : "1px solid rgba(196, 196, 196, 1)", // Highlight selected button
                    padding: "0 12px", // Add internal padding
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      height: "44px",
                    }}
                  >
                    <span>Part Truck Load</span>
                    {loadType === "part" && (
                      <CheckCircleFilled
                        style={{
                          fontSize: 20,
                          color: "#93d593",
                        }}
                      />
                    )}
                  </div>
                </Radio.Button>
              </Radio.Group>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <Form.Item
                  label="Weight"
                  style={{
                    flex: 1,
                    height: 44,
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 0,
                  }}
                >
                  <Input
                    type="number"
                    placeholder="Enter in tonnes"
                    style={{ height: 44 }}
                    suffix="Tones"
                  />
                </Form.Item>
                <Form.Item
                  label="Select Date"
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: 600,
                    marginBottom: 0,
                  }}
                >
                  <DatePicker
                    style={{ width: "100%", height: 44 }}
                    placeholder="Select Date"
                    suffixIcon={<CalendarOutlined />}
                  />
                </Form.Item>
              </div>

              {/* <Tabs defaultActiveKey="1" items={priceType} onChange={onChangePriceType} /> */}

              <div className="priceTabbedPanel">
                {/* Tabs */}
                <p className="form-titles">Price Type</p>
                <div style={{ display: "flex", gap: 10 }}>
                  <div className="priceTabs">
                    <button
                      className={`priceTabButton ${
                        activePriceChangeTab === "spot_price" ? "active" : ""
                      }`}
                      onClick={() => setActivePriceChangeTab("spot_price")}
                    >
                      Spot Price
                    </button>
                    <button
                      className={`priceTabButton ${
                        activePriceChangeTab === "your_price" ? "active" : ""
                      }`}
                      onClick={() => setActivePriceChangeTab("your_price")}
                    >
                      Your Price
                    </button>
                    <button
                      className={`priceTabButton ${
                        activePriceChangeTab === "smart_bid" ? "active" : ""
                      }`}
                      onClick={() => setActivePriceChangeTab("smart_bid")}
                    >
                      Smart Bid
                    </button>
                  </div>
                  <InfoCircleOutlined style={{ fontSize: 20 }} />
                </div>
                {/* Tab Contents */}
                <div className={styles.priceTabContent}>
                  {activePriceChangeTab === "spot_price" && (
                    <div className={styles.priceContentPanel}>
                      {/* <h2>Spot Price</h2>
                        <p>Spot Price...</p> */}
                    </div>
                  )}
                  {activePriceChangeTab === "your_price" && (
                    <div className={styles.priceContentPanel}>
                      {/* <h2>Your Price</h2>
                        <p>Your price...</p> */}
                    </div>
                  )}
                  {activePriceChangeTab === "smart_bid" && (
                    <div className={styles.priceContentPanel}>
                      {/* <h2>Smart Bid</h2>
                        <p>Smart Bid...</p> */}
                    </div>
                  )}
                </div>
              </div>

              {/* <Form.Item label="Goods Type - Truck">
                  <div className={styles.cardContainer}>
                    <Row gutter={[16, 16]}>
                      {goodsTruckTypes.map((item, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                          <Card hoverable className={styles.cardItem} >
                            <Text strong>{item.title}</Text>
                            <p style={{ marginTop: "8px", color: "#888" }}>
                              {item.description}
                            </p>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </div>
                </Form.Item> */}

              <Space className={styles.continueButton}>
                <Button
                  htmlType="submit"
                  block
                  className={styles.primaryButton}
                  onClick={handleNext}
                >
                  Continue
                </Button>
              </Space>
            </Space>
          </Form>
        </div>
      ),
    },
    {
      title: "Second",
      content: (
        <div>
          <Title level={5}>Goods Type - Truck</Title>
          {/* Add additional fields for the second step */}
          {/* <p>Step 2 form content goes here.</p> */}
          <Form layout="vertical" form={form} style={{ marginBottom: 5 }}>
            <Form.Item>
              <div className={styles.cardContainer}>
                <Row gutter={[16, 16]}>
                  {goodsTruckTypes.map((item, index) => (
                    <Col xs={24} sm={12} md={8} key={index}>
                      <Card
                        hoverable
                        className={`${styles.cardItem} ${
                          activeIndex === index ? styles.activeCard : ""
                        }`}
                        onClick={() => handleCardClick(index)}
                        style={{
                          borderColor:
                            activeIndex === index ? "#1890ff" : "#d9d9d9",
                          borderWidth: activeIndex === index ? "2px" : "1px",
                        }}
                      >
                        <Typography className={styles.cardTitle}>
                          {item.title}
                        </Typography>
                        <p
                          className={styles.cardDescription}
                          style={{ marginTop: "2px", color: "#888" }}
                        >
                          {item.description}
                        </p>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </Form.Item>
            <Form.Item label={<b>Suggestions</b>} style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", gap: 10 }}>
                {/* <Card className={styles.truckCard}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="/container.png" alt="container img" style={{width:"100%",height:"100%"}}/>
                  </div>
                  <Typography className={styles.truckType}>Open Truck</Typography>
                  <Typography className={styles.truckDescription}><p>20Ton</p><p>SXL</p><p>20 x 8 x 8</p> </Typography>
                  
                </Card>
                <Card className={styles.truckCard}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src="/container (1).png" alt="container img" style={{width:"100%",height:"100%"}}/>
                  </div>
                  <Typography className={styles.truckType}>Box Truck</Typography>
                  <Typography className={styles.truckDescription}><p>20Ton</p><p>SXL</p><p>20 x 8 x 8</p> </Typography>
                </Card>
                <Card className={styles.truckCard}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img src="/container (2).png" alt="container img" style={{width:"100%",height:"100%"}}/>
                  </div>
                  <Typography className={styles.truckType}>Refrigerator Truck</Typography>
                  <Typography className={styles.truckDescription}><p>20Ton</p><p>SXL</p><p>20 x 8 x 8</p> </Typography>
                </Card> */}
                {truckCardData.map((card, index) => (
                  <Card
                    key={card.id}
                    className={`${styles.truckCard} ${
                      activeTruckCard === index ? styles.activeTruckCard : ""
                    }`}
                    onClick={() => handleTruckCardClick(index)}
                    style={{
                      borderColor:
                        activeTruckCard === index ? "#1890ff" : "#d9d9d9",
                      borderWidth: activeTruckCard === index ? "2px" : "1px",
                      cursor: "pointer",
                      width: "30%", // Ensures 3 cards fit in a row
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={card.imgSrc}
                        alt={`${card.title} image`}
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                    <Typography className={styles.truckType}>
                      {card.title}
                    </Typography>
                    <Typography className={styles.truckDescription}>
                      {card.details.map((detail, i) => (
                        <p key={i}>{detail}</p>
                      ))}
                    </Typography>
                  </Card>
                ))}
              </div>
            </Form.Item>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Form.Item
                label="No of Truck"
                style={{
                  flex: 1,
                  height: 44,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <Select
                  defaultValue="1"
                  style={{
                    height: 44,
                    border: "1px solid rgba(196, 196, 196, 1)",
                    borderRadius: 8,
                  }}
                  onChange={handleNumberOfTrucksChange}
                  options={[
                    { value: 1, label: 1 },
                    { value: 2, label: 2 },
                    { value: 3, label: 3 },
                    { value: 4, label: 4, disabled: false },
                  ]}
                />
              </Form.Item>
              <Form.Item
                label="Frequency Once in"
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <Input
                  type="number"
                  defaultValue={2}
                  style={{ height: 44 }}
                  suffix="Days"
                />
              </Form.Item>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <Form.Item
                label="Phone Number"
                style={{
                  flex: 1,
                  height: 44,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <Input
                  type="number"
                  style={{ height: 44 }}
                  placeholder="Phone Number"
                  prefix={
                    <PhoneOutlined
                      style={{ fontSize: 24, transform: "rotate(-270deg)" }}
                    />
                  }
                />
              </Form.Item>
              <Form.Item
                label="Company Email"
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <Input
                  type="email"
                  prefix={<MailOutlined style={{ fontSize: 24 }} />}
                  style={{ height: 44 }}
                  placeholder="Enter Email"
                />
              </Form.Item>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                borderBottom: "1px solid #c4c4c4",
              }}
            >
              <Form.Item
                label="CIN No"
                style={{
                  flex: 1,
                  height: 44,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <Input
                  type="Text"
                  style={{ height: 44 }}
                  placeholder="Enter CIN Number"
                />
              </Form.Item>
              <Form.Item
                label="GST No"
                style={{
                  flex: 1,
                  fontSize: 14,
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                <Input
                  type="text"
                  style={{ height: 44 }}
                  placeholder="Enter GST No"
                />
              </Form.Item>
            </div>
          </Form>
        </div>
      ),
    },
  ];

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="tabbed-panel">
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "post_load" ? "active" : ""}`}
          onClick={() => setActiveTab("post_load")}
        >
          Post asdqwrqREQ3Load
        </button>
        <button
          className={`tab-button ${activeTab === "shipment" ? "active" : ""}`}
          onClick={() => setActiveTab("shipment")}
        >
          Track Shipment
        </button>
      </div>

      {/* Tab Contents */}
      <div className="tab-content">
        {activeTab === "post_load" && (
          <div className="content-panel">
            <div className="steps-content">{steps[currentStep].content}</div>
            <div className="steps-action">
              {currentStep > 0 && (
                <Button
                  className="back-button"
                  onClick={handlePrevious}
                  style={{ marginRight: 8 }}
                >
                  <ArrowLeftOutlined />
                </Button>
              )}
              {/* {currentStep < steps.length - 1 && (
                <Button onClick={handleNext}>
                  Continue
                </Button>
              )} */}
              {currentStep === steps.length - 1 && (
                <Button className="continue-button">Continue</Button>
              )}
            </div>
          </div>
        )}
        {activeTab === "shipment" && (
          <div className="content-panel">
            <h2>Track Shipment</h2>
            {/* Add personal-specific content here */}
            <p>Personal content goes here...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogisticsFormTabs;
