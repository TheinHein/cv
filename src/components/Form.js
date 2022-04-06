import React, { Component } from "react";

import General from "./General";
import Contact from "./Contact";
import Skills from "./Skills";
import Work from "./Work";
import Education from "./Education";
import Organizations from "./Organizations";
import Languages from "./Languages";

import "../styles/Form.css";

export default class Form extends Component {
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
    const { handleChange, handleDelete, handleAdd } = this.props;
    return (
      <div className="Form">
        <General general={general} handleChange={handleChange} />
        <Contact contact={contact} handleChange={handleChange} />
        <Skills
          skills={skills}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
        <Work
          work={work}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
        <Education
          education={education}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
        <Organizations
          organizations={organizations}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
        <Languages
          languages={languages}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleAdd={handleAdd}
        />
      </div>
    );
  }
}
