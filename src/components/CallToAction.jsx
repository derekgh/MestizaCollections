import { useEffect, useState } from 'react'
import logoAnim from '../assets/logo-anim.webp'
import background1 from '../assets/background1.png'

const CallToAction = () => {
  const [isLogoLoaded, setIsLogoLoaded] = useState(false)

  useEffect(() => {
    const img = new Image()
    img.src = logoAnim
    img.onload = () => {
      setIsLogoLoaded(true)
    }
  }, [])

  return (
    <section 
      className="call-to-action"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="container text-center">
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          fontWeight: '500'
        }}>
          Join us for<br />
          the full reveal
        </h2>
        <p style={{ 
          fontSize: '1.2rem', 
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Be the first to explore the full collection and experience the new era of Mestiza Collections.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter your email"
            style={{
              padding: '0.75rem 1.5rem',
              marginRight: '1rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1rem',
              minWidth: '300px'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.75rem 2rem',
              background: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.3s ease'
            }}
          >
            Subscribe
          </button>
        </form>
        {isLogoLoaded && (
          <img 
            src={logoAnim} 
            alt="Mestiza Collections Logo" 
            style={{
              maxWidth: '5rem',
              height: 'auto',
              marginTop: '3rem',
              mixBlendMode: 'multiply',
              filter: 'contrast(2)'
            }}
          />
        )}
      </div>
    </section>
  )
}

export default CallToAction 