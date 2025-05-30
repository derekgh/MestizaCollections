import { useEffect, useState } from 'react'
import Sage1 from '../../assets/collections/Sage_1.webp'
import Sage2 from '../../assets/collections/Sage_2.webp'
import Sage3 from '../../assets/collections/Sage_3.webp'
import Sage4 from '../../assets/collections/Sage_4.webp'
import Slider from 'react-slick'

import background1 from '../../assets/background1.png'
import background2 from '../../assets/background2.png'

const sliderSettings = {
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: true,
  dots: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        centerPadding: '0px',
      },
    },
  ],
}

const AnimatedText = ({ text, isVisible }) => {
  const words = text.split(' ')
  
  return (
    <p >
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: 'inline-block',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: `opacity 0.3s ease-out ${index * 0.05}s, transform 0.3s ease-out ${index * 0.05}s`,
            marginRight: '0.25rem',
          }}
        >
          {word}
        </span>
      ))}
    </p>
  )
}

const GreenCollection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [sliderVisible, setSliderVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setTimeout(() => setTitleVisible(true), 300)
            setTimeout(() => setTextVisible(true), 600)
            setTimeout(() => setSliderVisible(true), 900)
          } else {
            setIsVisible(false)
            setTitleVisible(false)
            setTextVisible(false)
            setSliderVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.green-collection')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const descriptionText = "Spirited Reycled Nylon Tricot Mesh | Matte Nylon Spandex | Solid Matte | Nylon Spandex Tricot | Ada | Stretch Lace | Sage Power Mesh | Nylon Spandex Mesh | Sage Delight | Lightweight Nylon Spandex | Tricot | Power Mesh | Microfiber Nylon | Delight Lightweight"

  return (
    <section 
      className="green-collection"
      style={{
        backgroundImage: `url(${background2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="container" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        <div className="collection" style={{
          opacity: titleVisible ? 1 : 0,
          transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}>
          <h2>Mestiza Iceburg Green Collection</h2>
          {/* <AnimatedText text={descriptionText} isVisible={textVisible} /> */}
        </div>

        <div style={{
          opacity: sliderVisible ? 1 : 0,
          transform: sliderVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
        }}>
          <Slider {...sliderSettings}>
            {[Sage1, Sage2, Sage3, Sage4].map((img, i) => (
              <div key={i}>
                <img 
                  src={img} 
                  alt={`Green Collection ${i + 1}`} 
                  style={{ 
                    width: '100%', 
                    maxWidth: 320, 
                    height: 400, 
                    objectFit: 'cover', 
                    borderRadius: '1rem', 
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)', 
                    margin: '0 auto',
                    transition: 'transform 0.3s ease-out',
                    ':hover': {
                      transform: 'scale(1.05)'
                    }
                  }} 
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default GreenCollection 