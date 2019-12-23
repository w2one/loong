/**
 * login action
 */

import { Request, API, Storage } from "@utils";
export const LOGIN = "Login";
export const LOGOUT = "Logout";

export const loginAction = (data, callback) => async (dispatch) => {
  let response = await Request({
    url: API.common.login,
    // method: "post",
    data,
    headers: { token: data.result }
  });

  if (response.status) {
    dispatch({ type: LOGIN, data: { token: response.result } });
    Storage.Session.set("token", response.result);
    Storage.Session.set("user", JSON.stringify(data));
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
