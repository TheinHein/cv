import React, { Component } from "react";

export default class Organizations extends Component {
  render() {
    const { organizations, handleChange, handleDelete, handleAdd } = this.props;
    return (
      <div className="Organization">
        <div className="header-2 split">
          <div>Organizations</div>
          <button id="organizations" onClick={handleAdd}>
            Add Organization +
          </button>
        </div>
        <hr />
        <ul>
          {organizations.map((o) => (
            <li key={o.id} id={o.id} className="gap">
              <label htmlFor="name">
                <span>Name</span>
                <input
                  type="text"
                  value={o.name}
                  className="input-200"
                  name="name"
                  onChange={handleChange}
                />
              </label>
              <label htmlFor="start">
                <span>Start Date</span>
                <input
                  type="month"
                  value={o.start}
                  name="start"
                  onChange={handleChange}
                  className="input-120"
                />
              </label>
              <label htmlFor="end">
                <span>End Date</span>
                <input
                  type="month"
                  value={o.end}
                  name="end"
                  onChange={handleChange}
                  className="input-120"
                />
              </label>
              <button onClick={handleDelete}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
