import React from 'react';
import FolderItem from './FolderItem';

const FolderGrid = ({ items, onItemSelect, onDragStart, onDragOver, onDrop }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {items.map((item) => (
        <FolderItem
          key={item.id}
          item={item}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onClick={onItemSelect}
        />
      ))}
    </div>
  );
};

export default FolderGrid;