// import { Col, Container, Row } from "react-bootstrap";
import "./slidercard.css";

import { faArrowRight, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "bootstrap/dist/js/bootstrap.min";
import React from "react";
import {
  Accordion,
  Carousel,
  Col,
  Container,
  ListGroup,
  Row,
} from "react-bootstrap";
import { FaAngleRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const SlideCard = ({ title, desc, cover }) => {
  const { language } = useLanguage(); //  دالة تغيير اللغة

  return (
    <Container className=" justify-content-center position-relative ">
      <Carousel
        className="col-md-8 col-12 m-4 m-auto"
        style={{ width: "100%", 
          // zIndex:"10"
        }}
        interval={3000}
        pause={false}
        fade
      >
        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/001 (1).jpg"
            alt="Slider Image"
          />
        </Carousel.Item>

        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/04.png"
            alt="Slider Image"
          />
        </Carousel.Item>


        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/001 (2).jpg"
            alt="Slider Image"
          />
        </Carousel.Item>

       
        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/001 (3).jpg"
            alt="Slider Image"
          />
        </Carousel.Item>

       
        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/001 (8).jpg"
            alt="Slider Image"
          />
        </Carousel.Item>

       
        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/001 (5).jpg"
            alt="Slider Image"
          />
        </Carousel.Item>

       
        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/001 (6).jpg"
            alt="Slider Image"
          />
        </Carousel.Item>

     
        <Carousel.Item style={{ height: "600px" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
            className="img-fluid"
            src="/images/001 (7).jpg"
            alt="Slider Image"
          />
        </Carousel.Item>
      </Carousel>

       {/* المحتوى النصي فوق كل شيء */}
       <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          color: '#fff',
          textAlign: 'center',
          padding: '20px',
          zIndex: "10",
           pointerEvents: 'none'
         
        }}
      >
        <h2 style={{fontWeight :"bold", fontSize:"42px"}}>Be Part of Our Next Success Story</h2>
        <p>Ready to transform your workspace? Contact us to discuss how we can design a space that aligns with your business goals.</p>
        <div className="d-flex gap-3 mt-3">
          <button className="btn "
          style={{background:"var(--primary-color)"}}
          >START YOUR PROJECT</button>
          <button className="btn btn-outline-light">BOOK FREE CONSULTATION</button>
        </div>
      </div>
    </Container>
  );
};

export default SlideCard;
