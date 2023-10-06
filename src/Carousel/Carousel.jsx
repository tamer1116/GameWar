import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        {
            src: "https://gamewar-codezeel.myshopify.com/cdn/shop/files/main-banner-1_1903x.jpg?v=1670925107;",
        },
        {
            src: "https://gamewar-codezeel.myshopify.com/cdn/shop/files/main-banner-2_1903x.jpg?v=1671086943;",
        },
    ];

    const handleImageClick = (index) => {
        setCurrentImage(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const imageStyle = {
        transform: `translateX(-${currentImage * 100}%)`,
    };

    return (
        <div className="carousel">
            <div className="image-container" style={imageStyle}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        className="image"
                    />
                ))}
            </div>
            <div className="thumbnails">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image.src}
                        alt={image.alt}
                        onClick={() => handleImageClick(index)}
                        className={index === currentImage ? "active" : ""}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
