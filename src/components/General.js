import React, { Component } from "react";

export default class General extends Component {
  render() {
    const { general, handleChange } = this.props;
    return (
      <div>
        <div className="header-2">GENERAL INFORMATION</div>
        <hr />
        <div>
          <label htmlFor="title">
            <span>Title</span>
            <input
              type="text"
              name="title"
              value={general.title}
              className="input-200"
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="gap">
          <label htmlFor="firstName">
            <span>First Name</span>
            <input
              name="firstName"
              type="text"
              value={general.firstName}
              className="input-200"
              onChange={handleChange}
            />
          </label>
          <label htmlFor="lastName">
            <span>Last Name</span>
            <input
              name="lastName"
              type="text"
              value={general.lastName}
              className="input-200"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="about">
            <div>About you</div>
            <textarea
              name="about"
              value={general.about}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
    );
  }
}
