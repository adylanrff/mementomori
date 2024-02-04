"use client";
import Countdown from "@/components/Countdown";
import ProgressBar from "@/components/ProgressBar";
import { useEffect, useState } from "react";

const birthDate = new Date(1998, 5, 4);
const endDate = new Date(birthDate);
endDate.setFullYear(birthDate.getFullYear() + 72);

export default function Home() {
  const calculatePercentage = (): number => {
    const difference = +new Date() - +new Date(birthDate);
    const totalDays = +new Date(endDate) - +new Date(birthDate);
    return (difference / totalDays) * 100;
  };

  let [percentage, setPercentage] = useState(calculatePercentage());

  useEffect(() => {
    setTimeout(() => {
      setPercentage(calculatePercentage());
    }, 1000);
  });

  return (
    <main className="flex min-h-screen flex-col items-center p-14 font-sans">
      {/* Texts */}
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold">
          Memento <b className="text-red-400">Mori</b>
        </h1>
        <h1 className="text-sm text-slate-300">
          The world&apos;s average life expectancy is{" "}
          <b className="text-red-400">72.27 years</b>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-2 sm:gap-7 sm:my-28 my-12">
        <Countdown endDate={endDate} />
        <ProgressBar percentage={percentage} />
      </div>
    </main>
  );
}
