/* eslint-disable react/jsx-handler-names */
import * as React from "react";
import { withRouter } from "react-router-dom";
import Style from "./style";

const Nav = (props) => {
  function fnBack() {
    // props.history.goBack;
    const { back = -1, history } = props;
    console.log("back", back);
    history.go(back);
  }
  return (
    <div className={Style.nav}>
      {props.back !== undefined && (
        <div className={Style.left} onClick={fnBack}>
          <i className="arrow-left"></i>
        </div>
      )}
      <div className={Style.title}>{props.title}</div>
    </div>
  );
};

export default withRouter(Nav);
