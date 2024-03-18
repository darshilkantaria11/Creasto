import React from 'react';

const PhotoGallery = () => {
  // Dummy data for images (replace this with your database data)
  const images = [
    { id: 1, src: 'https://via.placeholder.com/150', alt: 'Image 1' },
    { id: 2, src: 'https://via.placeholder.com/150', alt: 'Image 2' },
    { id: 3, src: 'https://via.placeholder.com/150', alt: 'Image 3' },
    { id: 4, src: 'https://via.placeholder.com/150', alt: 'Image 4' },
    { id: 5, src: 'https://via.placeholder.com/150', alt: 'Image 5' },
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map(image => (
        <div key={image.id} className="overflow-hidden bg-gray-200 rounded-lg">
          <img src={image.src} alt={image.alt} className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
