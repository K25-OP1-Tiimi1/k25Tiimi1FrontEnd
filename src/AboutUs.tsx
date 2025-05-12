const AboutUs = () => {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h2 style={{display:"flex", flexDirection:"column", alignItems: 'center', justifyContent: 'center', backgroundColor:"white"}}>About Us</h2>
        <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            
          {/* Box 1 */}
          <div
            style={{
              flex: 1,
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h2>Our Story</h2>
            <p>
              Recently founded family business
            </p>
          </div>
  
          {/* Box 2 */}
          <div
            style={{
              flex: 1,
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <h2>Our Mission</h2>
            <p>
            We aim to provide the best products in the world
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutUs;