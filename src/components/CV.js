import React, { Component } from "react";

import sampleCV from "../utils/sampleCV";

import Form from "./Form";
import Preview from "./Preview";

import "../styles/CV.css";

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = sampleCV;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      ...this.state,
      general: { ...this.state.general, [e.target.name]: e.target.value },
      contact: { ...this.state.contact, [e.target.name]: e.target.value },
      skills: this.state.skills.map((s) => {
        if (s.id === e.target.id) s.name = e.target.value;
        return s;
      }),
      work: this.state.work.map((w) => {
        const li = e.target.parentNode.parentNode.parentNode.id;
        if (w.id === li) w[e.target.name] = e.target.value;
        w.tasks.map((t) => {
          if (t.id === e.target.id) {
            t.task = e.target.value;
          }
          return t;
        });
        return w;
      }),
      education: this.state.education.map((edu) => {
        const li = e.target.parentNode.parentNode.parentNode.id;
        if (edu.id === li) edu[e.target.name] = e.target.value;
        return edu;
      }),
      organizations: this.state.organizations.map((o) => {
        const li = e.target.parentNode.parentNode.parentNode.id;
        if (o.id === li) o[e.target.name] = e.target.value;
        return o;
      }),
      languages: this.state.languages.map((l) => {
        const li = e.target.parentNode.parentNode.parentNode.id;
        if (l.id === li) l[e.target.name] = e.target.value;
        return l;
      }),
    });
  }

  render() {
    return (
      <div className="CV">
        <Form cv={this.state} handleChange={this.handleChange} />
        <div className="CV-divider" />
        <Preview cv={this.state} />
      </div>
    );
  }
}
