import React from 'react';

const Note = props => {
    const { children } = props;

    return (
        <span 
            className="list-item"
        >
            {children}
        </span>
    );
}

export default Note;