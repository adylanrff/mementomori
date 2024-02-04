"use client";
import React, { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

export default function Countdown({ endDate }: { endDate: Date }) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        milliseconds: Math.floor(difference % 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="grid grid-flow-col gap-5 sm:gap-9 text-center auto-cols-max md:auto-cols-min">
      <div className="flex flex-col p-2">
        <span className="font-mono text-3xl md:text-8xl">
          <span>{timeLeft.days}</span>
        </span>
        days
      </div>
      <div className="flex flex-col p-2 ">
        <span className="countdown font-mono text-3xl md:text-8xl">
          <span style={{ "--value": timeLeft.hours }}></span>
        </span>
        hours
      </div>
      <div className="flex flex-col p-2 ">
        <span className="countdown font-mono text-3xl md:text-8xl">
          <span style={{ "--value": timeLeft.minutes }}></span>
        </span>
        min
      </div>
      <div className="flex flex-col p-2 ">
        <span className="countdown font-mono text-3xl md:text-8xl">
          <span style={{ "--value": timeLeft.seconds }}></span>
        </span>
        sec
      </div>
    </div>
  );
}
