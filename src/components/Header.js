import React from "react";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { useLanguage } from "./LanguageContext";

const Header = () => {
  const { language, toggleLanguage } = useLanguage(); // جلب دالة تغيير اللغة

  return (
    <div style={{ backgroundColor: "#000", color: "#fff", height: "40px" }}>
      <Container>
        <Row className="align-items-center">
          <Col md={2} xs={4} className="text-end">
            <Dropdown>
              <Dropdown.Toggle
                variant="link"
                id="dropdown-basic"
                className="text-white text-decoration-none"
              >
                {language === "en" ? "English" : "Arabic"}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => toggleLanguage("en")}>
                  English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => toggleLanguage("ar")}>
                  Arabic
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          {/* الإعلان */}
          <Col md={10} xs={8}>
            <span>
              {language === "en"
                ? "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%"
                : "تخفيضات الصيف على جميع ملابس السباحة والتوصيل السريع مجانًا - خصم 50%!"}
              <a href="#" className="text-white text-decoration-none fw-bold">
                {language === "en" ? "Shop Now" : "تسوق الآن"}
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Header;
