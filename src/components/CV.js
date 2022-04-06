import React, { Component } from "react";
import uniqid from "uniqid";

import sampleCV from "../utils/sampleCV";
import emptyCV from "../utils/emptyCV";

import Form from "./Form";
import Preview from "./Preview";

import "../styles/CV.css";

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = sampleCV;
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClearAll = this.handleClearAll.bind(this);
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
          const li = e.target.parentNode.parentNode.id;
          if (t.id === li) {
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

  handleDelete(e) {
    const li = e.target.parentNode.id;
    this.setState({
      ...this.state,
      skills: this.state.skills.filter((s) => s.id !== li),
      work: this.state.work.filter((w) => w.id !== li),
      education: this.state.education.filter((edu) => edu.id !== li),
      organizations: this.state.organizations.filter((o) => o.id !== li),
      languages: this.state.languages.filter((l) => l.id !== li),
    });

    if (e.target.id === "delete-task") {
      console.log(e.target.parentNode.id);
      this.setState({
        ...this.state,
        work: this.state.work.map((w) => {
          if (w.id !== e.target.parentNode.parentNode.parentNode.id) return w;
          return {
            ...w,
            tasks: w.tasks.filter((t) => t.id !== e.target.parentNode.id),
          };
        }),
      });
    }
  }

  handleAdd(e) {
    if (e.target.id === "skills") {
      this.setState({
        ...this.state,
        skills: [...this.state.skills, { id: uniqid(), name: "" }],
      });
    }
    if (e.target.id === "work") {
      this.setState({
        ...this.state,
        work: [
          ...this.state.work,
          {
            id: uniqid(),
            position: "",
            company: "",
            start: "",
            end: "",
            city: "",
            country: "",
            tasks: [{ id: uniqid(), task: "" }],
          },
        ],
      });
    }
    if (e.target.id === "task") {
      console.log(e.target.parentNode.parentNode);

      const li = e.target.parentNode.parentNode.id;
      this.setState({
        ...this.state,
        work: this.state.work.map((w) => {
          if (w.id === li) w.tasks = [...w.tasks, { id: uniqid(), task: "" }];
          return w;
        }),
      });
    }
    if (e.target.id === "education") {
      this.setState({
        ...this.state,
        education: [
          ...this.state.education,
          {
            id: uniqid(),
            degree: "",
            school: "",
            start: "",
            end: "",
          },
        ],
      });
    }
    if (e.target.id === "organizations") {
      this.setState({
        ...this.state,
        organizations: [
          ...this.state.organizations,
          {
            id: uniqid(),
            name: "",
            start: "",
            end: "",
          },
        ],
      });
    }
    if (e.target.id === "languages") {
      this.setState({
        ...this.state,
        languages: [
          ...this.state.languages,
          {
            id: uniqid(),
            language: "",
            level: "",
          },
        ],
      });
    }
  }

  handleClearAll() {
    this.setState(emptyCV);
  }

  render() {
    return (
      <div className="CV">
        <button onClick={this.handleClearAll}>Clear All</button>
        <Form
          cv={this.state}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          handleAdd={this.handleAdd}
        />
        <div className="CV-divider" />
        <Preview cv={this.state} />
      </div>
    );
  }
}
