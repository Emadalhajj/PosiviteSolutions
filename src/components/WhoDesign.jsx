import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCog, FaUserFriends, FaMedal, FaCheckCircle, FaCubes, FaHandsHelping, FaShoppingCart, FaEye } from 'react-icons/fa';

const items = [
  {
    icon: <FaCog size={60} />,
    title: 'Powered by Technology',
    desc: 'We use AI and advanced tools to optimize our design and delivery process.'
  },
  {
    icon: <FaUserFriends size={60} />,
    title: 'Superpowered by People',
    desc: 'Our local and global experts ensure every project is delivered with skill and innovation.'
  },
  {
    icon: <FaMedal size={60} />,
    title: 'World-Class Service',
    desc: 'We provide a seamless, hassle-free experience, consistently delivering high-quality services.'
  },
  {
    icon: <FaCheckCircle size={60} />,
    title: 'Verified Quality',
    desc: 'Our network of vetted executors and standardized design solutions ensure that quality is never compromised.'
  },
  {
    icon: <FaCubes size={60} />,
    title: 'High Variations',
    desc: 'We offer a wide range of design solutions, ensuring that no matter your style or needs, we have the perfect fit for you.'
  },
  {
    icon: <FaHandsHelping size={60} />,
    title: 'Human-Centered Approach',
    desc: 'We take a human-centered approach, understanding and fulfilling your needs with care and empathy.'
  },
  {
    icon: <FaShoppingCart size={60} />,
    title: 'Project-Based E-commerce',
    desc: 'We work with leading local and global factories to streamline the design process and meet your project needs efficiently.'
  },
  {
    icon: <FaEye size={60} />,
    title: 'Full Control and Transparency',
    desc: 'You maintain full visibility and control over your budget, with complete transparency and no surprises.'
  },
];

export default function WhoDesign() {
  return (
    <div style={{ backgroundColor: '#fff', padding: '60px 0' }}>
      <Container>

        {/* عنوان القسم */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Positive Solutions Design</h2>
        </div>

        {/* عناصر المميزات */}
        <Row>
          {items.map((item, index) => (
            <Col key={index} md={3} sm={6} className="text-center mb-4">
              <div
                style={{
                  backgroundColor: '#ebfbff',
                  padding: '20px',
                  borderRadius: '16px',
                  minHeight: '230px'
                }}
              >
                <div style={{ fontSize: '32px', marginBottom: '12px', color: 'var(--primary-color)' }}>
                  {item.icon}
                </div>
                <h6 className="fw-bold">{item.title}</h6>
                <p style={{ fontSize: '14px', color: '#555' }}>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>

        {/* قسم مبسط في الأسفل */}
        <div
          className="mt-5 p-4 text-center"
          style={{
            background: 'linear-gradient(90deg,rgb(180, 221, 245), #ebfbff)',
            borderRadius: '20px'
          }}
        >
          <h3 className="fw-bold mb-3">Simplified & Streamlined Process</h3>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#333' }}>
            Your journey with us begins in a simplified and streamlined process, ensuring a smooth ride ahead.
            With clarity and precision, we've structured the path to make your experience enjoyable and hassle-free.
          </p>
        </div>

      </Container>
    </div>
  );
}
