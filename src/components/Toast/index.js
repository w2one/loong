/* eslint-disable react/jsx-handler-names */
/**
 * toast
 */
import { Toast, Button } from "antd-mobile";
import React from "react";
// import { Icon } from "antd-mobile";

// export default (message, type, duration = 1) => {
//   switch (type) {
//     case "fail":
//       Toast.fail(message, duration);
//       break;
//     case "sucess":
//       Toast.success(message, duration);
//       break;
//     default:
//       Toast.info(message, duration);
//       break;
//   }
// };

// eslint-disable-next-line no-unused-vars
function Content({ message }) {
  return (
    <div>
      <div>{message}</div>
      <Button onClick={Toast.hide} type="primary">
        确定
      </Button>
    </div>
  );
}

const fail = (message, duration = 1) => Toast.fail(message, duration);
// const fail = (message, duration = 1) => Toast.info(<Content message={message} />, duration);
// const fail = (message, duration = 0) => Toast.info(Content(message), duration);
const success = (message, duration = 1) => Toast.success(message, duration);
const info = (message, duration = 1) => Toast.info(message, duration);
const loading = (message, duration = 0) => Toast.loading(message, duration);
const hide = () => Toast.hide();

export default {
  fail,
  success,
  info,
  loading,
  hide
};
