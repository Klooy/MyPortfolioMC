import React from 'react';
import SocialIcons from '../social/SocialIcons';

const FolderItem = ({ item, onDragStart, onDragOver, onDrop, onClick }) => {
  const getItemBackground = (item) => {
    if (item.type === 'folder') return 'bg-yellow-400 hover:bg-yellow-300';
    if (item.icon === 'github') return 'bg-gray-700 hover:bg-gray-600';
    if (item.icon === 'linkedin') return 'bg-blue-600 hover:bg-blue-500';
    return '';
  };

  const renderIcon = (item) => {
    if (item.type === 'folder') {
      return (
        <svg
          className="w-8 h-8 text-yellow-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
        </svg>
      );
    }
    return <SocialIcons type={item.icon} />;
  };

  return (
    <div 
      draggable
      onDragStart={(e) => onDragStart(e, item.id)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, item.id)}
      className="flex flex-col items-center group cursor-move"
      onClick={() => onClick(item)}
    >
      <div className={`w-16 h-14 ${getItemBackground(item)} rounded-lg mb-2 flex items-center justify-center transition-colors`}>
        {renderIcon(item)}
      </div>
      <span className="text-white text-sm text-center">{item.name}</span>
    </div>
  );
};

export default FolderItem;