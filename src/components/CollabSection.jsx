import { useEffect, useState } from 'react';
import louisImg from '../assets/LOUIS-1.webp';
// import background2 from '../assets/background2.png';

const CollabSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      document.querySelectorAll('.parallax-image').forEach(el => {
        const speed = 0.3;
        const offset = window.pageYOffset;
        el.style.transform = `translateY(${offset * speed}px)`;
      });
    };

    // Intersection Observer for section visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Reset states first
            setIsVisible(false);
            setImageVisible(false);
            setTextVisible(false);
            
            // Trigger animations with a small delay to ensure reset is visible
            requestAnimationFrame(() => {
              setIsVisible(true);
              setTimeout(() => setImageVisible(true), 300);
              setTimeout(() => setTextVisible(true), 600);
            });
          } else {
            // Reset all states when leaving viewport
            setIsVisible(false);
            setImageVisible(false);
            setTextVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector('.collab-section');
    if (section) observer.observe(section);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="collab-section parallax-section">
      <div
        className="parallax-image"
        // style={{ backgroundImage: `url(${background2})` }}
      />
      <div className="profile-frame" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        <div className="container profile-flex">
          <div className="profile-text" style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}>
            <div className="collab-text">
              <h2>
                Louis Verdad
                {/* <span>Collaboration</span> */}
              </h2>
              {/* <h3>Coming Soon</h3> */}
              <div className="collab-text-paragraphs">
                <p>
                  Born in Chicago and raised in León, Guanajuato, Mexico, Louis Verdad has earned a distinguished reputation in the fashion world for his sophisticated design sensibility and impeccable construction. His refined aesthetic has led him to dress A-list celebrities and grace the covers of some of the industry's most prestigious fashion magazines.
                </p>
                <p>
                  In this new collaboration with Mestiza Collection, Louis brings his signature blend of luxury and innovation to a fresh and modern capsule.
                </p>
                <p>
                  Inspired by yoga and mindful living, the collection merges high fashion with comfort, offering elevated pieces ideal for movement, lounging, or travel.
                </p>
                <p>
                  The line debuts in September 2026 and is currently seeking sales representation in the United States.
                  <br />
                  (Detailed information available upon request.)
                </p>
              </div>
            </div>
          </div>
          <img
            src={louisImg}
            alt="Louis Verdad"
            className="profile-image"
            style={{
              opacity: imageVisible ? 1 : 0,
              transform: imageVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default CollabSection;
