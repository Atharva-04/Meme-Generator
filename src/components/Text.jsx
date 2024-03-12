import React, { useState } from 'react';
import Draggable from 'react-draggable';

function Text() {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState("Double click to edit");

    const inputStyle = {
        fontSize: '16px', 
        fontWeight : 'bolder',
        border: 'none', 
        padding: '5px', 
    };

    const textHeadingStyle = {
        fontSize: '24px', // Example style for heading
        fontWeight: 'bold', // Example font weight
    };

    return (
        <Draggable>
            {
                editMode ? (
                    <input
                        style={inputStyle}
                        value={val}
                        onChange={e => setVal(e.target.value)}
                    />
                ) : (
                    <h1
                        style={textHeadingStyle}
                        onDoubleClick={e => setEditMode(true)}
                    >
                        {val}
                    </h1>
                )
            }
        </Draggable>
    );
}

export default Text;
