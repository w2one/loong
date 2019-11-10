import React, { Component } from "react";
import { Pdf } from "@components";

export class Demo extends Component {
  render() {
    return (
      <div>
        <Pdf file="http://jay.aliyuntao.top/pdf/%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E8%A7%84%E8%8C%83.pdf" />
      </div>
    );
  }
}

export default Demo;
