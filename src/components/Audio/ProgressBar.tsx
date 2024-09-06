import React, { ChangeEvent } from 'react';
import { useAudioPlayerContext } from "../../context/audio-player-context";

export const ProgressBar: React.FC = () => {
  const {
    progressBarRef,
    audioRef,
    timeProgress,
    duration,
    setTimeProgress,
  } = useAudioPlayerContext();

  const handleProgressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTime = Number(event.target.value);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);
    }
  };

  const formatTime = (time: number | undefined): string => {
    if (typeof time === 'number' && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      const formatMinutes = minutes.toString().padStart(2, '0');
      const formatSeconds = seconds.toString().padStart(2, '0');
      return `${formatMinutes}:${formatSeconds}`;
    }
    return '00:00';
  };

  const progressPercentage = duration ? (timeProgress / duration) * 100 : 0;

  return (
    <div className="flex items-center justify-center gap-5 w-full">
      <span>{formatTime(timeProgress)}</span>
      <input
        className="max-w-[80%] appearance-none bg-gray-300 h-1 rounded-full outline-none"
        ref={progressBarRef}
        type="range"
        min="0"
        max={duration || 100}
        value={timeProgress}
        onChange={handleProgressChange}
        style={{
          background: `linear-gradient(to right, #0FF0FC ${progressPercentage}%, #ccc ${progressPercentage}%)`,
        }}
      />
      <span>{formatTime(duration)}</span>
    </div>
  );
};
