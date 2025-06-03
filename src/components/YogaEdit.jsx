import { useEffect, useState } from 'react'
// import background1 from '../assets/background1.png' // Import background image

const HoverContainer = ({ children }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? 'translateY(-1rem) scale(1.05)'
          : 'translateY(0) scale(1)',
        transition: 'transform 1s ease-in-out',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  )
}

const YogaEdit = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [titleVisible, setTitleVisible] = useState(false)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            setTimeout(() => setTitleVisible(true), 300)
            setTimeout(() => setContentVisible(true), 600)
          } else {
            setIsVisible(false)
            setTitleVisible(false)
            setContentVisible(false)
          }
        })
      },
      { threshold: 0.2 }
    )

    const section = document.querySelector('.yoga-edit')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <>
      <section
        className="yoga-edit"
        // style={{
        //   backgroundImage: `url(${background1})`,
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   width: '100vw',
        //   height: '100vh',
        // }}
      >
        {/* <div className="page-borderr" /> */}

        <div className="container yoga-container" style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
          // borderRadius: '8px',
          // overflow: 'hidden',
          // position: 'relative'
        }}>
          {/* <HoverContainer> */}
            <div className="yoga-content-box"
            // style={{
            //   // padding: '2rem',
            //   // background: 'white',
            //   borderRadius: '8px',
            //   border: 'solid 2px #0b0b0b',
            //   padding: '9rem'
            // }}
            >
              <h2 style={{
                opacity: titleVisible ? 1 : 0,
                transform: titleVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}>About The Collection</h2>
              <div className="yoga-content" style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
              }}>
                <div className="yoga-text">
                  {/* <h3>Movement meets minimalism. Elegance meets energy.</h3> */}
                  <p>
                    The Mestiza Collection is thoughtfully designed with both comfort and beauty in mind. Featuring flattering cuts, breathable fabrics, and just the right amount of stretch, each piece blends ease with a fashion-forward attitude.
                  </p>
                  <p>
                    Materials such as polyester, spandex, nylon tricot, mesh, power mesh, and microfiber are used to create sleek, monochromatic silhouettes that reflect the collection's modern vision.
                  </p>
                  <p>
                    Distinctive details—including pleated accents, vintage-inspired buckles, metal hardware, and oversized proportions—add depth and character.
                  </p>
                  <p>
                    The collection is divided into four distinct capsules, including one that proudly highlights the signature Mestiza monogram.
                  </p>
                </div>
                {/* <div className="yoga-image">
                  <div style={{ width: '100%', height: '400px', background: '#eee' }}></div>
                </div> */}
              </div>
            </div>
          {/* </HoverContainer> */}
        </div>
      </section>
    </>
  )
}

export default YogaEdit