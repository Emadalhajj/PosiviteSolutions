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
import "./banner.css";
const Banner = ({title}) => {
    const { language } = useLanguage(); //  دالة تغيير اللغة

    return ( 
        <Container>
   
        </Container>
        // <div className="image-container">
        //     <img src={productBg} alt="Product-bg" />
        //     <div className="overlay">
        //         <Container>
        //             <Row>
        //                 <Col>
        //                     <h2>{title}</h2>
        //                 </Col>
        //             </Row>
        //         </Container>
        //     </div>
        // </div>
    );
}

export default Banner;