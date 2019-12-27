/**
 * input
 *
 */

import React from "react";
import Style from "./style";

function Input(props) {
  // eslint-disable-next-line no-unused-vars
  const { placeholder, onChange, value, ...rest } = props;

  return (
    <div className={Style.input}>
      <input placeholder={placeholder} {...rest} onChange={onChange} style={{ width: "100%" }} />
    </div>
  );
}

export default Input;
