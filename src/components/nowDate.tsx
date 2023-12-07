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
    <div className="text-xs text-slate-400">
      <p> {date.toLocaleDateString()}</p>
      <p> {date.toLocaleTimeString()}</p>
    </div>
  );
};

export default DateTime;
