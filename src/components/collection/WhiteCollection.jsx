import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import WHITE1 from '../../assets/collections/White_1.webp'
import WHITE2 from '../../assets/collections/White_2.webp'
import WHITE3 from '../../assets/collections/White_3.webp'
import WHITE4 from '../../assets/collections/White_4.webp'
import background1 from '../../assets/background1.png'

const sliderSettings = {
  centerMode: true,
  centerPadding: '25rem',
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

const WhiteCollection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [sliderVisible, setSliderVisible] = useState(false)
  const [textVisible, setTextVisible] = useState(false)
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Image array for lightbox
  const images = [
    { src: WHITE1, alt: 'Mestiza White Collection 1' },
    { src: WHITE2, alt: 'Mestiza White Collection 2' },
    { src: WHITE3, alt: 'Mestiza White Collection 3' },
    { src: WHITE4, alt: 'Mestiza White Collection 4' },
  ]

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

    const section = document.querySelector('.white-collection')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const handleImageClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const descriptionText = "Spirited Reycled Nylon Tricot Mesh | Matte Nylon Spandex | Solid Matte | Nylon Spandex Tricot | Ada | Stretch Lace | Sage Power Mesh | Nylon Spandex Mesh | Sage Delight | Lightweight Nylon Spandex | Tricot | Power Mesh | Microfiber Nylon | Delight Lightweight"

  return (
    <>
      <section 
        className="white-collection"
        style={{
          backgroundImage: `url(${background1})`,
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
            <h2>Mestiza White Collection</h2>
            {/* <AnimatedText text={descriptionText} isVisible={textVisible} /> */}
          </div>

          <div style={{
            opacity: sliderVisible ? 1 : 0,
            transform: sliderVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}>
            <Slider {...sliderSettings}>
              {images.map((img, i) => (
                <div key={i}>
                  <img 
                    src={img.src} 
                    alt={img.alt}
                    onClick={() => handleImageClick(i)}
                    style={{ 
                      width: '100%', 
                      maxWidth: 320, 
                      height: 400, 
                      objectFit: 'cover', 
                      borderRadius: '1rem', 
                      boxShadow: '0 4px 24px rgba(0,0,0,0.08)', 
                      margin: '0 auto',
                      transition: 'transform 0.3s ease-out',
                      cursor: 'pointer',
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

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images}
        animation={{ fade: 300 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />
    </>
  )
}

export default WhiteCollection