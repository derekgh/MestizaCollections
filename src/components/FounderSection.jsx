import { useEffect, useState } from 'react';
import fabiolaImg from '../assets/Fabiola.webp';
import background1 from '../assets/background1.png';

const FounderSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    let animationFrameId = null;
  
    const handleScroll = () => {
      if (animationFrameId) return;
      animationFrameId = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        document.querySelectorAll('.parallax-image').forEach(el => {
          const speed = 0.3;
          el.style.transform = `translateY(${scrollTop * speed}px)`;
        });
        animationFrameId = null;
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

    const section = document.querySelector('.founder-section');
    if (section) observer.observe(section);
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (section) observer.unobserve(section);
    };
  }, []);
  

  return (
    <section className="founder-section parallax-section">
      <div
        className="parallax-image"
        style={{ backgroundImage: `url(${background1})` }}
      />
      <div className="profile-frame" style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        <div className="container founder-flex">
          <div className="profile-text" style={{
            opacity: textVisible ? 1 : 0,
            transform: textVisible ? 'translateX(0)' : 'translateX(-20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}>
            <h2>Fabiola Karamemis</h2>
            {/* <h3>About Her Vision</h3> */}
            <div className="profile-title">CEO &amp; Founder</div>
            <p>
            A native of Mexico City, she now resides in Los Angeles, California, where she is pursuing one of her greatest dreams—the Mestiza Collection. With the support of her husband, a hotel industry entrepreneur, she is embracing this new chapter as a businesswoman with passion and purpose.            </p>
            <p>
            Frequent travel between Mexico, Los Angeles, and Tulum has shaped her relaxed, effortlessly chic style—an authentic reflection of her energy and lifestyle. She is a certified stylist and recently earned a business degree from a university in Mexico City.            </p>
            <p>
            This collaboration is especially meaningful to her, as it aligns with her mission to inspire women to feel confident, healthy, and beautiful—inside and out.            </p>
          </div>
          <img
            src={fabiolaImg}
            alt="Fabiola Karamemis"
            className="founder-image"
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

export default FounderSection;
