import React from 'react';
import { Container, Row, Col, Image , Badge } from 'react-bootstrap';
import FixedPart from '../components/FixedPart';

export default function AboutUs() {
  const coreValues = [
    { icon: "⚙️", title: "Highest Standards" },
    { icon: "🧠", title: "Critical Thinking" },
    { icon: "📝", title: "Ownership" },
    { icon: "📈", title: "Growth & Curiosity" },
    { icon: "💡", title: "Innovation" },
    { icon: "✔️", title: "Integrity" },
    { icon: "🏃‍♂️", title: "Action-oriented" },
    { icon: "⭕", title: "Simplicity" },
    { icon: "🚀", title: "Thinking Big" },
    { icon: "🤝", title: "Trust" },
    { icon: "🔥", title: "Passion" },
    { icon: "👥", title: "Customer Obsession" },
  ];
  return (
    <div style={{ backgroundColor: '#ebfbff', padding: '60px 0' }}>
      <Container>
        {/* الجزء الأول */}
        <Row className="align-items-center mb-5">
          <Col md={6}>
            <p style={{ color: 'var(--primary-color)', fontWeight: '600' }}>About Us</p>
            <h2 className="fw-bold">Positive Solutions.design</h2>
            <h4 style={{ color: '#333' }}>
              Designing Spaces, <span style={{ color: 'var(--primary-color)' }}>Building trust</span>
            </h4>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              At <span style={{ color: 'var(--primary-color)', fontWeight: '500' }}>Positive Solutions.design</span>, we believe in design's transformative power, creating spaces that are beautiful, foster connection, inspire creativity, and support well-being.
            </p>
          </Col>

          <Col md={6}>
            <Row>
              <Col xs={12} md={6} className="mb-3 ">
                <Image
                  src="/images/07.jpg"
                  rounded
                  fluid
                  className="mb-3"
                  style={{ borderRadius: '16px' ,  height:"200px"}}
                />
                 <Image
                  src="/images/09.webp"
                  rounded
                  fluid
                  style={{ borderRadius: '16px' , height:"200px"}}
                />

              </Col>
              <Col xs={12} md={6}>
                <Image
                  src="/images/03.jpg"
                  rounded
                  fluid
                  className="mb-3"
                  style={{ borderRadius: '16px' ,  height:"200px" }}
                />
                <Image
                  src="/images/001 (8).jpg"
                  rounded
                  fluid
                  style={{ borderRadius: '16px',  height:"200px"}}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        {/* الجزء الثاني */}
        <Row className="align-items-center flex-md-row flex-column-reverse">
          <Col md={6}>
            <Image
              src="/images/02.jpeg"
              rounded
              fluid
              style={{ borderRadius: '16px' }}
            />
          </Col>

          <Col md={6}>
            <h2 className="fw-bold">Our vision</h2>
            <h5 style={{ color: '#333' }}>
              To be the Kingdom's <span style={{ color: 'var(--primary-color)' }}>market leader</span>
            </h5>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              In the design and delivery of <span style={{ fontWeight: '500' }}>interiors</span> and to be a <span style={{ color: '#00a86b', fontWeight: '500' }}>customer-centric platform</span> offering solutions that fit all budgets and scopes of work.
            </p>
          </Col>
        </Row>

       

        {/* القسم الثاني - Our Story */}
        <Row className="align-items-center flex-md-row flex-column-reverse">
          <Col md={6}>
            <h3 className="fw-bold mb-3">Our story</h3>
            <h5 className="fw-semibold mb-3">
              From <span style={{ color: 'var(--primary-color)' }}>Humble Beginnings</span> to <span style={{ color: 'var(--primary-color)' }}>Remarkable Progress</span>
            </h5>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              Founded in early 2020, Positive Solutions.design leverages over a decade of innovation and design experience. <span style={{ color: 'var(--primary-color)' }}>Our mission</span> is to transform the interior design process from complicated and draining to fun, easy, and fulfilling.
            </p>
          </Col>

          <Col md={6}>
            <Image
              src="/images/bg-fixed.jpg" //  مسار الصورة  
              rounded
              fluid
              style={{ borderRadius: '16px' }}
            />
          </Col>
        </Row>

        
        {/* Core Values Section */}
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Core Values</h2>
          <p className="text-muted">What We Stand For</p>
        </div>

        <Row className="justify-content-center mb-5">
          {coreValues.map((value, index) => (
            <Col
              xs={6}
              md={3}
              lg={2}
              key={index}
              className="d-flex justify-content-center mb-3"
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  backgroundColor: '#e6faf4',
                  padding: '15px',
                  borderRadius: '12px',
                  width: '150px',
                  minHeight: '100px',
                  textAlign: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>
                  {value.icon}
                </div>
                <p style={{ margin: 0, fontSize: '14px', fontWeight: '500' }}>
                  {value.title}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* CEO Message Section */}
        <Row className="align-items-center">
          <Col md={8}>
            <Badge
              bg="success"
              className="mb-3"
              style={{ backgroundColor: 'var(--primary-color)' }}
            >
              Leadership
            </Badge>
            <h2 className="fw-bold mb-4">
              A Message From <span style={{ color: 'var(--primary-color)' }}>the CEO</span>
            </h2>
            <p style={{ fontStyle: 'italic', fontSize: '20px', color: 'var(--primary-color)' }}>
              “
            </p>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              At Positive Solutions.design, we treat every project with the care and dedication as if it were our own.
              Trust is our cornerstone—it's the bedrock of every connection we make, whether with clients,
              vendors, or within our team.
            </p>
            <p style={{ color: '#555', lineHeight: '1.8' }}>
              Our driving forces—
              <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}> trust</span>,
              <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}> passion</span>, and a
              <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}> relentless</span> approach to
              problem-solving—fuel everything we do.
            </p>
            <p className="fw-bold mt-4 mb-0">Amal Albasheeri</p>
            <p style={{ color: 'var(--primary-color)' }}>Founder & CEO</p>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
            <div
              style={{
                borderRadius: '50%',
                padding: '5px',
                border: '5px solid var(--primary-color)',
                width: '250px',
                height: '250px',
                overflow: 'hidden',
              }}
            >
              <Image
                src="/images/ceo.jpeg" // Replace this with your CEO image path
                roundedCircle
                fluid
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </Col>
        </Row>

      </Container>
      <FixedPart/>
    </div>
  );
}
