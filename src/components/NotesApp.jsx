import React from "react";
import NotesList from "./NotesList";
import Header from './Header';
import { getInitialData } from "../utils";
import NotesInput from "./NotesInput";
import NotesArchived from "./NotesArchived";
import autoBind from 'auto-bind';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
        autoBind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toLocaleDateString(),
                        archived: false,
                    }
                ]
            }
        });
    }

    onArchiveHandler(id) {
        this.setState((prevState) => {
            return {
                notes: prevState.notes.map((note) => {
                    if (note.id === id) {
                        note.archived = !note.archived;
                    }
                    return note;
                })
            };
        });
    }

    onSearchNoteHandler(valueInput) {
      const query = valueInput.toLowerCase();
      const { notes } = this.state;
  
      const filteredNotes = notes.filter(note => {
          const title = note.title.toLowerCase();
          const body = note.body.toLowerCase();
          
          return title.includes(query) || body.includes(query);
      });
  
      this.setState({
          filteredNotes: filteredNotes,
      });
  }

    render() {
      const { notes, filteredNotes } = this.state;
      const activeNotes = (filteredNotes && filteredNotes.length > 0) ? filteredNotes.filter(note => !note.archived) : notes.filter(note => !note.archived);
      const archiveNotes = (filteredNotes && filteredNotes.length > 0) ? filteredNotes.filter(note => note.archived) : notes.filter(note => note.archived);

        return (
            <div>
                <Header onSearch={this.onSearchNoteHandler} />
                <div className="note-app__body">
                    <NotesInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Arsipkan</h2>
                    <NotesArchived notes={archiveNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} isArchive />
                </div>
            </div>
        );
    }
}

export default NotesApp;
