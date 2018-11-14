import React from 'react';
import PropertyCard from './property-card';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [
        {
          id: '1',
          title: 'mockTitle',
          type: 'mockType',
          bathrooms: 'mockBathrooms',
          bedrooms: 'mockBedrooms',
          price: 'mockPrice',
          city: 'mockCity',
          email: 'mockEmail',
        },
      ],
    };
  }

  render() {
    return (
      this.state.properties.map(property => {
        return (
          <PropertyCard
            key={property.id}
            property={property}
          />
        );
      })
    );
  }
}

export default Properties;
