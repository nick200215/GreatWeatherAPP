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
      <p> {date.toLocaleDateString()}</p>
      <p> {date.toLocaleTimeString()}</p>
      {/* <p>{date.toLocaleString()}</p> */}
    </div>
  );
};

export default DateTime;
