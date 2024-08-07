import React from 'react';
import 'react-mde/lib/styles/css/react-mde-all.css';
import Sidebar from './components/Sidebar';
import Editor from './components/Editor';
// import { data } from './data';
import Split from 'react-split';
import { nanoid } from 'nanoid';


export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem('notes')) || []
  );
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0]?.id) || ''
  );

  const currentNote = notes.find(note => note.id === currentNoteId) || notes[0]

  React.useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  function updateNote(text) {
    //Put the most-recently modified note at the top
    setNotes((oldNotes) => {
      const updatedNote = oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text }
          : oldNote;
      });
      const currentNote = updatedNote.find((note) => note.id === currentNoteId);
      const filteredNotes = updatedNote.filter(
        (note) => note.id !== currentNoteId
      );
      return [currentNote, ...filteredNotes];
    });
  }

  function deleteNote(event, noteId) {
    event.stopPropagation();
    setNotes(prevNotes => prevNotes.filter(note => note.id !== noteId))
    console.log(notes)
  }


  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          {currentNoteId && notes.length > 0 && (
            <Editor currentNote={currentNote} updateNote={updateNote} />
          )}
        </Split>
      ) : (
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button className="first-note" onClick={createNewNote}>
            Create one now
          </button>
        </div>
      )}
    </main>
  );
}
