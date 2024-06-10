import { useReducer } from "react";

import NotificationDisplayHeader from "./NotificationDisplayHeader.jsx";
import NotificationDisplayBody from "./NotificationDisplayBody.jsx";
import NotificationData from "../data.js";

function reducer(state, action) {
  if (action.type == "CLEAR_ALL") {
    let updatedNotifications = [
      ...state.notifications.map((obj) => ({ ...obj })),
    ];
    let updatedCount = 0;
    updatedNotifications.forEach((obj) => {
      if (obj.isUnread === true) {
        obj.isUnread = false;
      }
    });
    return {
      notifications: updatedNotifications,
      newNotificationsNumber: updatedCount,
    };
  }

  if (action.type === "CLEAR_SELECTED") {
    let updatedNotifications = [
      ...state.notifications.map((obj) => ({ ...obj })),
    ];
    let updatedCount = state.newNotificationsNumber;
    updatedNotifications.forEach((obj) => {
      if (obj.id === action.id && obj.isUnread === true) {
        obj.isUnread = false;
        updatedCount -= 1;
      }
    });
    return {
      notifications: updatedNotifications,
      newNotificationsNumber: updatedCount,
    };
  }
}

export default function NotificationDisplaySection() {
  const newNotificationsNumber = NotificationData.filter(
    (obj) => obj.isUnread
  ).length;

  const initialState = {
    notifications: NotificationData,
    newNotificationsNumber,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleClearAllNotifications() {
    dispatch({ type: "CLEAR_ALL" });
  }

  function handleClearSelectedNotification(id) {
    dispatch({ type: "CLEAR_SELECTED", id });
  }

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="px-4 py-8 md:px-10 md:pt-10 md:pb-0 max-w-screen-md bg-neutral-white">
        <NotificationDisplayHeader
          onClick={handleClearAllNotifications}
          notificationCount={state.newNotificationsNumber}
        />
        <NotificationDisplayBody
          onClick={handleClearSelectedNotification}
          notificationData={state.notifications}
        />
      </div>
    </section>
  );
}
