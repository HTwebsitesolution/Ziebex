// Simple test component
function TestApp() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <h1 style={{ color: '#2563eb', fontSize: '32px', marginBottom: '20px' }}>
        Ziebex Website Test
      </h1>
      <p style={{ color: '#334155', fontSize: '18px' }}>
        If you can see this, React is working!
      </p>
      <div style={{ marginTop: '20px', padding: '20px', backgroundColor: 'white', borderRadius: '8px' }}>
        <h2>Next Steps:</h2>
        <ul>
          <li>Check browser console (F12) for errors</li>
          <li>Verify Tailwind CSS is loading</li>
          <li>Check network tab for failed requests</li>
        </ul>
      </div>
    </div>
  )
}

export default TestApp
