import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { contact, handleChange } = this.props;
    return (
      <div className="Contact ">
        <div className="header-2">CONTACT</div>
        <hr />
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input
              name="email"
              type="text"
              value={contact.email}
              className="input-200"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="gap">
          <label htmlFor="city">
            <span>City</span>
            <input
              type="text"
              value={contact.city}
              name="city"
              className="input-200"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="country">
            <span>Country</span>
            <input
              type="text"
              value={contact.country}
              name="country"
              className="input-200"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="gap">
          <label htmlFor="linkedin">
            <span>Linkedin</span>
            <input
              type="url"
              value={contact.linkedin}
              className="input-200"
              name="linkedin"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="phone">
            <span>Phone</span>
            <input
              type="tel"
              value={contact.phone}
              name="phone"
              className="input-200"
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    );
  }
}
