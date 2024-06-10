export default function PrivateMessage({ message }) {
  return (
    <div className="mt-4 px-2 md:px-6 py-4 border text-neutral-dark-grayish-blue font-medium hover:bg-neutral-medium-grayish-blue text-sm md:text-base">
      <p>{message}</p>
    </div>
  );
}
