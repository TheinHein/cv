import React, { Component } from "react";

import sampleCV from "../utils/sampleCV";

import Form from "./Form";
import Preview from "./Preview";

import "../styles/CV.css";

export default class CV extends Component {
  constructor(props) {
    super(props);
    this.state = sampleCV;
  }

  render() {
    return (
      <div className="CV">
        <Form cv={this.state} />
        <div className="CV-divider" />
        <Preview cv={this.state} />
      </div>
    );
  }
}
