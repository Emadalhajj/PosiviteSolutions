import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const logoStyle = {
    height: "200px",
    width: "300px",
    backgroundColor: "#fff",
    margin: "0 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

export default function OurClients () {
  return (
    <Container className='d-flex'>
        <Row>
            
            <Col className='d-flex py-4'>
            <div  style={logoStyle }><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (1).png" alt="Client 1" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (2).jpg" alt="Client 2" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (2).png" alt="Client 3" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (3).png" alt="Client 4" /></div>
            </Col>
            <Col className='d-flex py-4'>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (4).png" alt="Client 5" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (5).png" alt="Client 6" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (1).jpg" alt="Client 7" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (3).jpg" alt="Client 9" /></div>
            </Col>
            <Col className='d-flex py-4'>
             <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (4).jpg" alt="Client 10" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (5).jpg" alt="Client 9" /></div>
            <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (10).jpg" alt="Client 9" /></div>
            </Col>

            

        </Row>
        
    </Container>
  )
}
