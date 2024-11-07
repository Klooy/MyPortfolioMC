import React from 'react';
import { Moon } from 'lucide-react';
import { useCurrentTime } from '../../hooks/useCurrentTime';

const SleepMode = ({ onWakeUp }) => {
  const currentTime = useCurrentTime();

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-96 flex flex-col items-center justify-center z-50"
      onClick={onWakeUp}
    >
      <div className="text-center">
        <Moon className="w-24 h-24 text-white mb-4 mx-auto" />
        <h2 className="text-white text-4xl font-bold mb-4">Modo Reposo</h2>
        <p className="text-white text-6xl font-mono">
          {currentTime.toLocaleTimeString()}
        </p>
        <p className="text-white text-xl mt-4">
          Haz clic en cualquier lugar para despertar
        </p>
      </div>
    </div>
  );
};

export default SleepMode;