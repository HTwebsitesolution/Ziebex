// Simplified version for testing
function SimpleApp() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: 'bold',
          color: '#2563eb',
          marginBottom: '20px',
          fontFamily: 'Poppins, sans-serif'
        }}>
          ZIEBEX
        </h1>
        <p style={{
          fontSize: '24px',
          color: '#334155',
          marginBottom: '40px'
        }}>
          Global Consultancy Excellence
        </p>
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '40px',
          borderRadius: '12px',
          marginTop: '40px'
        }}>
          <h2 style={{ fontSize: '32px', marginBottom: '20px', color: '#0f172a' }}>
            If you see this, React is working!
          </h2>
          <p style={{ color: '#64748b', fontSize: '18px' }}>
            The website components should load below this message.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SimpleApp
