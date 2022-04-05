import React, { Component } from "react";

import "../styles/Preview.css";

export default class Preview extends Component {
  render() {
    const {
      general,
      contact,
      skills,
      work,
      education,
      organizations,
      languages,
    } = this.props.cv;
    return (
      <div className="Preview">
        <div className="Preview-general">
          <div className="Preview-general-name">
            {general.firstName} {general.lastName}
          </div>
          <div className="Preview-general-title">{general.title}</div>
          <div>{general.about}</div>
        </div>
        <hr />
        <div className="Preview-contact">
          <div>{contact.email}</div>
          <div>{contact.phone}</div>
          <div>
            {contact.city}, {contact.country}
          </div>
          <div>{contact.linkedin}</div>
        </div>
        <hr />
        <div className="Preview-skills">
          {skills.length > 0 && <div className="header-2">SKILLS</div>}
          <ul>
            {skills.map((s) => (
              <li key={s.id}>{s.name}</li>
            ))}
          </ul>
        </div>
        <div className="Preview-session">
          {work.length > 0 && <div className="header-2">WORK EXPERIENCE</div>}
          <ul>
            {work.map((w) => (
              <li className="Preview-work-list" key={w.id}>
                <div className="Preview-header-3">{w.position}</div>
                <div className="Preview-header-4">{w.company}</div>
                <div className="Preview-work-dur-loc">
                  <div className="Preview-italic">{w.duration}</div>
                  <div className="Preview-italic">
                    {w.city}, {w.country}
                  </div>
                </div>
                <ul className="Preview-work-tasks-list">
                  {w.tasks.map((t) => (
                    <li className="Preview-work-task" key={t.id}>
                      <div>{t.task}</div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className="Preview-session">
          {education.length > 0 && <div className="header-2">EDUCATION</div>}
          <ul>
            {education.map((e) => (
              <li key={e.id}>
                <div className="Preview-header-3">{e.degree}</div>
                <div className="Preview-header-4">{e.school}</div>
                <div className="Preview-italic">{e.years}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="Preview-session">
          {organizations.length > 0 && (
            <div className="header-2">ORGANIZATIONS</div>
          )}

          <ul className="Preview-organizations-list">
            {organizations.map((o) => (
              <li key={o.id}>
                <div>{o.name}</div>
                <div>{`(${o.duration})`}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className="Preview-session">
          {languages.length > 0 && <div className="header-2">LANGUAGES</div>}
          <ul className="Preview-languages-list">
            {languages.map((l) => (
              <li key={l.id}>
                <div>{l.language}</div>
                <div className="Preview-italic Preview-color">{l.level}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
