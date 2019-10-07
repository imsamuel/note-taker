import React from 'react';

const NoteTakingForm = props => {
    const { 
        value, 
        handleChange, 
        handleSubmit 
    } = props;

    return (
        <form onSubmit={handleSubmit} style={{marginTop: "2.5em"}}>
            <div className="control">
                <input 
                    className="input"
                    type="text" 
                    value={value} 
                    placeholder="Enter note..."
                    onChange={handleChange}
                    required
                    maxLength="22"
                />
            </div>
            <div>
                <button 
                    type="submit"
                    className="button is-fullwidth is-success"
                >
                    Add To Notes
                </button>
            </div>
        </form>
    );
}

export default NoteTakingForm;