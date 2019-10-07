import React from 'react';

import Note from './Note';

const NotesList = props => {
    const { 
        notes,
        deleteNote 
    } = props;

    return (
        <div 
            className="list" 
            style={{marginTop: "2.5em", marginBottom: "2.5em"}}
        >{
            notes.map(note => {
                return (
                    <Note 
                        key={note.id} 
                        id={note.id}
                        deleteNote={deleteNote}
                    >
                        {note.value}
                    </Note>
                );
            })
        }
        </div>
    );
}

export default NotesList;