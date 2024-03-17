"use client"
import React, { useState, useEffect } from 'react';

const photos = [
  'https://via.placeholder.com/500x300?text=Photo+1',
  'https://via.placeholder.com/500x300?text=Photo+2',
  'https://via.placeholder.com/500x300?text=Photo+3',
  // Add more photo URLs as needed
];

const PhotoSlider = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(goToNextPhoto, 2000);
    return () => clearInterval(interval);
  }, [currentPhotoIndex]);

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const goToPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const handleSliderClick = (index) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="relative h-screen">
      <div className="absolute bottom-0 left-0 w-full flex justify-center pb-4">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSliderClick(index)}
            className={`mx-1 w-4 h-4 rounded-full focus:outline-none ${
              index === currentPhotoIndex ? 'bg-gray-500' : 'bg-gray-200'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center justify-center h-full">
        <img
          src={photos[currentPhotoIndex]}
          alt={`Photo ${currentPhotoIndex + 1}`}
          className="object-cover h-full w-full"
        />
      </div>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full"
        onClick={goToPrevPhoto}
      >
        ❮ 
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-500 text-white rounded-full"
        onClick={goToNextPhoto}
      >
      ❯
      </button>
    </div>
  );
};

export default PhotoSlider;
