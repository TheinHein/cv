import React, { Component } from "react";

import "../styles/Education.css";

export default class Education extends Component {
  render() {
    const { education, handleChange, handleDelete, handleAdd } = this.props;
    return (
      <div className="Education">
        <div className="header-2 split">
          <div>Education</div>
          <button id="education" onClick={handleAdd}>
            Add Education +
          </button>
        </div>
        <ul className="Education-list">
          {education.map((e) => (
            <li key={e.id} id={e.id}>
              <hr />
              <button className="Education-list-del" onClick={handleDelete}>
                Delete Education x
              </button>
              <div>
                <label htmlFor="degree">
                  <span>Title</span>
                  <input
                    type="text"
                    value={e.degree}
                    className="input-200"
                    name="degree"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="school">
                  <span>School</span>
                  <input
                    type="text"
                    value={e.school}
                    className="input-200"
                    name="school"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="gap">
                <label htmlFor="start">
                  <span>Start Date</span>
                  <input
                    type="month"
                    value={e.start}
                    className="input-200"
                    name="start"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="end">
                  <span>End Date</span>
                  <input
                    type="month"
                    value={e.end}
                    className="input-200"
                    name="end"
                    onChange={handleChange}
                  />
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
