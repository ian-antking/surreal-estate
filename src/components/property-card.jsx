import React from 'react';

const PropertyCard = (props) => {
  return ((
    <div className="property-card">
      <div className="property-card__title">
        <span>{props.property.title}</span>
      </div>
    </div>
  ));
};

export default PropertyCard;
