"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const PhotoGallery2 = () => {
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



  return (
    <div className=" mx-4">
      <h1 className="text-2xl font-bold m-4">Customized shoes</h1>
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
      <div className="mt-4">
      <Link  className="bg-blue-500 p-4  text-white px-4 py-2 rounded shadow " href="/jutti">
        View more
      </Link>
      </div>
    </div>
  );
};

export default PhotoGallery2;
