import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    const { contact } = this.props;
    return (
      <div className="Contact ">
        <div className="header-2">CONTACT</div>
        <div>
          <label htmlFor="email">
            <span>Email</span>
            <input type="text" value={contact.email} className="input-200" />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            <span>City</span>
            <input type="text" value={contact.city} />
          </label>
          <label htmlFor="country">
            <span>Country</span>
            <input type="text" value={contact.country} />
          </label>
        </div>
        <div>
          <label htmlFor="linkedin">
            <span>Linkedin</span>
            <input type="text" value={contact.linkedin} className="input-200" />
          </label>
        </div>
        <div>
          <label htmlFor="phone">
            <span>Phone</span>
            <input type="text" value={contact.phone} />
          </label>
        </div>
      </div>
    );
  }
}
