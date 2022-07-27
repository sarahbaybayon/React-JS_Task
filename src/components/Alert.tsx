import React from "react";
import MegaphoneIcon from "../assets/icon/megaphone.svg";
import AlertIcon from "../assets/icon/alert-circle.svg";
import RemoveIcon from "../assets/icon/remove.svg";

interface alertProps {
  type: "announcement" | "error";
  timeStamp: number;
  text: string;
  handleRemove: () => void;
}
const Alert = ({ type, timeStamp, text, handleRemove }: alertProps) => {
  return (
    <>
      <div
        className={
          type === "announcement"
            ? "alert-container"
            : "alert-container error-left"
        }
      >
        <span className="alert-icon">
          <img
            src={
              type === "announcement"
                ? MegaphoneIcon
                : type === "error"
                ? AlertIcon
                : ""
            }
            alt={`${type}-icon`}
          />
        </span>
        <span className="type-text">
          {type === "announcement"
            ? "Announcement"
            : type === "error"
            ? "Event Error"
            : ""}{" "}
        </span>
        <span className="time-stamp">
          <span className="num-text">{timeStamp}</span>days ago
        </span>
        <span className="desc-text">{text}</span>
        <button onClick={() => handleRemove()} className="remove-icon">
          <img src={RemoveIcon} alt="remove-icon" />
        </button>
      </div>
    </>
  );
};

export default Alert;
