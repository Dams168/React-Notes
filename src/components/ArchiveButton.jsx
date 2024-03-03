import React from 'react';
 
function ArchiveButton({ id, isArchive, onArchive }) {
  return (
    <button className='note-item__archive-button' onClick={() => onArchive(id)}>
      {isArchive ? 'Pindahkan' : 'Arsipkan'}
    </button>
  );
}
 
export default ArchiveButton;