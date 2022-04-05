import React, { Component } from "react";

export default class General extends Component {
  render() {
    const { general } = this.props;
    return (
      <div>
        <div className="header-2">GENERAL INFORMATION</div>
        <div>
          <label htmlFor="title">
            <span>Title</span>
            <input type="text" value={general.title} className="input-200" />
          </label>
        </div>
        <div>
          <label htmlFor="firstName">
            <span>First Name</span>
            <input type="text" value={general.firstName} />
          </label>
          <label htmlFor="lastName">
            <span>Last Name</span>
            <input type="text" value={general.lastName} />
          </label>
        </div>

        <div>
          <label htmlFor="title">
            <div>About you</div>
            <textarea value={general.about} />
          </label>
        </div>
      </div>
    );
  }
}
