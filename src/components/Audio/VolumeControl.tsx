import { ChangeEvent, useEffect, useState } from 'react';

import {
  IoMdVolumeHigh,
  IoMdVolumeOff,
  IoMdVolumeLow,
} from 'react-icons/io';
import { useAudioPlayerContext } from '../../context/audio-player-context';

export const VolumeControl = () => {
  const [volume, setVolume] = useState<number>(60);
  const [muteVolume, setMuteVolume] = useState(false);
  const { audioRef } = useAudioPlayerContext();

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muteVolume;
    }
  }, [volume, audioRef, muteVolume]);

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div>
      <div className="flex items-center gap-3 ">
        <button onClick={() => setMuteVolume((prev) => !prev)}
        className="hover:text-[#0FF0FC] transition-all duration-200 transform hover:scale-125"
        >
          {muteVolume || volume < 5 ? (
            <IoMdVolumeOff size={25} />
          ) : volume < 40 ? (
            <IoMdVolumeLow size={25} />
          ) : (
            <IoMdVolumeHigh size={25} />
          )}
        </button>
        <input
          type="range"
          min={0}
          max={100}
          value={volume}
          className="volumn"
          onChange={handleVolumeChange}
          style={{
            background: `linear-gradient(to right, #0FF0FC ${volume}%, #ccc ${volume}%)`,
            appearance: "none",
            width: "100%",
            height: "2px",
            borderRadius: "4px",
            outline: "none",
            opacity: "1",
            transition: "background 0.15s ease-in-out",
          }}
        />
      </div>
    </div>
  );
};