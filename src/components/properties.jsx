import React from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import '../styles/properties.scss';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => {
        this.setState({
          properties: response.data,
        });
      });
  }

  render() {
    return (
      <div className="property-cards">
        {
          this.state.properties.map(property => {
            return (
              <PropertyCard
                key={property._id}
                property={property}
              />
            );
          })
      }
      </div>
    );
  }
}

export default Properties;
