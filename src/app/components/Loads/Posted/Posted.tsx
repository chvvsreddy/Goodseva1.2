import { Button, Col, Flex, Row, Space, Typography } from "antd";
import styles from "../../../styles/LoadView.module.css";
import Link from "next/link";
export default function Posted() {
  return (
    <Row>
      <Flex vertical style={{ width: "100%" }} gap={10}>
        {new Array(3).fill("").map((_, index) => {
          return (
            <Flex key={index}>
              <Col lg={24}>
                <Flex
                  justify="space-between"
                  style={{
                    border: "1px solid #E8E8E8",
                    borderRadius: 12,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 12,
                    paddingRight: 12,
                    width: "100%",
                  }}
                >
                  <Flex gap={8}>
                    <Space>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 30 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="15" cy="15.5" r="15" fill="#E3E3E3" />
                        <circle cx="15" cy="15.5" r="5" fill="black" />
                      </svg>
                    </Space>
                    <Flex vertical>
                      <Typography.Text className={styles.FromLocation}>
                        530008
                      </Typography.Text>
                      <Typography.Text>Visakhapatnam</Typography.Text>
                    </Flex>
                  </Flex>
                  <Flex gap={8}>
                    <Space>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 31 31"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.673828"
                          y="0.25"
                          width="30"
                          height="30"
                          fill="#E3E3E3"
                        />
                        <rect
                          x="10.673828"
                          y="10.25"
                          width="10"
                          height="10"
                          fill="black"
                        />
                      </svg>
                    </Space>
                    <Flex vertical>
                      <Typography.Text className={styles.FromLocation}>
                        500018
                      </Typography.Text>
                      <Typography.Text>Hyderabad</Typography.Text>
                    </Flex>
                  </Flex>
                  <Flex vertical>
                    <Typography.Text className={styles.FromLocation}>
                      Equipment Type
                    </Typography.Text>
                    <Typography.Text>Dry Van</Typography.Text>
                  </Flex>
                  <Flex vertical>
                    <Typography.Text className={styles.FromLocation}>
                      Shipment Type
                    </Typography.Text>
                    <Typography.Text>Food Material</Typography.Text>
                  </Flex>
                  <Flex vertical>
                    <Typography.Text className={styles.FromLocation}>
                      No of Trucks
                    </Typography.Text>
                    <Typography.Text>09</Typography.Text>
                  </Flex>
                  <Flex vertical>
                    <Typography.Text className={styles.FromLocation}>
                      Est Pickup
                    </Typography.Text>
                    <Typography.Text>12-11-24</Typography.Text>
                  </Flex>
                  <Flex vertical>
                    <Typography.Text className={styles.FromLocation}>
                      Est Delivery
                    </Typography.Text>
                    <Typography.Text>12-11-24</Typography.Text>
                  </Flex>
                  <Link href={"/dashboard/loads/trips"}>
                    <Button>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_918_39504)">
                          <path
                            d="M0.833008 10.009C0.833008 10.009 4.16634 3.34229 9.99967 3.34229C15.833 3.34229 19.1663 10.009 19.1663 10.009C19.1663 10.009 15.833 16.6756 9.99967 16.6756C4.16634 16.6756 0.833008 10.009 0.833008 10.009Z"
                            stroke="#8205AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M9.99967 12.509C11.3804 12.509 12.4997 11.3897 12.4997 10.009C12.4997 8.62824 11.3804 7.50895 9.99967 7.50895C8.61896 7.50895 7.49967 8.62824 7.49967 10.009C7.49967 11.3897 8.61896 12.509 9.99967 12.509Z"
                            stroke="#8205AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_918_39504">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(0 0.00878906)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Button>
                  </Link>
                </Flex>
              </Col>
            </Flex>
          );
        })}
      </Flex>
    </Row>
  );
}
