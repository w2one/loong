import React, { Component } from "react";
import { Button } from "antd-mobile";
import Style from "./style";

export default // @connect(
//   mapStateToProps,
//   mapDispatchToProps
// )
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: { index_top: [], index_middle: [] },
      banner: []
    };
  }

  render() {
    return (
      <div className={Style.home} data-spm="spm-a-home">
        首页
        <Button type={"primary"}>ant mobile</Button>
      </div>
    );
  }
}
