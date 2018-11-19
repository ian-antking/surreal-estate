import React from 'react';
import axios from 'axios';
import Alert from './alert';
import '../styles/add-property.scss';

class AddProperties extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      alertMessage: '',
      isSuccess: false,
      isFailure: false,
      fields: {
        title: '',
        type: 'flat',
        city: 'Manchester',
        bedrooms: 1,
        bathrooms: 1,
        price: 0.01,
        email: '',
      },
    };
  }

  handleAddProperty = (event) => {
    this.setState({
      alertMessage: '',
      isSuccess: false,
      isFailure: false,
    });
    event.preventDefault();
    axios.post('http://localhost:3000/api/v1/PropertyListing', this.state.fields)
      .then(() => {
        this.setState({
          alertMessage: 'Property Added',
          isSuccess: true,
        });
      })
      .catch(() => {
        this.setState({
          alertMessage: 'Something went wrong!',
          isFailure: true,
        });
      });
  };

  handleFieldChange = (event) => {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
      },
    });
  };

  renderOptions(options) {
    return (
      options.sort().map((option) => {
        return (<option key={option} value={option}>{option}</option>);
      })
    );
  }

  render() {
    return (
      <div className="add-property">
        <Alert
          message={this.state.alertMessage}
          success={this.state.isSuccess}
          failure={this.state.isFailure}
        />
        <h1>Add Your Property</h1>
        <form onSubmit={this.handleAddProperty}>
          <div className="input">
            <label
              htmlFor="Title"
            >
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={this.state.fields.title}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="input">
            <label
              htmlFor="type"
            >
              Type:
            </label>
            <select
              name="type"
              value={this.state.fields.type}
              onChange={this.handleFieldChange}
            >
              {this.renderOptions([
                'Flat',
                'Detached',
                'Semi-Detached',
                'Terraced',
                'End Terrace',
                'Cottage',
                'Bungalow',
              ])}
            </select>
          </div>
          <div className="input">
            <label
              htmlFor="city"
            >
              City:
            </label>
            <select
              name="city"
              value={this.state.fields.type}
              onChange={this.handleFieldChange}
            >
              {this.renderOptions([
                'Manchester',
                'Leeds',
                'Sheffield',
                'Liverpool',
              ])}
            </select>
          </div>
          <div className="input">
            <label
              htmlFor="bedrooms"
            >
              Bedrooms:
            </label>
            <select
              name="bedrooms"
              value={this.state.fields.bedrooms}
              onChange={this.handleFieldChange}
            >
              {this.renderOptions([1, 2, 3, 4, 5])}
            </select>
          </div>
          <div className="input">
            <label
              htmlFor="bathrooms"
            >
              Bathrooms:
            </label>
            <select
              name="bathrooms"
              value={this.state.fields.bathrooms}
              onChange={this.handleFieldChange}
            >
              {this.renderOptions([1, 2, 3, 4, 5])}
            </select>
          </div>
          <div className="input">
            <label
              htmlFor="price"
            >
              Price:
            </label>
            <input
              name="price"
              type="number"
              step="0.01"
              min="0.01"
              value={this.state.fields.price}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="input">
            <label
              htmlFor="email"
            >
              Email:
            </label>
            <input
              name="email"
              type="email"
              value={this.state.fields.email}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="input">
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddProperties;
