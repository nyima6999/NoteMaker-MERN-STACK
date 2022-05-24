import {
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
  NOTES_LIST_FAIL,
  NOTES_CREATE_REQUEST,
  NOTES_CREATE_SUCCESS,
  NOTES_CREATE_FAIL,
} from "../constants/noteConstants";

// note list
export const noteListReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return { loading: true };
    case NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// create note
export const noteCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case NOTES_CREATE_REQUEST:
      return { loading: true };
    case NOTES_CREATE_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTES_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
