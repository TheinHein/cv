import React, { Component } from "react";

import "../styles/Skills.css";

export default class Skills extends Component {
  render() {
    const { skills } = this.props;
    return (
      <div className="Skills">
        <div className="header-2">
          SKILLS <button>Add Skill +</button>
        </div>
        <ul>
          {skills.map((s) => (
            <li key={s.id}>
              <label htmlFor={s.id}>
                <input type="text" value={s.name} className="input-200" />
              </label>
              <button>x</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
