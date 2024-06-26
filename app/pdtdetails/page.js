"use client"
import React, { useState, useMemo } from 'react';

const ProductDetailPage = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [selectedColor, setSelectedColor] = useState('');
    const [selectedDesign, setSelectedDesign] = useState('');
    const [rate, setRate] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('');

    // Memoize the images array to prevent re-rendering when other state variables change
    const memoizedImages = useMemo(() => [
        { id: 1, src: 'https://via.placeholder.com/100', alt: 'Image 1' },
        { id: 2, src: 'https://via.placeholder.com/110', alt: 'Image 2' },
        { id: 3, src: 'https://via.placeholder.com/120', alt: 'Image 3' },
        { id: 4, src: 'https://via.placeholder.com/130', alt: 'Image 4' },
        { id: 5, src: 'https://via.placeholder.com/140', alt: 'Image 5' },
    ], []);

    const colors = ['Red', 'Blue', 'Green']; // Example colors
    const designs = ['Design 1', 'Design 2', 'Design 3']; // Example designs
    const sizes = ['7', '8', '9', '10', '11']; // Example shoe sizes

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handleDesignChange = (design) => {
        setSelectedDesign(design);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const addToCart = () => {
        // Add logic to add selected product to cart
        console.log(`Added ${quantity} item(s) to cart.`);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="flex justify-center ">
            <div className="flex flex-row items-center justify-between w-full md:w-3/4 lg:w-1/2 mt-8">
                <div className="flex  justify-center flex-col  w-1/2">
                    <div>
                        <img src={memoizedImages[selectedImage].src} alt="Selected Product" className="w-64 h-64 object-cover" />
                    </div>
                    <div className="flex">
                        {memoizedImages.map((image, index) => (
                            <img
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                className={`w-14 h-14 object-cover cursor-pointer ${selectedImage === index ? 'border-2 border-blue-500' : ''
                                    }`}
                                onClick={() => setSelectedImage(index)}
                            />
                        ))}
                    </div>
                </div>

                <div className="flex justify-between w-full mt-4 w-1/2">
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
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Size:</h3>
                            <div>
                                {sizes.map((size, index) => (
                                    <label key={index} className="inline-flex items-center mt-2">
                                        <input
                                            type="radio"
                                            className="form-radio h-5 w-5 text-blue-600"
                                            checked={selectedSize === size}
                                            onChange={() => handleSizeChange(size)}
                                        />
                                        <span className="ml-2">{size}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-medium">Quantity:</h3>
                            <div className="flex items-center">
                                <button onClick={decreaseQuantity} className="bg-gray-200 text-gray-600 py-1 px-2 rounded-l-md">-</button>
                                <input
                                    type="text"
                                    value={quantity}
                                    readOnly
                                    className="w-10 h-10 border border-gray-300 rounded-md px-2 text-center"
                                />
                                <button onClick={increaseQuantity} className="bg-gray-200 text-gray-600 py-1 px-2 rounded-r-md">+</button>
                            </div>
                        </div>
                        <button onClick={addToCart} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
