import { Delete } from '@material-ui/icons';
import React from 'react';

const Note = ({ title, content, id, onDelete }) => {
    function handleClick() {
        onDelete(id);
    }
    return (
        <div className='note'>
            <h1>{title}</h1>
            <p>{content}</p>
            <button onClick={handleClick}>
                <Delete />
            </button>
        </div>
    );
};

export default Note;
