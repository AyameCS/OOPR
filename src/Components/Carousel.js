import React, { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import './Carousel.css';
import image1 from './image-1.png';
import image2 from './image-2.png';
import image3 from './image-3.png';

const images = [
  { src: image1, link: 'https://www.fatima.edu.ph/?utm_source=local&utm_medium=organic&utm_campaign=gmailwaffle' },
  { src: image2, link: 'https://www.fatima.edu.ph/?utm_source=local&utm_medium=organic&utm_campaign=gmailwaffle' },
  { src: image3, link: 'https://www.fatima.edu.ph/?utm_source=local&utm_medium=organic&utm_campaign=gmailwaffle' },
];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((activeIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const Pagination = () => (
    <div className="carousel-pagination">
      {images.map((_, index) => (
        <div
          key={index}
          className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
          onClick={() => setActiveIndex(index)}
        ></div>
      ))}
    </div>
  );

  const handleImageClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    //carousel
    <div className='main'>
      <div className="carousel-container">
        <div className="carousel">
          <div className="carousel-image-container" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div
                key={index}
                className="carousel-image"
                style={{ backgroundImage: `url(${image.src})` }}
                onClick={() => handleImageClick(image.link)}
              />
            ))}
          </div>

          <button className="carousel-prev" onClick={handlePrevClick}>
            <FiChevronLeft />
          </button>
          <button className="carousel-next" onClick={handleNextClick}>
            <FiChevronRight />
          </button>
        </div>
        <Pagination />
      </div>

      {/* pagination */}
      <div className="carousel-pagination">
        {images.map((_, i) => (
          <div key={i} className={`carousel-pagination-item ${activeIndex === i ? 'active' : ''}`} onClick={() => setActiveIndex(i)} />
        ))}
      </div>
    </div>
  );
};

export default Banner;
