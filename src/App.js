import React, { useState } from 'react';
import Header from './components/Header';
import CreateArea from './components/CreateArea';
import Note from './components/Note';

const App = () => {
    const [notes, setNotes] = useState([]);
    function addNotes(newNote) {
        setNotes((prevNotes) => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes((prevNotes) => {
            return prevNotes.filter((_, index) => {
                return index !== id;
            });
        });
    }
    return (
        <div>
            <Header />
            <CreateArea onAdd={addNotes} />
            {notes.map((note, i) => (
                <Note
                    title={note.title}
                    content={notes.content}
                    id={i}
                    key={i}
                    onDelete={deleteNote}
                />
            ))}
        </div>
    );
};

export default App;
