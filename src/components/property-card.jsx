import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBath,
  faBed,
  faPoundSign,
  faEnvelope,
  faHome,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/property-card.scss';

const PropertyCard = (props) => {
  return ((
    <div className="property-card">
      <div className="property-card__image card-item">
        <FontAwesomeIcon icon={faHome} />
      </div>
      <div className="property-card__title card-item">
        <span>
          <b>
            {props.property.title}
          </b>
        </span>
      </div>
      <div className="property-card__type-city card-item">
        <span>{props.property.type} - {props.property.city}</span>
      </div>
      <div className="property-card__bathrooms card-item">
        <span className="icon">
          <FontAwesomeIcon icon={faBath} />
        </span>
        <span className="property-card__bathrooms-text">
          {props.property.bathrooms}
        </span>
      </div>
      <div className="property-card__bedrooms card-item">
        <span className="icon">
          <FontAwesomeIcon icon={faBed} />
        </span>
        <span className="property-card__bedrooms-text">
          {props.property.bedrooms}
        </span>
      </div>
      <div className="property-card__price card-item">
        <span className="icon">
          <FontAwesomeIcon icon={faPoundSign} />
        </span>
        <span className="property-card__price-text">
          {props.property.price}
        </span>
      </div>
      <div className="property-card__email card-item">
        <span>
          <a href={`mailto:${props.property.email}`} className="btn">
            <span className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
              email
          </a>
        </span>
      </div>
    </div>
  ));
};

export default PropertyCard;
