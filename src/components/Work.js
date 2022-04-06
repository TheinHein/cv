import React, { Component } from "react";

import "../styles/Work.css";

export default class Work extends Component {
  render() {
    const { work, handleChange, handleDelete, handleAdd } = this.props;
    return (
      <div className="Work">
        <div className="header-2 split">
          <div>WORK EXPERIENCE</div>
          <button id="work" onClick={handleAdd}>
            Add Work +
          </button>
        </div>
        <ul className="Work-list">
          {work.map((w) => (
            <li key={w.id} id={w.id}>
              <hr />
              <button className="Work-list-del" onClick={handleDelete}>
                Delete Work x
              </button>
              <div>
                <label htmlFor="position">
                  <span>Job Title</span>
                  <input
                    type="text"
                    value={w.position}
                    className="input-200"
                    name="position"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="company">
                  <span>Company</span>
                  <input
                    type="text"
                    value={w.company}
                    className="input-200"
                    name="company"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="gap">
                <label htmlFor="start">
                  <span>Start Date</span>
                  <input
                    type="month"
                    value={w.start}
                    className="input-200"
                    name="start"
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="end">
                  <span>End Date</span>
                  <input
                    type="month"
                    value={w.end}
                    className="input-200"
                    name="end"
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="gap">
                <label htmlFor="city">
                  <span>City</span>
                  <input
                    type="text"
                    value={w.city}
                    name="city"
                    onChange={handleChange}
                    className="input-200"
                  />
                </label>
                <label htmlFor="country">
                  <span>Country</span>
                  <input
                    type="text"
                    value={w.country}
                    name="country"
                    onChange={handleChange}
                    className="input-200"
                  />
                </label>
              </div>
              <div className="split">
                <div>TASKS</div>
                <button id="task" onClick={handleAdd}>
                  Add Task +
                </button>
              </div>
              <ul>
                {w.tasks.map((t) => (
                  <li key={t.id} id={t.id} className="Work-task">
                    <label htmlFor="task">
                      <textarea
                        type="text"
                        value={t.task}
                        name="task"
                        onChange={handleChange}
                      />
                    </label>
                    <button id="delete-task" onClick={handleDelete}>
                      x
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
