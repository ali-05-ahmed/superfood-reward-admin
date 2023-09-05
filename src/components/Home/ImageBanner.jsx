import React from "react";


const ImageBanner = ({ imageUrl, altText }) => {
  return (
    <div className="image-banner-container">
      <img src={imageUrl} alt={altText} className="image-banner" />
      
    </div>
  );
};

export default ImageBanner;
