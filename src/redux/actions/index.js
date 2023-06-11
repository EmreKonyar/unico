import axios from "axios";
import service from "../../API";
import * as Scripts from "../../API/auth-token";

export const getHome = () => {
  return async (dispatch) => {
    dispatch({ type: "GET_HOME_REQUEST" });

    return service
      .get(`/activity`, {
        headers: {
          Authorization: await Scripts.getToken(),
        },
      })
      .then((res) => {
        dispatch({ type: "GET_HOME_SUCCESS", payload: res.data });
      })
      .catch((error) => {
        dispatch({ type: "GET_HOME_FAILURE", payload: error });
      });
  };
};
