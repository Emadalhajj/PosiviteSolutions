import Marquee from "react-fast-marquee";

export default function ClientsMarquee() {
  return (
    <div className="mt-5 mb-4" style={{ backgroundColor: "#f8f9fa", padding: "40px 0" }}>
      <h3 style={{ textAlign: "center", marginBottom: "20px", fontWeight:"bold"}}>
        Clients we have proudly served
      </h3>

      <Marquee className="py-5" 
        gradient={false}
        speed={30}
        pauseOnHover={true}
        style={{ overflow: "hidden" }}
      >
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (1).png" alt="Client 1" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (2).jpg" alt="Client 2" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (2).png" alt="Client 3" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (3).png" alt="Client 4" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (4).png" alt="Client 5" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (5).png" alt="Client 6" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (10).jpg" alt="Client 9" /></div>


        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (1).jpg" alt="Client 7" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (3).jpg" alt="Client 9" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (4).jpg" alt="Client 10" /></div>


   
        {/* ضيف باقي الشعارات بنفس الطريقة */}
      </Marquee>

      <Marquee
      className="mt-5"
        gradient={false}
        speed={80}
        pauseOnHover={true}
        style={{ overflow: "hidden" }}
        direction="right" // هذا هو المفتاح للتحكم بالاتجاه
        

      >
         <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (1).png" alt="Client 1" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (2).jpg" alt="Client 2" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (2).png" alt="Client 3" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (3).png" alt="Client 4" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (4).png" alt="Client 5" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos (5).png" alt="Client 6" /></div>

        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (1).jpg" alt="Client 7" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (3).jpg" alt="Client 9" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (4).jpg" alt="Client 10" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (5).jpg" alt="Client 9" /></div>
        <div style={logoStyle}><img style={{width:"100%", height:"100%" , objectFit:"contain"}} src="/images/logos2 (10).jpg" alt="Client 9" /></div>

     
      </Marquee>
    </div>
  );
}

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
