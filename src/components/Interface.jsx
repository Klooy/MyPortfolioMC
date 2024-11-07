import React, { useState } from 'react';
import FolderGrid from './folders/FolderGrid';
import FolderContent from './folders/FolderContent';
import Modal from './layout/Modal';
import Taskbar from './layout/Taskbar';
import SleepMode from './modes/SleepMode';
import ExitConfirm from './modes/ExitConfirm';
import { portfolioData } from '../data/portfolioData';


const Interface = () => {
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  const [isSleepMode, setIsSleepMode] = useState(false);
  const [items, setItems] = useState(portfolioData);

  const handleItemSelect = (item) => {
    if (item.type === 'folder') {
      setSelectedFolder(item);
    } else {
      handleSocialClick(item.url);
    }
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const handleExit = () => {
    window.close();
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    
    if (draggedId === targetId) return;

    const newItems = [...items];
    const draggedIndex = newItems.findIndex(item => item.id === draggedId);
    const targetIndex = newItems.findIndex(item => item.id === targetId);
    
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(targetIndex, 0, draggedItem);
    
    setItems(newItems);
  };

  const handleSleepMode = () => {
    setIsSleepMode(true);
  };

  const handleWakeUp = (e) => {
    e.stopPropagation();
    if (isSleepMode) {
      setIsSleepMode(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-800">
      <div 
        className={`p-8 flex min-h-[calc(100vh-48px)] transition-opacity duration-500 ${
          isSleepMode ? 'opacity-30' : 'opacity-100'} bg-cover bg-center`} 
          style={{ 
            backgroundImage: 'url("/images/ricks.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'right center',
            transition: 'background-position 0.3s ease'
          }}
      >
        <div className="container mx-auto">
          <FolderGrid
            items={items}
            onItemSelect={handleItemSelect}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          />
        </div>
      </div>

      <Modal
        isOpen={!!selectedFolder}
        onClose={() => setSelectedFolder(null)}
        title={selectedFolder?.name}
      >
        {selectedFolder && <FolderContent folder={selectedFolder} />}
      </Modal>

      <ExitConfirm
        isOpen={showExitConfirm}
        onCancel={() => setShowExitConfirm(false)}
        onConfirm={handleExit}
      />

      {isSleepMode && <SleepMode onWakeUp={handleWakeUp} />}

      <Taskbar
        selectedFolder={selectedFolder}
        onSleepMode={handleSleepMode}
        onExitClick={() => setShowExitConfirm(true)}
      />
    </div>
  );
};

export default Interface;