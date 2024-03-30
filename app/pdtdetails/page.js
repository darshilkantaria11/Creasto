"use client"
import React, { useState } from 'react';

const ProductDetailPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedDesign, setSelectedDesign] = useState('');
    const [rate, setRate] = useState(0);

    const images = [
        { id: 1, src: 'https://via.placeholder.com/150', alt: 'Image 1' },
        { id: 2, src: 'https://via.placeholder.com/150', alt: 'Image 2' },
        { id: 3, src: 'https://via.placeholder.com/150', alt: 'Image 3' },
        { id: 4, src: 'https://via.placeholder.com/150', alt: 'Image 4' },
        { id: 5, src: 'https://via.placeholder.com/150', alt: 'Image 5' },
    ];
    const colors = ['Red', 'Blue', 'Green']; // Example colors
    const designs = ['Design 1', 'Design 2', 'Design 3']; // Example designs

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleDesignChange = (design) => {
        setSelectedDesign(design);
    };

    return (
        <div className="flex justify-center ">
            <div className="flex flex-row items-center justify-between w-full md:w-3/4 lg:w-1/2 mt-8">
                <div className="flex flex-wrap justify-center flex-col">
                    <div>
                        <img src={images[selectedImage]} alt="Selected Product" className="w-64 h-64 object-cover" />
                    </div>
                    <div className="flex">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Product ${index + 1}`}
                            className={`w-24 h-24 object-cover cursor-pointer ${selectedImage === index ? 'border-2 border-blue-500' : ''
                                }`}
                            onClick={() => setSelectedImage(index)}
                        />
                    ))}
                    </div>
                </div>
                <div className="flex justify-between w-full mt-4">

                    <div className="ml-8">
                        <h2 className="text-xl font-bold">Product Name</h2>
                        <p className="text-gray-600">Product Description</p>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Color:</h3>
                            {colors.map((color, index) => (
                                <label key={index} className="inline-flex items-center mt-2">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-blue-600"
                                        checked={selectedColor === color}
                                        onChange={() => handleColorChange(color)}
                                    />
                                    <span className="ml-2">{color}</span>
                                </label>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Design:</h3>
                            {designs.map((design, index) => (
                                <label key={index} className="inline-flex items-center mt-2">
                                    <input
                                        type="radio"
                                        className="form-radio h-5 w-5 text-blue-600"
                                        checked={selectedDesign === design}
                                        onChange={() => handleDesignChange(design)}
                                    />
                                    <span className="ml-2">{design}</span>
                                </label>
                            ))}
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Rate: ${rate}</h3>
                            <input
                                type="number"
                                value={rate}
                                onChange={(e) => setRate(e.target.value)}
                                className="w-20 h-10 border border-gray-300 rounded-md px-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;

