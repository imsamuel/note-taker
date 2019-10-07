import React from 'react';

import Note from './Note';

const NotesList = props => {
    const { notes } = props;

    return (
        <div className="list" style={{marginTop: "2.5em", marginBottom: "2.5em"}}>{
            notes.map(note => <Note key={note.id}>{note.value}</Note>)
        }</div>
    );
}

export default NotesList;