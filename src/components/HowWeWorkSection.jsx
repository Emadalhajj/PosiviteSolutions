// import { useState } from 'react';
import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaComments,
  FaSearch,
  FaCalculator,
  FaPencilRuler,
  FaCogs,
} from "react-icons/fa";

const howWeWorkSteps = [
  {
    number: 1,
    title: "Consultation",
    description: "Start with a Conversation",
    details:
      "We begin by discussing your vision, goals, and needs for the space, setting the foundation for a successful project.",
    icon: <FaComments />,
    image: "/images/arm-chair-01.jpg",
  },
  {
    number: 2,
    title: "Project Research and Design Concept",
    description: "Research and Concept Development",
    details:
      "We explore design concepts, perform site analysis, and develop a strategic plan.",
    icon: <FaSearch />,
    image: "/images/counter-timer-img.png",
  },
  {
    number: 3,
    title: "Project Estimation",
    description: "Accurate Cost Estimation",
    details: "We provide clear and detailed cost estimates for your project.",
    icon: <FaCalculator />,
    image: "/images/hero-img.png",
  },
  {
    number: 4,
    title: "Project Design",
    description: "Detailed Design Phase",
    details: "We create precise designs and layouts tailored to your needs.",
    icon: <FaPencilRuler />,
    image: "/images/09.webp",
  },
  {
    number: 5,
    title: "Project Execution",
    description: "Bringing Designs to Life",
    details:
      "We handle the complete execution of the project, ensuring quality and timeliness.",
    icon: <FaCogs />,
    image: "/images/05.webp",
  },
];

const HowWeWorkSection = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (number) => {
    setActiveStep(number);
  };
  return (
    <Container className="py-5 ">
      <h2 className="text-center fw-bold mb-4">How We Work</h2>
      <div className="d-flex justify-content-center mb-5">
        <div
          style={{
            width: "100px",
            height: "4px",
            backgroundColor: "var(--primary-color",
          }}
        ></div>
      </div>

      <Row className="m-auto w-75 d-flex justify-content-center align-items-center">
        <Col md={5} className="  text-center text-md-start ">
          <div className="d-flex flex-column align-items-start position-relative">
            <div
              className="vertical-line"
              style={{
                position: "absolute",
                top: "0",
                left: "35px", // منتصف الدائرة تقريبا (حسب حجمها)
                width: "2px",
                height: "80%",
                backgroundColor: "var(--primary-color)", // لون الخط
                zIndex: 0, // خلف الدوائر
              }}
            ></div>

            {howWeWorkSteps.map((step) => (
              <div
                key={step.number}
                onClick={() => handleStepClick(step.number)}
                className="d-flex align-items-center mb-4 step-item"
                style={{
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className={`rounded-circle d-flex align-items-center justify-content-center fw-bold me-3 $}
                  //   activeStep === step.number
                  //     ?  "var(--primary-color)} text-white"
                      
                  //     : "bg-light text-dark"
                  // }`}
                  style={{
                    background:
                      activeStep === step.number
                        ? "var(--primary-color)" // اللون الرئيسي عند التفعيل
                        : "#f8f9fa",
                    border: "1px solid #0099db", // borderColor : "var(--primary-color)",
                    width: "70px",
                    height: "70px",
                    fontSize: "1.2rem",
                    transition: "all 0.3s ease",
                    zIndex: "1",
                  }}
                >
                  {step.number}
                </div>
                <div>
                  <h6
                    className={`mb-0 `}
                    style={{
                      color:
                        activeStep === step.number
                          ? "var(--primary-color)"
                          : "",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {step.title}
                  </h6>
                </div>
              </div>
            ))}
          </div>
          <Button
            style={{
              backgroundColor: "var(--primary-color)",
              color: "#000", // أو حسب الحاجة
              border: "none",
            }}
          >
            Start your project now
          </Button>
        </Col>

        <Col md={7} className="px-md-5  ">
          <h5 className="fw-bold d-flex align-items-center mb-3">
            <span className="me-2">{howWeWorkSteps[activeStep - 1].icon}</span>{" "}
            {howWeWorkSteps[activeStep - 1].description}
          </h5>
          <p className="text-muted">{howWeWorkSteps[activeStep - 1].details}</p>
          <img
            src={howWeWorkSteps[activeStep - 1].image}
            alt={`How We Work Step ${activeStep}`}
            className="img-fluid mt-3 rounded"
            style={{ border: "5px solid #e0f7f4" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HowWeWorkSection;
