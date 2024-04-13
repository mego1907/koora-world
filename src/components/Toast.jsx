import { useEffect } from "react";



const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed bottom-4 right-4 z-50 p-4 rounded-md bg-green-600 text-white min-w-md px-5"
      : "fixed bottom-4 right-4 z-50 p-4 rounded-md bg-red-600 text-white min-w-md px-5";

  return (
    <div className={styles}>
      <div className="flex items-center justify-center">
        <span className="md:text-lg text-xs font-semibold">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
