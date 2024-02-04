export default function ProgressBar({ percentage }: { percentage: number }) {
  return (
    <>
      <div className="flex flex-1 gap-2 w-full items-center">
        <h1 className="text-base sm:text-xl font-bold">
          {percentage.toFixed(2)}%
        </h1>
        <progress
          className="h-3 sm:h-4 progress w-100 justify-items-center"
          value={percentage}
          max="100"
        ></progress>
      </div>
    </>
  );
}
