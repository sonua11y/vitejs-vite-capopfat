import React from "react";
import ViewProductButton from "../components/button";
import "./productcard.css";
import image from "../assets/Kids toys.webp";

const Productcard = () => {
  // Static product details
  const productImage = image;
  const productName = "Sample Product";
  const productPrice = "$49.99";

  return (
    <div className="product-card">
      <img src={productImage} alt={productName} className="product-image" />
      <h2 className="product-name">{productName}</h2>
      <p className="product-price">{productPrice}</p>
      <div className="button-container">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;