import React, { useState } from 'react';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
import { isContentEditable } from '@testing-library/user-event/dist/utils';

const CreateArea = ({ onAdd }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setNote((prevNote) => {
            return {
                ...prevNote,
                [name]: value,
            };
        });
    }

    function expand() {
        setIsExpanded(true);
    }

    function submitNote(e) {
        onAdd(note);
        setNote({
            title: '',
            content: '',
        });
    }
    return (
        <div>
            <form className='create-note'>
                {isExpanded && (
                    <input
                        type='text'
                        name='title'
                        placeholder='title'
                        onChange={handleChange}
                        value={note.title}
                    />
                )}
                <textarea
                    name='content'
                    placeholder='take a note...'
                    rows={isExpanded ? 3 : 1}
                    onClick={expand}
                    onChange={handleChange}
                    value={note.content}
                ></textarea>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon></AddIcon>
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
};

export default CreateArea;
