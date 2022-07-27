import {
  SET_ANNOUNCEMENT_DATA,
  SET_ERROR_DATA,
  DELETE_ANNOUNCEMENT_DATA,
  DELETE_ERROR_DATA,
} from "./types";

const initialState = {
  data: {
    announcement: [],
    error: [],
  },
  loading: true,
};

interface itemData {
  id: string;
  createdOn: string;
  title: string;
}

const getUserReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case SET_ANNOUNCEMENT_DATA:
      return {
        ...state,
        data: {
          ...state?.data,
          announcement: action.payload,
        },
        loading: false,
      };
    case SET_ERROR_DATA:
      return {
        ...state,
        data: {
          ...state?.data,
          error: action.payload,
        },
        loading: false,
      };
    case DELETE_ANNOUNCEMENT_DATA:
      const updatedAnnouncementData = state?.data.announcement?.filter(
        (item: itemData) => item?.id !== action.payload
      );
      return {
        ...state,
        data: {
          ...state?.data,
          announcement: updatedAnnouncementData,
        },
        loading: false,
      };
    case DELETE_ERROR_DATA:
      const updatedErrorData = state?.data.error?.filter(
        (item: itemData) => item?.id !== action.payload
      );
      return {
        ...state,
        data: {
          ...state?.data,
          error: updatedErrorData,
        },
        loading: false,
      };
    default:
      return state;
  }
};

export default getUserReducer;
