import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete, onArchive }){
    return (
        <div className="notes-list">
          {notes.length === 0 ? (
            <p className="notes-list__empty-message">Tidak Ada Catatan Aktif</p>
          ) : (notes.map((note) => (
              <NotesItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} {...note} />
            ))
          )}  

          
        </div>
      );
}

export default NotesList;