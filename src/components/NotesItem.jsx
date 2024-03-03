import React from "react";
import NotesItemBody from "./NotesItemBody";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NotesItem({id, onDelete, title, body, createdAt, onArchive, isArchive}){
    return(
        <div className="note-item">
            <div className="note-item__content">
                <NotesItemBody title={title} createdAt={showFormattedDate(createdAt)} body={body}/>
            </div>
            <div className="note-item__action">                    
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} onArchive={onArchive} isArchive={isArchive}/>
            </div>
        </div>
    )
}

export default NotesItem;