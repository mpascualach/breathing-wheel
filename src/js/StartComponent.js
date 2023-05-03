import React, { useState } from 'react';
import '../sass/StartComponent.scss';

const StartComponent = ({ onFadeOut }) => {
    const [fadeOut, setFadeOut] = useState(false);

    const handleFadeOut = () => {
        setFadeOut(true);
        onFadeOut();
    };

    return (
        <div className={`start-component ${fadeOut ? 'fade-out' : ''}`} onClick={handleFadeOut}>
            <h1>Start</h1>
        </div>
    )
}

export default StartComponent;