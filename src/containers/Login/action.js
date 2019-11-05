/**
 * login action
 */

import Request from "@utils/request";
import API from "@utils/api";
import { Session } from "@utils/storage";
export const LOGIN = "Login";
export const LOGOUT = "Logout";

export const loginAction = (data, callback) => async (dispatch) => {
  let response = await Request({
    url: API.common.login,
    method: "post",
    data,
    headers: { token: data.result }
  });

  if (response.status) {
    dispatch({ type: LOGIN, data: { token: response.result } });
    Session.set("token", response.result);
    Session.set("user", JSON.stringify(data));
    callback();
  }
};

export const logoutAction = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
    data: {
      token: null
    }
  });
  Session.clear();
};
