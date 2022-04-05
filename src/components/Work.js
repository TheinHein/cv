import React, { Component } from "react";

import "../styles/Work.css";

export default class Work extends Component {
  render() {
    const { work } = this.props;
    return (
      <div className="Work">
        <div className="header-2">
          WORK <button>Add Work +</button>
        </div>
        <ul className="Work-list">
          {work.map((w) => (
            <li key={w.id}>
              <hr />
              <button className="Work-list-del">Delete Work x</button>
              <div>
                <label htmlFor="position">
                  <span>Job Title</span>
                  <input type="text" value={w.position} className="input-200" />
                </label>
              </div>
              <div>
                <label htmlFor="company">
                  <span>Company</span>
                  <input type="text" value={w.company} className="input-200" />
                </label>
              </div>
              <div>
                <label htmlFor="duration">
                  <span>Duration</span>
                  <input type="text" value={w.duration} className="input-200" />
                </label>
              </div>
              <div>
                <label htmlFor="city">
                  <span>City</span>
                  <input type="text" value={w.city} />
                </label>
                <label htmlFor="country">
                  <span>Country</span>
                  <input type="text" value={w.country} />
                </label>
              </div>
              <div>Tasks</div>
              <ul>
                {w.tasks.map((t) => (
                  <li key={t.id} className="Work-task">
                    <label htmlFor="task">
                      <textarea type="text" value={t.task} />
                    </label>
                    <button>x</button>
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
