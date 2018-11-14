import React from 'react';
import PropertyCard from './property-card';
import axios from 'axios';

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
      this.state.properties.map(property => {
        return (
          <PropertyCard
            key={property._id}
            property={property}
          />
        );
      })
    );
  }
}

export default Properties;
