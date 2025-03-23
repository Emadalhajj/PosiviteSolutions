import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function ExploreOurProjects() {

    
const projects = [
    {
      title: 'Al Majdouie Holding',
      location: 'Makkah, Saudi Arabia',
      image: '/images/001 (1).jpg'
    },
    {
      title: 'Billor',
      location: 'Makkah, Saudi Arabia',
      image: '/images/001 (2).jpg'
    },
    {
      title: 'Law Firm',
      location: 'Makkah, Saudi Arabia',
      image: '/images/001 (3).jpg'
    },
    {
      title: 'Lucidya',
      location: 'Makkah, Saudi Arabia',
      image: '/images/001 (5).jpg'
    },
    {
      title: 'Ra\'ed',
      location: 'Makkah, Saudi Arabia',
      image: '/images/001 (6).jpg'
    },
    ,
    {
      title: 'Ra\'ed',
      location: 'Makkah, Saudi Arabia',
      image: '/images/001 (8).jpg'
    },
    
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="w-100 py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container fluid className="px-5 text-center" style={{ maxWidth: '100%' }}>
        <h2 className="fw-bold">Explore Our Projects</h2>
        <p className="text-muted">Explore Real Spaces We've Transformed</p>

        <Carousel responsive={responsive} infinite autoPlay autoPlaySpeed={3000} className="mt-4">
          {projects.map((project, index) => (
            <div key={index} className="p-2">
              <Card className="h-100 shadow-sm border-0" style={{ borderRadius: '20px', overflow: 'hidden', width: '100%' }}>
                <div style={{ height: '250px', overflow: 'hidden' }}>
                  <Card.Img
                    variant="top"
                    src={project.image}
                    style={{ height: '100%', width: '100%', objectFit: 'cover' }}
                  />
                </div>
                <Card.Body className="bg-light text-start" style={{ position: 'relative', height: '120px' }}>
                  <div style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#fff',
                    padding: '10px 15px',
                    borderRadius: '10px',
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px'
                  }}>
                    <Card.Title className="mb-2" style={{ fontSize: '1rem' }}>{project.title}</Card.Title>
                    <div className="d-flex align-items-center">
                      <FaMapMarkerAlt className="me-2" />
                      <small>{project.location}</small>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carousel>
      </Container>
    </div>
  );
}
