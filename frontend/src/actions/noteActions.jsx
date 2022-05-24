import axios from "axios";
import {
  NOTES_CREATE_REQUEST,
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
} from "../constants/noteConstants";

// get note route
export const listNotes = () => async (dispatch) => {
  try {
    dispatch({
      type: NOTES_LIST_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.get(`/api/notes`, config);

    dispatch({
      type: NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.message.data.message
        : error.message;
    dispatch({
      type: NOTES_LIST_FAIL,
      payload: message,
    });
  }
};

// note create
export const createNoteAction = (title, content) => async (dispatch) => {
  try {
    dispatch({
      type: NOTES_CREATE_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `api/notes/create`,
      { title, content },
      config
    );

    dispatch({
      type: NOTES_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: NOTES_LIST_FAIL,
      payload: message,
    });
  }
};
