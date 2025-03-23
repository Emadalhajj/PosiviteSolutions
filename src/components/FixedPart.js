import React from 'react'

export default function FixedPart() {
  return (
    
    
    <div className='position-relative py-3   d-flex justify-content-center align-items-center'>
        {/* الخلفية */}
     <div
       style={{
        height : "500px",
        width :"100%",
        // opacity : 1.9,
        backgroundImage : "url('/images/bg-fixed.jpg')",
       backgroundAttachment:"fixed",
       backgroundPosition :"center",
       backgroundRepeat :"no-repeat",
       backgroundSize:"cover"
  
      }}
     >
     </div>
        {/* العتمة */}

     <div style={{
        top:"13px",
        left:"0",
        right:"0",
        bottom :"15px",
        position:"absolute",
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // هنا تتحكم في نسبة العتمة

     }}>
     </div>

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
        }}
      >
        <h2>Be Part of Our Next Success Story</h2>
        <p>Ready to transform your workspace? Contact us to discuss how we can design a space that aligns with your business goals.</p>
        <div className="d-flex gap-3 mt-3">
          <button className="btn " style={{backgroundColor:"var(--primary-color)"}}> START YOUR PROJECT</button>
          <button className="btn btn-outline-light">BOOK FREE CONSULTATION</button>
        </div>
      </div>


    </div>
  )
}
