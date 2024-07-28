import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [bangkokTime, setBangkokTime] = useState("");

  useEffect(() => {
    const targetDate = new Date("2024-08-06");
    const currentDate = new Date();

    const interval = setInterval(() => {
      const timeDifference = targetDate - currentDate;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      setCount(days);

      if (currentDate >= targetDate) {
        clearInterval(interval);
      }
    }, 1000);

    const bangkokInterval = setInterval(() => {
      const now = new Date();
      const options = { timeZone: "Asia/Bangkok", hour12: false };
      const bangkokTimeString = now.toLocaleTimeString("en-US", options);
      setBangkokTime(bangkokTimeString);
    }, 1000);

    return () => {
      clearInterval(interval);
      clearInterval(bangkokInterval);
    };
  }, []);

 // console.log('count', count);

  let content;
  if (count > 0) {
    content = (
      <>
        <h1 className="text-2xl text-center font-bold text-blue-800">
          Days till trip:
        </h1>
        <h1 className="counter text-9xl text-center font-bold my-5 md:my-10 text-blue-700">
          {count}
        </h1>
      </>
    );
  } else {
    content = "";
  }

  return (
    <div className="mb-5 md:mb-0">
      {content}
      <h2 className="text-center text-3xl font-bold text-blue-800">
        Bangkok Time: {bangkokTime}
      </h2>
    </div>
  );
};

export default Counter;
