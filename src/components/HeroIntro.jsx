import { useEffect, useState } from 'react'
import mestizaLogo from '../assets/mestizaLogo.png'
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

  // const scrollToNextSection = () => {
  //   const main = document.querySelector('main')
    
  //   // Temporarily disable scroll-snap for smooth programmatic scrolling
  //   if (main) {
  //     main.classList.remove('enable-scroll-snap')
  //     main.style.scrollSnapType = 'none'
  //   }

  //   // Find the next section (FounderSection should be the second section)
  //   const allSections = document.querySelectorAll('section')
  //   const nextSection = allSections[1] // Second section (index 1)
    
  //   console.log('All sections found:', allSections.length)
  //   console.log('Next section:', nextSection)
    
  //   if (nextSection) {
  //     const startPosition = window.pageYOffset
  //     const targetPosition = nextSection.offsetTop
  //     const distance = targetPosition - startPosition
      
  //     console.log('Scroll from:', startPosition, 'to:', targetPosition)
      
  //     const startTime = performance.now()

  //     const animateScroll = (currentTime) => {
  //       const elapsed = currentTime - startTime
  //       const progress = Math.min(elapsed / SCROLL_DURATION, 1)
        
  //       // Smooth easing function
  //       const easeInOutCubic = progress < 0.5
  //         ? 4 * progress * progress * progress
  //         : 1 - Math.pow(-2 * progress + 2, 3) / 2

  //       const currentPosition = startPosition + (distance * easeInOutCubic)
  //       window.scrollTo(0, currentPosition)

  //       if (progress < 1) {
  //         requestAnimationFrame(animateScroll)
  //       } else {
  //         // Re-enable scroll-snap after scrolling is complete
  //         setTimeout(() => {
  //           if (main) {
  //             main.style.scrollSnapType = 'y mandatory'
  //             main.classList.add('enable-scroll-snap')
  //           }
  //         }, 100)
  //       }
  //     }
      
  //     requestAnimationFrame(animateScroll)
  //   } else {
  //     console.log('Next section not found')
  //     // Re-enable scroll-snap even if scroll fails
  //     setTimeout(() => {
  //       if (main) {
  //         main.style.scrollSnapType = 'y mandatory'  
  //         main.classList.add('enable-scroll-snap')
  //       }
  //     }, 100)
  //   }
  // }

  const startAnimation = () => {
    console.log('Starting animation sequence')
    
    // Reset everything first
    // setBorderVisible(false)
    setShowAnim(false)
    setAnimOpacity(0)

    // Start animation sequence
    requestAnimationFrame(() => {
      // setBorderVisible(true)
      
      setTimeout(() => {
        setShowAnim(true)
        
        // Fade in the animation
        setTimeout(() => {
          setAnimOpacity(1)
        }, 50)

        // After the full 5-second animation, keep the animation visible
        setTimeout(() => {
          console.log('Animation complete')
        }, LOGO_ANIM_DURATION)
        
      }, BORDER_ANIM_DURATION) // Border animation duration
    })
  }

  // Preload image once on component mount
  useEffect(() => {
    preloadImage(logoAnim2).then(() => {
      setImagesPreloaded(true)
      console.log('Image preloaded successfully')
    })
  }, [])

  // Enable scroll-snap by default
  // useEffect(() => {
  //   const main = document.querySelector('main')
  //   if (main) {
  //     main.classList.add('enable-scroll-snap')
  //     main.style.scrollSnapType = 'y mandatory'
  //   }
  // }, [])

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
      { threshold: 0.5 } // Increased threshold for better detection
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
            position: 'absolute',
            transform: 'translateZ(0)',
          }}
        />
      )}
    </section>
  )
}

export default HeroIntro