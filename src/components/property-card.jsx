import React from 'react';

const PropertyCard = (props) => {
  return ((
    <div className="property-card">
      <div className="property-card__title">
        <span>{props.property.title}</span>
      </div>
      <div className="property-card__type">
        <span>{props.property.type}</span>
      </div>
      <div className="property-card__bathrooms">
        <span>{props.property.bathrooms}</span>
      </div>
      <div className="property-card__bedrooms">
        <span>{props.property.bedrooms}</span>
      </div>
      <div className="property-card__price">
        <span>{props.property.price}</span>
      </div>
      <div className="property-card__city">
        <span>{props.property.city}</span>
      </div>
      <div className="property-card__email">
        <span>{props.property.email}</span>
      </div>
    </div>
  ));
};

export default PropertyCard;
