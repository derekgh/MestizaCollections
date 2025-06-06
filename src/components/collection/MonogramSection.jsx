import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

import Monogram1 from '../../assets/collections/monogram1.webp'
import Monogram2 from '../../assets/collections/monogram2.jpg'
import Monogram3 from '../../assets/collections/monogram3.webp'
import Monogram4 from '../../assets/collections/monogram4.jpg'
import Monogram5 from '../../assets/collections/monogram5.jpg'
import Monogram6 from '../../assets/collections/monogram6.jpg'
import background2 from '../../assets/background2.png'

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

const MonogramSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [sliderVisible, setSliderVisible] = useState(false)
  
  // Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Image array for lightbox
  const images = [
    { src: Monogram1, alt: 'Mestiza Monogram Collection 1' },
    { src: Monogram2, alt: 'Mestiza Monogram Collection 2' },
    { src: Monogram3, alt: 'Mestiza Monogram Collection 3' },
    { src: Monogram4, alt: 'Mestiza Monogram Collection 4' },
    { src: Monogram5, alt: 'Mestiza Monogram Collection 5' },
    { src: Monogram6, alt: 'Mestiza Monogram Collection 6' },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setTimeout(() => setTitleVisible(true), 300)
            setTimeout(() => setSliderVisible(true), 900)
          } else {
            setIsVisible(false)
            setTitleVisible(false)
            setSliderVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.monogram-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const handleImageClick = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <section 
        className="monogram-section"
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
            <h2>Mestiza Monogram Collection</h2>
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
                      height: 500,
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

export default MonogramSection