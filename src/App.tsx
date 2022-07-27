import React, { useEffect } from "react";
import axios from "axios";
import {
  setAnnouncementData,
  setErrorData,
  deleteAnnouncement,
  deleteError,
} from "./store/actions";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./components/Alert";
import AddIcon from "./assets/icon/add.svg";
import "./App.scss";

interface itemData {
  id: string;
  createdOn: string;
  title: string;
}

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: any) => state.data);

  const getData = async (path: string, type: string) => {
    const res = await axios
      .get(path)
      .catch((err) => {
        console.log("Err", err);
      })
      .then((res) => {
        return res?.data;
      });

    type === "announcements"
      ? dispatch(setAnnouncementData(res))
      : dispatch(setErrorData(res));
  };

  const getDayDiffToday = (createdOn: string) => {
    const today = new Date();
    const createdOnData = new Date(createdOn);
    const dayDiff = today.getTime() - createdOnData?.getTime();
    return Math.floor(dayDiff / (1000 * 60 * 60 * 24));
  };

  const handleRemoveItem = (id: string, type: string) => {
    if (type === "announcements") {
      dispatch(deleteAnnouncement(id));
    } else if (type === "error") {
      dispatch(deleteError(id));
    }
  };

  useEffect(() => {
    getData("http://localhost:3000/announcements", "announcements");
    getData("http://localhost:3000/errors", "error");
  }, []);

  return (
    <>
      <div className="header-container">
        <h1>Alerts</h1>
        <div className="btn-container">
          <button className="new-alert">
            <span>
              <img src={AddIcon} alt="add-icon" />
            </span>
            <span>New Alert</span>
          </button>
        </div>
      </div>
      <div className="content-container">
        {data?.announcement.map((item: itemData) => (
          <Alert
            type="announcement"
            timeStamp={getDayDiffToday(item?.createdOn)}
            text={item?.title}
            handleRemove={() => handleRemoveItem(item?.id, "announcements")}
          />
        ))}
        {data?.error.map((item: itemData) => (
          <Alert
            type="error"
            timeStamp={getDayDiffToday(item?.createdOn)}
            text={item?.title}
            handleRemove={() => handleRemoveItem(item?.id, "error")}
          />
        ))}
      </div>
    </>
  );
};

export default App;
