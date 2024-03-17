"use client"
import React, { useState } from 'react';

const PhotoGallery = () => {
  const initialPhotos = [
    'https://via.placeholder.com/500x300?text=Photo+1',
    'https://via.placeholder.com/500x300?text=Photo+2',
    'https://via.placeholder.com/500x300?text=Photo+3',
    'https://via.placeholder.com/500x300?text=Photo+1',
    'https://via.placeholder.com/500x300?text=Photo+2',
    'https://via.placeholder.com/500x300?text=Photo+3',
    'https://via.placeholder.com/500x300?text=Photo+1',
    'https://via.placeholder.com/500x300?text=Photo+2',
    'https://via.placeholder.com/500x300?text=Photo+3',
    // Add more photo URLs as needed
  ];
  const [photos, setPhotos] = useState(initialPhotos);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const togglePhotosDisplay = () => {
    setShowAllPhotos(!showAllPhotos);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Photo Gallery</h1>
      <div className="grid grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={`w-full h-auto ${!showAllPhotos && index >= 4 ? 'hidden' : ''}`}
          />
        ))}
      </div>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded shadow mt-4"
        onClick={togglePhotosDisplay}
      >
        {showAllPhotos ? 'View Less' : 'View More'}
      </button>
    </div>
  );
};

export default PhotoGallery;
