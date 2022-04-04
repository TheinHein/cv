import React, { Component } from "react";

import Form from "./Form";
import Preview from "./Preview";

import "../styles/CV.css";

export default class CV extends Component {
  render() {
    return (
      <div>
        <Form />
        <Preview />
      </div>
    );
  }
}
