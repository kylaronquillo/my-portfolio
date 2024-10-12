import React from "react";

// Define the prop types
interface NotificationProps {
  message: string; // message should be a string
  onClose: () => void; // onClose should be a function with no parameters and no return value
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className={`fixed top-1/2 right-4 transform -translate-y-1/2 bg-blue-400 text-white p-3 shadow-md transition-transform duration-300`}>
      {message}
      <button onClick={onClose} className="text-white ml-5">x</button>
    </div>
  );
};

export default Notification;
