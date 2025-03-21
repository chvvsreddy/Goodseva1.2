import { Avatar, Button, Flex, Typography } from "antd";
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import styles from "../../styles/LoadView.module.css";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  { key: "1", label: "Driver Info", children: <DriverInfo /> },
  { key: "2", label: "Load Details", children: "Content of Tab Pane 2" },
  { key: "3", label: "Vehicle", children: "Content of Tab Pane 3" },
  { key: "4", label: "Destination Info", children: "Content of Tab Pane 4" },
  { key: "5", label: "Documents", children: "Content of Tab Pane 5" },
];

export default function Driver() {
  return (
    <Flex>
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        style={{ width: "100%" }}
      />
    </Flex>
  );
}

function DriverInfo() {
  const driverDetails = {
    IDNumber: "7456-123-234",
    DriversLicense: "7456-123-234",
    InsuranceNo: "7456-1234-2345",
  };
  return (
    <Flex style={{ width: "100%" }} vertical gap={20}>
      <Flex gap={20} style={{ width: "100%" }}>
        <Avatar src="/happyness.png" size={54} />
        <Flex justify="space-between" style={{ width: "100%" }}>
          <Flex vertical justify="center">
            <Typography.Text style={{ fontSize: 14, fontWeight: 600 }}>
              Rakesh Sharma
            </Typography.Text>
            <Typography.Text
              style={{ fontSize: 12, fontWeight: 500, color: "#B0B0B0" }}
            >
              Driver
            </Typography.Text>
          </Flex>
          <Flex gap={20}>
            <Button style={{ backgroundColor: "rgb(239, 231, 231)" }}>
              <svg
                width="23"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.879 18.33C20.879 18.69 20.8047 19.06 20.647 19.42C20.4893 19.78 20.2851 20.12 20.0161 20.44C19.5614 20.98 19.0604 21.37 18.4944 21.62C17.9377 21.87 17.3346 22 16.6851 22C15.7388 22 14.7274 21.76 13.6604 21.27C12.5934 20.78 11.5264 20.12 10.4687 19.29C9.40164 18.45 8.3903 17.52 7.42535 16.49C6.46968 15.45 5.6068 14.36 4.8367 13.22C4.07587 12.08 3.4635 10.94 3.01814 9.81C2.57278 8.67 2.3501 7.58 2.3501 6.54C2.3501 5.86 2.46144 5.21 2.68412 4.61C2.9068 4 3.25938 3.44 3.75113 2.94C4.34494 2.31 4.99443 2 5.68103 2C5.94082 2 6.20061 2.06 6.43257 2.18C6.67381 2.3 6.88721 2.48 7.05422 2.74L9.2068 6.01C9.37381 6.26 9.49443 6.49 9.57793 6.71C9.66144 6.92 9.70783 7.13 9.70783 7.32C9.70783 7.56 9.64288 7.8 9.51298 8.03C9.39237 8.26 9.21608 8.5 8.9934 8.74L8.28824 9.53C8.18618 9.64 8.13979 9.77 8.13979 9.93C8.13979 10.01 8.14907 10.08 8.16762 10.16C8.19546 10.24 8.22329 10.3 8.24185 10.36C8.40886 10.69 8.69649 11.12 9.10474 11.64C9.52226 12.16 9.96762 12.69 10.4501 13.22C10.9511 13.75 11.4336 14.24 11.9254 14.69C12.4078 15.13 12.8068 15.43 13.1223 15.61C13.1687 15.63 13.2243 15.66 13.2893 15.69C13.3635 15.72 13.4377 15.73 13.5212 15.73C13.679 15.73 13.7996 15.67 13.9016 15.56L14.6068 14.81C14.8388 14.56 15.0614 14.37 15.2748 14.25C15.4882 14.11 15.7016 14.04 15.9336 14.04C16.1099 14.04 16.2955 14.08 16.4996 14.17C16.7037 14.26 16.9171 14.39 17.1491 14.56L20.2202 16.91C20.4614 17.09 20.6284 17.3 20.7305 17.55C20.8233 17.8 20.879 18.05 20.879 18.33Z"
                  stroke="#7F1126"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
              </svg>
              Call
            </Button>
            <Button style={{ backgroundColor: "rgb(239, 231, 231)" }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 23 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.29851 19H7.83459C4.12325 19 2.26758 18 2.26758 13V8C2.26758 4 4.12325 2 7.83459 2H15.2573C18.9686 2 20.8243 4 20.8243 8V13C20.8243 17 18.9686 19 15.2573 19H14.7934C14.5057 19 14.2274 19.15 14.0511 19.4L12.6593 21.4C12.047 22.28 11.0449 22.28 10.4325 21.4L9.04077 19.4C8.89232 19.18 8.54902 19 8.29851 19Z"
                  stroke="#7F1126"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.90674 8H16.1851"
                  stroke="#7F1126"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6.90674 13H12.4737"
                  stroke="#7F1126"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle cx="19" cy="6" r="6" fill="#FF0000" />
              </svg>
              Messages
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex style={{ width: "80%" }} justify="space-between">
        <Flex vertical>
          <Typography.Text className={styles.FromLocation}>
            ID Number
          </Typography.Text>
          <Typography.Text>{driverDetails.IDNumber}</Typography.Text>
        </Flex>
        <Flex vertical>
          <Typography.Text className={styles.FromLocation}>
            Drivers License
          </Typography.Text>
          <Typography.Text>{driverDetails.DriversLicense}</Typography.Text>
        </Flex>
        <Flex vertical>
          <Typography.Text className={styles.FromLocation}>
            Insurance Number
          </Typography.Text>
          <Typography.Text>{driverDetails.InsuranceNo}</Typography.Text>
        </Flex>
        <Flex vertical>
          <Typography.Text className={styles.FromLocation}>
            Insurance Number
          </Typography.Text>
          <Typography.Text>{driverDetails.InsuranceNo}</Typography.Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
