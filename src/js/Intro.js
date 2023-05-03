import React, { useEffect, useState } from 'react';
import '../sass/Intro.scss';
import BreathingInstructions from './BreathingInstructions';

const Intro = ({ imgName, onTextVisible, onTextClick, onFadeOutComplete }) => {
    const [isImageLoaded, setImageToLoaded] = useState(false);
    const [isTextVisible, setTextVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    const imagePath = '/images/' + imgName;

    const bell = process.env.PUBLIC_URL + '/bell.mp3';

    useEffect(() => {
        const img = new Image();
        img.src = imagePath;
        img.onload = () => {
            setImageToLoaded(true);
            setTimeout(() => {
                setTextVisible(true);
                onTextVisible();
            }, 2000);
        }
    }, [imgName, onTextVisible]);

    useEffect(() => {
        const fadeOutTimeout = setTimeout(() => {
            setFadeOut(true);
        }, 2000); // Delay before fade-out starts (adjust as needed)

        return () => {
        clearTimeout(fadeOutTimeout);
        };
    }, []);

    const handleTransitionEnd = () => {
        if (fadeOut) {
          onFadeOutComplete();
        }
    };

    const imageClass = isImageLoaded ? 'fade-in' : 'fade-out';
    const textClass = isTextVisible ? 'fade-in' : '';

    const handleClick = () => {
        onTextClick();
    }

    return (
        <div className={`full-screen-image
                ${imageClass}` }
                onTransitionEnd={handleTransitionEnd}>
            <img src={imagePath} alt="Full screen" />
            <div className={`centered-text ${textClass}`} onClick={handleClick}>
                <h1>Start Breathing</h1>
            </div>
        </div>
    );
};

export default Intro;

