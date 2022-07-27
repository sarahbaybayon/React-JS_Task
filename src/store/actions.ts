import {
  SET_ANNOUNCEMENT_DATA,
  SET_ERROR_DATA,
  DELETE_ANNOUNCEMENT_DATA,
  DELETE_ERROR_DATA,
} from "./types";
interface itemData {
  id: string;
  createdOn: string;
  title: string;
}
export const setAnnouncementData = (payload: itemData) => {
  return {
    type: SET_ANNOUNCEMENT_DATA,
    payload: payload,
  };
};

export const setErrorData = (payload: itemData) => {
  return {
    type: SET_ERROR_DATA,
    payload: payload,
  };
};

export const deleteAnnouncement = (payload: string) => {
  return {
    type: DELETE_ANNOUNCEMENT_DATA,
    payload: payload,
  };
};

export const deleteError = (payload: string) => {
  return {
    type: DELETE_ERROR_DATA,
    payload: payload,
  };
};
