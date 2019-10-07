import React from 'react';

const NoteTakingForm = props => {
    const { 
        value, 
        handleChange, 
        handleSubmit 
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={value} 
                placeholder="Enter note..."
                onChange={handleChange}
            />
            <button type="submit">Submit!</button>
        </form>
    );
}

export default NoteTakingForm;