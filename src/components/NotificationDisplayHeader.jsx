export default function NotificationDisplayHeader({
  onClick,
  notificationCount,
}) {
  return (
    <div className="flex justify-between content-center">
      <div className="flex content-center gap-2 md:gap-4">
        <h2 className="font-extrabold text-lg md:text-2xl">Notifications</h2>
        <span className="my-auto px-1 md:px-3 bg-primary-blue text-neutral-white text-xl rounded">
          {notificationCount}
        </span>
      </div>
      <button
        className="text-neutral-dark-grayish-blue hover:text-primary-blue font-medium text-sm md:text-base"
        onClick={onClick}
      >
        Mark all as read
      </button>
    </div>
  );
}
