import React from 'react';

const NoteTakingForm = props => {
    const { 
        value, 
        handleChange, 
        addNote 
    } = props;

    return (
        <form onSubmit={addNote} style={{marginTop: "2.5em"}}>
            <div className="control">
                <input 
                    className="input"
                    type="text" 
                    value={value} 
                    placeholder="Add note..."
                    onChange={handleChange}
                    required
                    maxLength="25"
                />
            </div>
            <div>
                <button 
                    type="submit"
                    className="button is-fullwidth is-success"
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export default NoteTakingForm;