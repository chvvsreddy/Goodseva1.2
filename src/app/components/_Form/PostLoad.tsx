import React from 'react'
import {  Button, Col,Input, Row, Typography,} from "antd";

const PostLoad = () => {
  return (
    <div>
        
        <Row gutter={24} >
            <Col lg={10}>
               <Typography.Text>To</Typography.Text>
                    <Input prefix={<svg width="30"height="30"viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="15" fill="#E8F9EE" />
                            <circle cx="15" cy="15" r="5" fill="#0EBC93" />
                        </svg>
                        }
                        placeholder="Vishakapatnam"
                    />
            </Col>

            <Col lg={10} >
                <Typography.Text>From</Typography.Text>
                <Input prefix={<svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg"                  >
                        <rect x="0.5" y="0" width="30" height="30" fill="#DCE0F9" fill-opacity="0.5" />
                        <rect x="10.5" y="10" width="10" height="10" fill="#8205AF"  />
                    </svg>
                    }
                    placeholder="Hyderabad"
                />
            </Col>
        <Col lg={4}>
        <Typography.Text>&nbsp;</Typography.Text>
        <Button size="large" id="" className='button-primary' >Post Load</Button></Col>
       
      </Row>
    </div>
  )
}

export default PostLoad