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
    return (
      <div className="Form">
        <General general={general} />
        <Contact contact={contact} />
        <Skills skills={skills} />
        <Work work={work} />
        <Education education={education} />
        <Organizations organizations={organizations} />
        <Languages languages={languages} />
      </div>
    );
  }
}
