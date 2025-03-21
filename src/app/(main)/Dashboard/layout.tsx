"use client";
import { Col, Flex, Input, Row, Typography } from "antd";

import "../../styles/Layout.css";
import React, { useState } from "react";

import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string | null>(null);
  const navbarData1 = [
    {
      link: "/Dashboard/",
      icon: (isSelected: boolean) => (
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"        >
          <path
            d="M8.69967 22.75H4.73597C2.76394 22.75 1.81226 21.82 1.81226 19.9V4.1C1.81226 2.18 2.77375 1.25 4.73597 1.25H8.69967C10.6717 1.25 11.6234 2.18 11.6234 4.1V19.9C11.6234 21.82 10.6619 22.75 8.69967 22.75ZM4.73597 2.75C3.48996 2.75 3.28393 3.09 3.28393 4.1V19.9C3.28393 20.91 3.48996 21.25 4.73597 21.25H8.69967C9.94568 21.25 10.1517 20.91 10.1517 19.9V4.1C10.1517 3.09 9.94568 2.75 8.69967 2.75H4.73597Z"
            fill={isSelected ? "#FFFFFF" : "#292D32"}
          />
          <path
            d="M19.9819 13.75H16.0182C14.0462 13.75 13.0945 12.82 13.0945 10.9V4.1C13.0945 2.18 14.056 1.25 16.0182 1.25H19.9819C21.9539 1.25 22.9056 2.18 22.9056 4.1V10.9C22.9056 12.82 21.9441 13.75 19.9819 13.75ZM16.0182 2.75C14.7722 2.75 14.5662 3.09 14.5662 4.1V10.9C14.5662 11.91 14.7722 12.25 16.0182 12.25H19.9819C21.2279 12.25 21.4339 11.91 21.4339 10.9V4.1C21.4339 3.09 21.2279 2.75 19.9819 2.75H16.0182Z"
            fill={isSelected ? "#FFFFFF" : "#292D32"}
          />
          <path
            d="M19.9819 22.7495H16.0182C14.0462 22.7495 13.0945 21.8195 13.0945 19.8995V18.0995C13.0945 16.1795 14.056 15.2495 16.0182 15.2495H19.9819C21.9539 15.2495 22.9056 16.1795 22.9056 18.0995V19.8995C22.9056 21.8195 21.9441 22.7495 19.9819 22.7495ZM16.0182 16.7495C14.7722 16.7495 14.5662 17.0895 14.5662 18.0995V19.8995C14.5662 20.9095 14.7722 21.2495 16.0182 21.2495H19.9819C21.2279 21.2495 21.4339 20.9095 21.4339 19.8995V18.0995C21.4339 17.0895 21.2279 16.7495 19.9819 16.7495H16.0182Z"
            fill={isSelected ? "#FFFFFF" : "#292D32"}
          />
        </svg>
      ),

      name: "Dashboard",
    },
    {
      link: "/Dashboard/Profile",
      icon: (isSelected: boolean) => (
        <svg width="25" height="24" viewBox="0 0 25 24" fill={isSelected ? "#FFFFFF" : "none"} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.7896 21V19C20.7896 17.9391 20.3681 16.9217 19.618 16.1716C18.8678 15.4214 17.8504 15 16.7896 15H8.78955C7.72868 15 6.71127 15.4214 5.96112 16.1716C5.21098 16.9217 4.78955 17.9391 4.78955 19V21M16.7896 7C16.7896 9.20914 14.9987 11 12.7896 11C10.5804 11 8.78955 9.20914 8.78955 7C8.78955 4.79086 10.5804 3 12.7896 3C14.9987 3 16.7896 4.79086 16.7896 7Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Profile",
    },
  ];

  const navbarData2 = [
    {
      link: "/Dashboard/Actions",
      icon: (isSelected: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isSelected ? "#FFFFFF" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.21436 2V5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8215 2V5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3.9353 9.08984H20.1005"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5268 19C21.5268 19.75 21.3271 20.46 20.9753 21.06C20.3192 22.22 19.1116 23 17.7233 23C16.7629 23 15.888 22.63 15.2224 22C14.9276 21.74 14.6709 21.42 14.4712 21.06C14.1194 20.46 13.9197 19.75 13.9197 19C13.9197 16.79 15.6218 15 17.7233 15C18.8643 15 19.8818 15.53 20.5759 16.36C21.1655 17.07 21.5268 17.99 21.5268 19Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.2397 19L17.1811 19.99L19.2065 18.02"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.576 8.5V16.36C19.8819 15.53 18.8644 15 17.7234 15C15.6219 15 13.9198 16.79 13.9198 19C13.9198 19.75 14.1195 20.46 14.4713 21.06C14.671 21.42 14.9277 21.74 15.2225 22H8.21443C4.8863 22 3.45996 20 3.45996 17V8.5C3.45996 5.5 4.8863 3.5 8.21443 3.5H15.8216C19.1497 3.5 20.576 5.5 20.576 8.5Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.0137 13.7002H12.0222"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.49415 13.7002H8.50269"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.49415 16.7002H8.50269"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Actions Needed",
    },
    {
      link: "/Dashboard/Loads",
      icon: (isSelected: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={isSelected ? "#FFFFFF" : "none"} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.8086 9C7.64667 9 9.13673 7.433 9.13673 5.5C9.13673 3.567 7.64667 2 5.8086 2C3.97052 2 2.48047 3.567 2.48047 5.5C2.48047 7.433 3.97052 9 5.8086 9Z"
            stroke="#292D32"
            strokeWidth="1.5"
          />
          <path
            d="M16.7438 15H19.5965C20.6425 15 21.4983 15.9 21.4983 17V20C21.4983 21.1 20.6425 22 19.5965 22H16.7438C15.6978 22 14.842 21.1 14.842 20V17C14.842 15.9 15.6978 15 16.7438 15Z"
            stroke="#292D32"
            strokeWidth="1.5"
          />
          <path
            d="M12.0178 5H14.5662C16.3254 5 17.1431 7.29 15.8214 8.51L8.22375 15.5C6.902 16.71 7.71977 19 9.46942 19H12.0178"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.82388 5.5H5.83486"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1857 18.5H18.1967"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Loads",
    },
    {
      link: "/Dashboard/PostLoad",
      icon: (isSelected: boolean) => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill={isSelected ? "#FFFFFF" : "none"} xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.8086 9C7.64667 9 9.13673 7.433 9.13673 5.5C9.13673 3.567 7.64667 2 5.8086 2C3.97052 2 2.48047 3.567 2.48047 5.5C2.48047 7.433 3.97052 9 5.8086 9Z"
            stroke="#292D32"
            strokeWidth="1.5"
          />
          <path
            d="M16.7438 15H19.5965C20.6425 15 21.4983 15.9 21.4983 17V20C21.4983 21.1 20.6425 22 19.5965 22H16.7438C15.6978 22 14.842 21.1 14.842 20V17C14.842 15.9 15.6978 15 16.7438 15Z"
            stroke="#292D32"
            strokeWidth="1.5"
          />
          <path
            d="M12.0178 5H14.5662C16.3254 5 17.1431 7.29 15.8214 8.51L8.22375 15.5C6.902 16.71 7.71977 19 9.46942 19H12.0178"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.82388 5.5H5.83486"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18.1857 18.5H18.1967"
            stroke="#292D32"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Post a Load",
    },
    {
      link: "/Dashboard/ReportsAnalytics",
      icon: (isSelected: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isSelected ? "#FFFFFF" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6249 8.25V18C19.6249 21 17.9228 22 15.8214 22H8.21422C6.11274 22 4.41064 21 4.41064 18V8.25C4.41064 5 6.11274 4.25 8.21422 4.25C8.21422 4.87 8.45192 5.43 8.84178 5.84C9.23165 6.25 9.76418 6.5 10.3537 6.5H13.6819C14.861 6.5 15.8214 5.49 15.8214 4.25C17.9228 4.25 19.6249 5 19.6249 8.25Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.8215 4.25C15.8215 5.49 14.8611 6.5 13.682 6.5H10.3539C9.76431 6.5 9.23179 6.25 8.84192 5.84C8.45205 5.43 8.21436 4.87 8.21436 4.25C8.21436 3.01 9.17476 2 10.3539 2H13.682C14.2715 2 14.8041 2.25 15.1939 2.66C15.5838 3.07 15.8215 3.63 15.8215 4.25Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.21436 13H12.0179"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.21436 17H15.8215"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Reports & Analytics",
    },
  ];
  const navbarData3 = [
    {
      icon: (isSelected: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isSelected ? "#FFFFFF" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.42847 22H15.1338C19.8883 22 21.7901 20 21.7901 15V9C21.7901 4 19.8883 2 15.1338 2H9.42847C4.674 2 2.77222 4 2.77222 9V15C2.77222 20 4.674 22 9.42847 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6758 18.5001V14.6001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6758 7.45V5.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6757 12.6502C17.0411 12.6502 18.148 11.4861 18.148 10.0502C18.148 8.61426 17.0411 7.4502 15.6757 7.4502C14.3103 7.4502 13.2034 8.61426 13.2034 10.0502C13.2034 11.4861 14.3103 12.6502 15.6757 12.6502Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88647 18.4998V16.5498"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88647 9.4V5.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88639 16.5501C10.2518 16.5501 11.3587 15.386 11.3587 13.9501C11.3587 12.5142 10.2518 11.3501 8.88639 11.3501C7.52096 11.3501 6.41406 12.5142 6.41406 13.9501C6.41406 15.386 7.52096 16.5501 8.88639 16.5501Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Tools",
    },
    {
      icon: (isSelected: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isSelected ? "#FFFFFF" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.42847 22H15.1338C19.8883 22 21.7901 20 21.7901 15V9C21.7901 4 19.8883 2 15.1338 2H9.42847C4.674 2 2.77222 4 2.77222 9V15C2.77222 20 4.674 22 9.42847 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6758 18.5001V14.6001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6758 7.45V5.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6757 12.6502C17.0411 12.6502 18.148 11.4861 18.148 10.0502C18.148 8.61426 17.0411 7.4502 15.6757 7.4502C14.3103 7.4502 13.2034 8.61426 13.2034 10.0502C13.2034 11.4861 14.3103 12.6502 15.6757 12.6502Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88647 18.4998V16.5498"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88647 9.4V5.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88639 16.5501C10.2518 16.5501 11.3587 15.386 11.3587 13.9501C11.3587 12.5142 10.2518 11.3501 8.88639 11.3501C7.52096 11.3501 6.41406 12.5142 6.41406 13.9501C6.41406 15.386 7.52096 16.5501 8.88639 16.5501Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Explore",
    },
    {
      icon: (isSelected: boolean) => (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={isSelected ? "#FFFFFF" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.42847 22H15.1338C19.8883 22 21.7901 20 21.7901 15V9C21.7901 4 19.8883 2 15.1338 2H9.42847C4.674 2 2.77222 4 2.77222 9V15C2.77222 20 4.674 22 9.42847 22Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6758 18.5001V14.6001"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6758 7.45V5.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.6757 12.6502C17.0411 12.6502 18.148 11.4861 18.148 10.0502C18.148 8.61426 17.0411 7.4502 15.6757 7.4502C14.3103 7.4502 13.2034 8.61426 13.2034 10.0502C13.2034 11.4861 14.3103 12.6502 15.6757 12.6502Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88647 18.4998V16.5498"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88647 9.4V5.5"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.88639 16.5501C10.2518 16.5501 11.3587 15.386 11.3587 13.9501C11.3587 12.5142 10.2518 11.3501 8.88639 11.3501C7.52096 11.3501 6.41406 12.5142 6.41406 13.9501C6.41406 15.386 7.52096 16.5501 8.88639 16.5501Z"
            stroke="#292D32"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      name: "Rates",
    },
  ];

  const handleClick = (index: string) => {
    setSelected(index);
  };

  return (
    <div style={{ backgroundColor: "rgba(42, 0, 78, 0.1)",minHeight:"100vh" }}>
      <Row>
        <Col lg={4} className="navbar-bg">
          <Flex vertical gap={15}>
            <div>
              <Link href={"/"}><img src="goodseva-logo.png" alt="Goodseva logo" height={40} /></Link>
             
            </div>
            <Flex vertical gap={30}>
              <Typography.Text style={{ color: "#B0B0B0" }} id="nav-text">
                Overview
              </Typography.Text>
              <Flex vertical gap={15}>
                {navbarData1.map((file, index) => {
                  return (
                    <Link href={file.link ? file.link : ""} key={index} className={selected === file.name ? "navItem selected" : "navItem" }>
                      <Flex  key={index} onClick={() => handleClick(file.name)} gap={10} >
                        <div>
                          {file.icon(selected === file.name)}
                        </div>
                        <Typography.Text >{file.name}</Typography.Text>                         
                      </Flex>
                    </Link>
                  );
                })}
              </Flex>
              <Typography.Text style={{ color: "#B0B0B0" }}>
                Activity
              </Typography.Text>
              <Flex vertical gap={15}>
                {navbarData2.map((file, index) => {
                  return (
                    <Link href={file.link ? file.link : ""} key={index} className={selected === file.name ? "navItem selected" : "navItem" }>
                      <Flex key={index} onClick={() => handleClick(file.name)} gap={10}>
                        <div>{file.icon(selected === file.name)}</div>
                        <Typography.Text>{file.name}</Typography.Text>
                      </Flex>
                    </Link>
                  );
                })}
              </Flex>
              <Typography.Text style={{ color: "#B0B0B0" }}>
                Others
              </Typography.Text>
              <Flex vertical gap={15}>
                {navbarData3.map((file, index) => {
                  return (
                    <Flex key={index} onClick={() => handleClick(file.name)} gap={10} >
                      <div>{file.icon(selected === file.name)}</div>
                      <Typography.Text>{file.name}</Typography.Text>
                    </Flex>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </Col>

        <Col lg={20} style={{ width: "100%", minHeight: "100vh", backgroundColor: "white" }}>
          <Flex style={{ padding: 20 }}>
            <Flex justify="space-between" style={{ width: "100%" }}>
              <Flex gap={10}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L16.514 16.506L21 21ZM19 10.5C19 12.7543 18.1045 14.9163 16.5104 16.5104C14.9163 18.1045 12.7543 19 10.5 19C8.24566 19 6.08365 18.1045 4.48959 16.5104C2.89553 14.9163 2 12.7543 2 10.5C2 8.24566 2.89553 6.08365 4.48959 4.48959C6.08365 2.89553 8.24566 2 10.5 2C12.7543 2 14.9163 2.89553 16.5104 4.48959C18.1045 6.08365 19 8.24566 19 10.5V10.5Z"
                    stroke="#292D32"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <Input
                  placeholder="Search for anything"
                  style={{
                    border: "none",
                  }}
                />
              </Flex>
              <Flex gap={5} align="flex-end">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9M16 17L21 12M21 12L16 7M21 12H9"
                    stroke="#1E1E1E"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <Typography.Text>Log out</Typography.Text>
              </Flex>
            </Flex>
          </Flex>
          <Row>
            <Col
              lg={24}
              style={{
                width: 5,
                height: 5,
                backgroundColor: "rgb(239, 231, 231)",
              }}
            ></Col>
          </Row>
          <Row>
            <Col lg={24} style={{ width: "100%",padding:"20px ", height: "auto" }}>
              {children}
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
