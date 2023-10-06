import React, { useState } from "react";
import "./Founder.css";

function Founder() {
  const founders = [
    {
      name: "Luies Charls",
      role: "(Web Designer)",
      image: "https://gamewar-codezeel.myshopify.com/cdn/shop/files/user-1_550x.jpg?v=1671086414",
      description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
    {
      name: "Jecob Goeckno",
      role: "(Designer)",
      image: "https://gamewar-codezeel.myshopify.com/cdn/shop/files/user-2_550x.jpg?v=1671086414",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    },
    {
      name: "Mack Jeckno",
      role: "(Owner)",
      image: "https://gamewar-codezeel.myshopify.com/cdn/shop/files/user-3_550x.jpg?v=1671086414",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt lorem consectetur orem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor tempor incididunt enim ad minim simply random text. It has pieceveniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFounder = () => {
    setCurrentIndex((prevIndex) => (prevIndex === founders.length - 1 ? 0 : prevIndex + 1));
  };

  const prevFounder = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? founders.length - 1 : prevIndex - 1));
  };

  return (
    <div className="foundercontainer">
      <button className="arrow-button left" onClick={prevFounder}>&#60;</button>
      <div className="slider">
        <div className={`founder ${currentIndex === 0 ? "active" : ""}`}>
          <img src={founders[currentIndex].image} alt="" />
          <h1>
            {founders[currentIndex].name} <span>{founders[currentIndex].role}</span>
          </h1>
          <p>{founders[currentIndex].description}</p>
        </div>
      </div>
      <button className="arrow-button right" onClick={nextFounder}>&#62;</button>
    </div>
  );
}

export default Founder;
