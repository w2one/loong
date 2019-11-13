import React, { Component } from "react";

export class Second extends Component {
  render() {
    return (
      <div>
        <h1>Second</h1>
        <div onClick={() => this.props.history.push("/about/third")}>第三级页面</div>
      </div>
    );
  }
}

export default Second;
