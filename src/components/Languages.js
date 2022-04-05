import React, { Component } from "react";

import "../styles/Languages.css";

export default class Languages extends Component {
  render() {
    const { languages, handleChange } = this.props;
    return (
      <div className="Languages">
        <div className="header-2">Languages</div>
        <ul>
          {languages.map((l) => (
            <li key={l.id} id={l.id}>
              <div>
                <label htmlFor="language">
                  <span>Language</span>
                  <input
                    type="text"
                    value={l.language}
                    name="language"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="level">
                  <span>Fluency Level</span>
                  <input
                    type="text"
                    value={l.level}
                    className="input-200"
                    name="level"
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
