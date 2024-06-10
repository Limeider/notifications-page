import PrivateMessage from "./PrivateMessage";

export default function NotificationRow({ notification, handleClick }) {
  const {
    id,
    img,
    name,
    activity,
    message,
    notificationAge,
    isPrivateMessage,
    isUnread,
  } = notification;

  let rowClasses = "flex  gap-6 bg-neutral-very-light-grayish-blue";
  if (isUnread) {
    rowClasses = "flex gap-6 bg-neutral-very-light-grayish-blue cursor-pointer";
  }

  return (
    <div
      className={rowClasses}
      onClick={() => {
        handleClick(id);
      }}
    >
      <img
        className="w-12 h-12 md:w-14 md:h-14"
        src={img}
        alt={"Avatar of " + name}
      />
      <div className="flex flex-col justify-center">
        <div>
          <span className="font-extrabold hover:text-primary-blue cursor-pointer text-sm md:text-base">
            {name}
          </span>
          <span className="text-sm md:text-base"> {activity}</span>
          <span className="font-extrabold hover:text-primary-blue cursor-pointer text-sm md:text-base">
            {" "}
            {!isPrivateMessage ? message : null}
            <span
              className={
                isUnread
                  ? "inline-block h-2 w-2 bg-red-500 rounded-full ml-2 "
                  : "hidden"
              }
            ></span>
          </span>
        </div>
        <p className="text-neutral-grayish-blue text-sm">{notificationAge}</p>
        {isPrivateMessage ? <PrivateMessage message={message} /> : null}
      </div>
    </div>
  );
}
