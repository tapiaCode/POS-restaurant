import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const imagesLink = [
    '/logincar01.jpg',
    '/logincar02.jpg',
    '/logincar03.jpg',
    '/logincar04.jpg'
  ];

  const [showImage, setShowImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImage(prevShowImage => 
        prevShowImage < imagesLink.length - 1 ? prevShowImage + 1 : 0
      );
    }, 2000);

    // Limpia el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [imagesLink.length]);

  return (
    <img className='mainHome-images' src={imagesLink[showImage]} alt="" />
  );
};

export default Carousel;
