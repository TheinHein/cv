import React, { Component } from "react";

import "../styles/Languages.css";

export default class Languages extends Component {
  render() {
    const { languages, handleChange, handleDelete, handleAdd } = this.props;
    return (
      <div className="Languages">
        <div className="header-2 split">
          <div>Languages</div>
          <button id="languages" onClick={handleAdd}>
            Add Language +
          </button>
        </div>
        <hr />
        <ul>
          {languages.map((l) => (
            <li key={l.id} id={l.id} className="gap">
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
              <button onClick={handleDelete}>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
