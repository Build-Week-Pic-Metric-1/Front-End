import { strictEqual } from "assert";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "POST_NEW_USER_CREDS":
      return state;
    case "POST_USER_CREDS":
      return state;
    case "UPLOAD_PHOTO":
      return state;
    case "EDIT_PHOTO_TITLE":
      return state;
    case "DELETE_PHOTO":
      return state;
    case "GET_USER_PHOTOS":
      return state;
    case "GET_USER_METRICS":
      return state;
    case "GET_GLOBAL_METRICS":
      return state;
    default:
      return state;
  }
};

export default reducer;
