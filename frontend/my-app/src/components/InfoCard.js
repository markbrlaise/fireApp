import './InfoCard.css'
import React from 'react';

function InfoCard({ imageSrc, title, description }) {
  return (
    <div className="info-card">
      <img src={imageSrc} alt={title} className="info-card-image" />
      <h2 className="info-card-title">{title}</h2>
      <p className="info-card-description">{description}</p>
    </div>
  );
}

export default InfoCard;
