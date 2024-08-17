import React, { useEffect, useState, useRef } from 'react';
import "./Stats.css";

export default function Stats() {
  const [counters, setCounters] = useState([]);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsSectionVisible(true);
        observer.disconnect(); // Stop observing after first intersection
      }
    });
    observer.observe(counterRef.current);

    const counterElements = document.querySelectorAll('.counter');
    const newCounters = Array.from(counterElements).map((element) => ({
      element,
      startValue: parseInt(element.textContent, 10),
      currentValue: 0,
    }));
    setCounters(newCounters);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      const intervals = counters.map((counter) => {
        const interval = setInterval(() => {
          counter.currentValue += 20;
          counter.element.textContent = counter.currentValue;

          if (counter.currentValue >= counter.startValue) {
            clearInterval(interval);
          }
        }, 10); // Adjust interval for animation speed

        return interval;
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isSectionVisible, counters]);

    return(
        <section className="wow fadeIn animated" style={{visibility: 'visible', animationName: 'fadeIn'}} ref={counterRef}>
            <div className="containerStats">
                <div className="row">
                    <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="300ms" style={{visibility: 'visible', animationDuration: '300ms', animationName: 'fadeInUp'}}>
                        <i className="fa-solid fa-building medium-icon"></i>
                        <span id="anim-number-pizza" className="counter-number"></span>
                        <span className="timer counter alt-font appear" data-to="980" data-speed="7000">3790</span>
                        <p className="counter-title">Centers Across India</p>
                    </div>
                    <div className="col-md-3 col-sm-6 bottom-margin text-center counter-section wow fadeInUp sm-margin-bottom-ten animated" data-wow-duration="600ms" style={{visibility: 'visible', animationDuration: '600ms', animationName: 'fadeInUp'}}>
                        <i className="fa fa-heart medium-icon"></i>
                         <span className="timer counter alt-font appear" data-to="980" data-speed="7000">4650</span>
                        <span className="counter-title">Happy Students</span>
                    </div>
                    <div className="col-md-3 col-sm-6 bottom-margin-small text-center counter-section wow fadeInUp xs-margin-bottom-ten animated" data-wow-duration="900ms" style={{visibility: 'visible', animationDuration: '900ms', animationName: 'fadeInUp'}}>
                        <i className="fa fa-graduation-cap medium-icon"></i>
                         <span className="timer counter alt-font appear" data-to="810" data-speed="7000">5580</span>
                        <span className="counter-title">Academic Partners</span>
                    </div>
                    <div className="col-md-3 col-sm-6 text-center counter-section wow fadeInUp animated" data-wow-duration="1200ms" style={{visibility: 'visible', animationDuration: '1200ms', animationName: 'fadeInUp'}}>
                        <i className="fa fa-hourglass-start medium-icon"></i>
                         <span className="timer counterStatic alt-font appear" data-to="600" data-speed="7000">18+</span>
                        <span className="counter-title">Years of Industry Presence</span>
                    </div>
                </div>
            </div>
        </section>

    )
}

