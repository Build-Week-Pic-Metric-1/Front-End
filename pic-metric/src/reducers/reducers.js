import axios from "axios";
axios.defaults.withCredentials = true;

export const initialState = {
  userPhotos: [],
  user_metrics: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_USER_PHOTOS":
      return { ...state, userPhotos: action.payload };
    case "GET_USER_METRICS":
      return state;
    case "GET_GLOBAL_METRICS":
      return state;
    case "EDIT_TITLE":
      return {
        ...state,
        userPhotos: [
          ...state.userPhotos.filter(el => el.id !== action.payload.id),
          {
            ...state.userPhotos.find(el => el.id === action.payload.id),
            title: action.payload.title
          }
        ]
      };
    case "DELETE_PHOTO":
      return {
        ...state,
        userPhotos: state.userPhotos.filter(el => el.id !== action.payload)
      };
    case "UPLOAD_PHOTO":
      return { ...state, userPhotos: [...state.userPhotos, action.payload] };
    default:
      return state;
  }
};
