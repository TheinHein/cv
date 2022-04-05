import React, { Component } from "react";

export default class Education extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="Education">
        <div className="header-2">
          Education <button>Add Education +</button>
        </div>
        <ul>
          {education.map((e) => (
            <li key={e.id}>
              <button>x</button>
              <div>
                <label htmlFor="degree">
                  <span>Title</span>
                  <input type="text" value={e.degree} className="input-200" />
                </label>
              </div>
              <div>
                <label htmlFor="school">
                  <span>School</span>
                  <input type="text" value={e.school} className="input-200" />
                </label>
              </div>
              <div>
                <label htmlFor="years">
                  <span>Duration</span>
                  <input type="text" value={e.years} className="input-200" />
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
