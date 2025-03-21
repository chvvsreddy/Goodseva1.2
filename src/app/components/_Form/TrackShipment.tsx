import React from 'react'
import {  Button, Col,Input, Row, Typography,} from "antd";


const TrackShipment = () => {
  return (
    <div>
        <Row gutter={24} >
            <Col lg={18}>
               <Typography.Text>Unique Registered Number</Typography.Text>
                    <Input placeholder="Enter" type='text' allowClear size="large" />
            </Col>

        <Col lg={4}>
        <Typography.Text>&nbsp;</Typography.Text>
        <Button size="large" id="" className='button-primary' >
             Track Shipment
            </Button></Col>
       
      </Row>
        </div>
  )
}

export default TrackShipment