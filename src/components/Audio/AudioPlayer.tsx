import { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri';

import { TrackInfo } from './TrackInfo';
import { Controls } from './Controls';
import { ProgressBar } from './ProgressBar';
import { VolumeControl } from './VolumeControl';
import { PlayList } from './Playlist';

export const AudioPlayer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="min-h-8 bg-slate-800/75 border-t-sky-500 flex flex-col gap-4 lg:flex-row justify-between items-center text-white p-[0.5rem_10px]">
        <TrackInfo />
        <div className="w-full flex flex-col items-center gap-1 m-auto flex-1">
          <Controls />
          <ProgressBar />
          <p className='text-sm'>Press Play to Rock the Party with Huy's favorites!</p>
        </div>
        <div className="flex items-center gap-2 text-gray-400 " >
          <VolumeControl />
          <button onClick={() => setOpenDrawer((prev) => !prev)}>
            <RiMenuAddLine />
          </button>
        </div>
      </div>

      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          openDrawer ? 'max-h-72' : 'max-h-0'
        }`}
      >
        <div className="bg-[#4c4848] text-white max-h-72 overflow-y-auto">
          <PlayList />
        </div>
      </div>
    </div>
  );
};