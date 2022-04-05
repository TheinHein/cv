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
    const { handleChange } = this.props;
    return (
      <div className="Form">
        <General general={general} handleChange={handleChange} />
        <Contact contact={contact} handleChange={handleChange} />
        <Skills skills={skills} handleChange={handleChange} />
        <Work work={work} handleChange={handleChange} />
        <Education education={education} handleChange={handleChange} />
        <Organizations
          organizations={organizations}
          handleChange={handleChange}
        />
        <Languages languages={languages} handleChange={handleChange} />
      </div>
    );
  }
}
