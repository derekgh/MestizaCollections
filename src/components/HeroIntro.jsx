import { useEffect, useState } from 'react'
// import mestizaLogo from '../assets/mestizaLogo.png'
import logoAnim2 from '../assets/logo-anim-2.webp'
import background1 from '../assets/background1.png' // Import background image

const BORDER_ANIM_DURATION = 1000
const LOGO_ANIM_DURATION = 5000 // 5 seconds for the animation
const FADE_TRANSITION_DURATION = 1000
// const SCROLL_DURATION = 1200 // Increased for smoother scroll

const HeroIntro = () => {
  // const [borderVisible, setBorderVisible] = useState(false)
  const [showAnim, setShowAnim] = useState(false)
  const [animOpacity, setAnimOpacity] = useState(0)
  const [imagesPreloaded, setImagesPreloaded] = useState(false)

  const preloadImage = (src) =>
    new Promise((resolve) => {
      const img = new Image()
      img.onload = resolve
      img.onerror = resolve
      img.src = src
    })


  const startAnimation = () => {
    console.log('Starting animation sequence')
    
    // Reset animation state
    setShowAnim(false)
    setAnimOpacity(0)

    // Start animation sequence
    requestAnimationFrame(() => {
      setShowAnim(true)
      
      // Fade in the animation
      setTimeout(() => {
        setAnimOpacity(1)
      }, 50)

      // Log animation completion
      setTimeout(() => {
        console.log('Animation complete')
      }, LOGO_ANIM_DURATION)
    })
  }

  // Preload image once on component mount
  useEffect(() => {
    preloadImage(logoAnim2).then(() => {
      setImagesPreloaded(true)
      console.log('Image preloaded successfully')
    })
  }, [])



  // Handle intersection observer for animation trigger
  useEffect(() => {
    const section = document.querySelector('.hero-intro')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imagesPreloaded) {
            console.log('Hero section is visible, starting animation')
            startAnimation()
          } else if (!entry.isIntersecting) {
            // Reset state when not visible
            // setBorderVisible(false)
            setShowAnim(false)
            setAnimOpacity(0)
          }
        })
      },
      { threshold: 0.5 }
    )

    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [imagesPreloaded])

  return (
    <section 
      className="hero-intro"
      style={{
        backgroundImage: `url(${background1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      {/* <div className={`page-border ${borderVisible ? 'animate' : ''}`} /> */}
      {showAnim && (
        <img
          src={logoAnim2}
          alt="Mestiza Collections Logo Animation"
          className="hero-logo"
          style={{
            opacity: animOpacity,
            transition: `opacity ${FADE_TRANSITION_DURATION}ms ease-in-out`,
          }}
        />
      )}
    </section>
  )
}

export default HeroIntro