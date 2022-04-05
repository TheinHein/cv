import React, { Component } from "react";

export default class Organizations extends Component {
  render() {
    const { organizations } = this.props;
    return (
      <div className="Organization">
        <div className="header-2">
          Organizations <button>Add Organization +</button>
        </div>
        <ul>
          {organizations.map((o) => (
            <li key={o.id}>
              <div>
                <label htmlFor="name">
                  <span>Name</span>
                  <input type="text" value={o.name} className="input-200" />
                </label>
                <label htmlFor="duration">
                  <span>Duration</span>
                  <input type="text" value={o.duration} />
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
