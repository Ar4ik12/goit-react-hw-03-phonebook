import React, { Component } from "react";
import { uuid } from "uuidv4";

class ContactForm extends Component {
  state = {
    name: "",
    number: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.submitContact({
      name: this.state.name,
      number: this.state.number,
      id: uuid()
    });
    this.setState({
      name: "",
      number: ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <br />
          <h2>Number</h2>
          <input
            // placeholder="+38(__)___-__-__"
            type="text"
            name="number"
            onChange={this.handleChange}
            value={number}
          />
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default ContactForm;
