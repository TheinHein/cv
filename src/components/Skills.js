import React, { Component } from "react";

import "../styles/Skills.css";

export default class Skills extends Component {
  render() {
    const { skills, handleChange, handleDelete, handleAdd } = this.props;
    return (
      <div className="Skills">
        <div className="header-2 split">
          <div>SKILLS</div>
          <button id="skills" onClick={handleAdd}>
            Add Skill +
          </button>
        </div>
        <hr />
        <ul>
          {skills.map((s) => (
            <li key={s.id} id={s.id}>
              <label htmlFor="name">
                <input
                  type="text"
                  id={s.id}
                  value={s.name}
                  className="input-200"
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
