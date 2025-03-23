import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div style={{ background: 'linear-gradient(90deg, #ebfbff, #ebfbff)', padding: '60px 0' }}>
      <Container>

        {/* الجزء العلوي: نموذج التواصل + معلومات */}
        <Row className="align-items-start mb-5">
          {/* فورم التواصل */}
          <Col md={7} className="p-4" style={{
            backgroundColor: '#fff',
            borderRadius: '16px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: '1px solid #ccc'
          }}>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your full name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Select>
                      <option>Select City</option>
                      <option>Riyadh</option>
                      <option>Jeddah</option>
                      <option>Dammam</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="+966" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
              </Form.Group>

              <Button
                variant="success"
                style={{
                  backgroundColor: 'var(--primary-color)',
                  padding: '12px 40px',
                  borderRadius: '25px',
                  border: 'none'
                }}
              >
                Submit
              </Button>
            </Form>
          </Col>

          {/* معلومات التواصل */}
          <Col md={5} className="p-4">
            <h2 className="fw-bold">We are <span style={{ color: 'var(--primary-color)' }}>here to help!</span></h2>
            <p style={{ color: '#555' }}>
              Have questions about transforming your office space? Interested in learning more about our design services?
            </p>
            <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>
              Our team is ready to assist you every step of the way.
            </p>
            <p style={{ color: '#555' }}>
              Reach out to us using any of the methods below, and let's make your workspace wonderful.
            </p>

            <div className="mt-4">
              <h6><strong>Interior Design projects requests</strong></h6>
              <p>📧 Hi@squs.design<br />📧 Hi@squs.com</p>

              <h6 className="mt-3"><strong>Furniture projects requests</strong></h6>
              <p>📧 Hi@squs.shop</p>

              <h6 className="mt-3"><strong>Vendor Relationships & partnerships</strong></h6>
              <p>📧 Vendors@squs.com</p>
            </div>
          </Col>
        </Row>

        {/* Call To Action section */}
        <div className="text-center mt-5">
          <h2 className="fw-bold mb-3">Let’s Create Something Amazing Together</h2>
          <p style={{ color: '#555', maxWidth: '600px', margin: 'auto' }}>
            Whether you’re ready to start a project or just looking for some advice, we’re eager to hear from you. Contact us today!
          </p>

          <Button
            variant="success"
            size="lg"
            className="mt-4"
            style={{
              backgroundColor: 'var(--primary-color)',
              borderRadius: '25px',
              padding: '12px 40px',
              border: 'none'
            }}
          >
            Start your project now
          </Button>

          <div className="d-flex justify-content-center mt-4 gap-5 flex-wrap">
            <div className="d-flex align-items-center gap-2">
              <FaPhoneAlt color="var(--primary-color)" />
              <span>+966566438781</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaWhatsapp color="var(--primary-color)" />
              <span>Whatsapp</span>
            </div>
            <div className="d-flex align-items-center gap-2">
              <FaEnvelope color="var(--primary-color)" />
              <span>Email</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
