import React, { Component } from "react";

import "../styles/Languages.css";

export default class Languages extends Component {
  render() {
    const { languages } = this.props;
    return (
      <div className="Languages">
        <div className="header-2">Languages</div>
        <ul>
          {languages.map((l) => (
            <li key={l.id}>
              <div>
                <label htmlFor="language">
                  <span>Language</span>
                  <input type="text" value={l.language} />
                </label>
                <label htmlFor="level">
                  <span>Fluency Level</span>
                  <input type="text" value={l.level} className="input-200" />
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
