import React from 'react';
import PropertyCard from './property-card';
import axios from 'axios';
import Alert from './alert';
import { Link } from 'react-router-dom';
import '../styles/properties.scss';
import '../styles/alert.scss';

class Properties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      isError: false,
      alertMessage: '',
    };
  }

  renderLinks(links) {
    return (
      links.sort().map((link) => {
        return (
          <Link
            className="filter-link"
            key={link}
            to={`?query={"city": "${link}"}`}
          >
            {link}
          </Link>
        );
      })
    );
  }

  componentDidMount() {
    axios.get('http://localhost:3000/api/v1/PropertyListing')
      .then((response) => {
        this.setState({
          properties: response.data,
        });
      })
      .catch(() => {
        this.setState({
          isError: true,
          alertMessage: 'Connection Error!',
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="properties">
          <div className="filter-bar">
            {this.renderLinks([
              'Manchester',
              'Liverpool',
              'Sheffield',
              'Leeds',
            ])}
          </div>
          <Alert message={this.state.alertMessage} failure={this.state.isError} />
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
        </div>
      </React.Fragment>
    );
  }
}

export default Properties;
