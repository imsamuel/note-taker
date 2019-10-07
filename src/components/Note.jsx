import React from 'react';

const Note = props => {
    const { 
        id,
        children,
        deleteNote 
    } = props;

    return (
        <span 
            className="list-item"
        >
            {children}
            <a>
            <span 
                class="icon is-small has-text-danger" 
                style={{float: "right", marginTop: "0.3em"}}
                onClick={() => deleteNote(id)}
            >
                <i class="fas fa-times-circle"></i>
            </span>
            </a>
        </span>
    );
}

export default Note;