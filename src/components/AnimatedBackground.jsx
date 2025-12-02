const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div 
        className="floating-shape"
        style={{
          width: '100px',
          height: '100px',
          top: '10%',
          left: '10%',
          animationDelay: '0s'
        }}
      ></div>
      <div
        className="floating-shape"
        style={{
          width: '150px',
          height: '150px',
          top: '60%',
          right: '10%',
          animationDelay: '5s'
        }}
      ></div>
      <div
        className="floating-shape"
        style={{
          width: '80px',
          height: '80px',
          bottom: '20%',
          left: '50%',
          animationDelay: '10s'
        }}
      ></div>
      <div
        className="floating-shape"
        style={{
          width: '120px',
          height: '120px',
          top: '30%',
          right: '30%',
          animationDelay: '15s'
        }}
      ></div>
    </div>
  )
}

export default AnimatedBackground

