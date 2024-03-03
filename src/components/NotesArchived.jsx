import React from "react";
import NotesItem from "./NotesItem";

function NotesArchived({ notes, onDelete, onArchive }) {
    return (
        <div className='notes-list'>
            {notes.length === 0 ? (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            ) : (
                notes.map((note) => (
                    <NotesItem {...note} key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchive={note.archived}/>
                ))
            )}
        </div>
    );
}

export default NotesArchived;