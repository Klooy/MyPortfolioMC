import React from 'react';
import { Moon, Power } from 'lucide-react';

const Taskbar = ({ selectedFolder, onSleepMode, onExitClick }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 bg-gray-900 flex items-center justify-between px-4 border-t border-gray-700 z-10">
      <div className="flex items-center gap-4">
        {selectedFolder && (
          <div className="bg-gray-800 px-4 py-1 rounded-md text-white flex items-center gap-2">
            <span>{selectedFolder.name}</span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onSleepMode}
          className="text-white hover:bg-blue-600 p-2 rounded-full transition-colors"
          title="Sleep Mode"
        >
          <Moon className="w-6 h-6" />
        </button>
        <button
          onClick={onExitClick}
          className="text-white hover:bg-red-600 p-2 rounded-full transition-colors"
          title="Exit"
        >
          <Power className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Taskbar;