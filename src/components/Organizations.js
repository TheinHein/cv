import React, { Component } from "react";

export default class Organizations extends Component {
  render() {
    const { organizations, handleChange } = this.props;
    return (
      <div className="Organization">
        <div className="header-2">
          Organizations <button>Add Organization +</button>
        </div>
        <ul>
          {organizations.map((o) => (
            <li key={o.id} id={o.id}>
              <div>
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
                <label htmlFor="duration">
                  <span>Duration</span>
                  <input
                    type="text"
                    value={o.duration}
                    name="duration"
                    onChange={handleChange}
                  />
                </label>
                <button>x</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
