import { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <p>Time: {date.toLocaleTimeString()}</p>
      <p>date: {date.toLocaleDateString()}</p>
    </div>
  );
};

export default DateTime;
