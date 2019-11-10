import React, { Component } from "react";

export class First extends Component {
  fnLink = () => {
    const { path } = this.props.match;
    console.log(`${path}/second`);
    this.props.history.push(`${path}second`);
  };
  render() {
    return (
      <div>
        关于
        <div onClick={this.fnLink}>二级页面</div>
      </div>
    );
  }
}

export default First;
