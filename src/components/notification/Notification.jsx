import React, { useEffect } from "react";
import NotificationStyleWrapper from "./Notification.style";
import ProcessingIcon from "../../assets/images/icons/processing.png";
import SuccessfulIcon from "../../assets/images/icons/successful.svg";

const Notification = ({ notificationDone, textMessage }) => {
  return (
    <NotificationStyleWrapper>
      {notificationDone ? (
        <div className="presale-toast done">
          <div className="presale-toast__content">
            <img className="icon-successful" src={SuccessfulIcon} alt="icon" />
            <p>Awesome ! Your transaction has been successfully complete</p>
          </div>
        </div>
      ) : (
        <div className="presale-toast">
          <div className="presale-toast__content">
            <img className="icon-spin" src={ProcessingIcon} alt="icon" />
            <p>{textMessage}</p>
          </div>
        </div>
      )}
    </NotificationStyleWrapper>
  );
};

export default Notification;
