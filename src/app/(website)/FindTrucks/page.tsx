"use client"

import { useEffect, useState } from 'react';
import { Button, Col, Divider, Flex, Row, Typography,Form, Input } from "antd";
import Load from '@/app/components/Loads/page'
import Title from "antd/es/typography/Title";
import container from "../../../../public/vehicles/container.png";
import tanker from "../../../../public/vehicles/tanker.png";
import tipper from "../../../../public/vehicles/tipper.png";
import miniOpenVan from "../../../../public/vehicles/miniOpenVan.png";
import Image from "next/image";

interface Truck {
    id: number
    from: string,
    zipcode: number,
    to: string,
    zip_code: number,
    equipment_type: string,
    shipment_type: string,
    no_of_trucks: number,
    est_pickup: number,
    est_delivery: number
  }

const page = () => {
    const [trucks, setTrucks] = useState<Truck[]>([]);

    useEffect(() => {
        // Fetch the JSON file
        fetch('/Trucks.json')
          .then((response) => response.json())
          .then((jsonData) => setTrucks(jsonData))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);
    
      if (!trucks.length) {
        return <div>Loading...</div>;
      }

  return (
    <div className='layoutStyle' style={{paddingTop:40,paddingBottom:40}}>
        <Row gutter={24}>
            <Col sm={19} xs={24}>
            <Title level={5}>
                <Typography>All Trucks</Typography>
            </Title>
            {trucks?.map((truck: Truck) =>  (
            <Load truck={truck} key={truck.id}/>
            ))}
            </Col>
            <Col sm={5} xs={24}>
                <div className='filterBlock'>
                    <Title level={5}><Typography>Filters</Typography> </Title>
                    <Form>
                        <Form.Item>
                            <Typography.Text>To</Typography.Text>
                            <Input prefix={ <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" >
                                    <circle cx="15" cy="15" r="15" fill="#E8F9EE" />
                                    <circle cx="15" cy="15" r="5" fill="#0EBC93" />
                                </svg>  } placeholder="Vishakapatnam"  />
                        </Form.Item>    
                        <Form.Item>          
                            <Typography.Text>From</Typography.Text>
                            <Input prefix={ <svg width="31" height="30"  viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                    <rect x="0.5" y="0" width="30" height="30" fill="#DCE0F9" fill-opacity="0.5" />
                                    <rect x="10.5" y="10" width="10" height="10" fill="#8205AF" /> </svg>  } placeholder="Hyderabad" />
                        </Form.Item>  
                        <Flex vertical gap={5}>
            <Typography.Text >
              Suggestions
            </Typography.Text>
            <Flex gap={20} wrap>
              <Flex vertical gap={10}>
                <Flex vertical id="selecting-trucks1">
                  <Image src={container} alt="lorry" height={40} />

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
                  <Image src={tipper} alt="lorry" height={40} />

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
                  <Image src={miniOpenVan} alt="lorry" height={40}  />

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
                    </Form>
                </div> 
            </Col>
        </Row>
        
    </div>
  )
}

export default page
