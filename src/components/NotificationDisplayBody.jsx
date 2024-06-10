import NotificationRow from "./NotificationRow";

export default function NotificationDisplayBody({ onClick, notificationData }) {
  return (
    <ul className="pt-8 pb-4 flex flex-col gap-4 md:gap-6">
      {notificationData.map((notif, index) => (
        <li key={index}>
          <NotificationRow notification={notif} handleClick={onClick} />
        </li>
      ))}
    </ul>
  );
}
