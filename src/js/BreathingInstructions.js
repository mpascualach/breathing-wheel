import React, { useEffect, useRef } from 'react';
import '../sass/BreathingInstructions.scss';

const BreathingInstructions = ({ videoUrl, soundDelay }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, []);

    const handleSoundActivation = () => {
        videoRef.current.muted = false;
        videoRef.current.play();
        videoRef.current.removeEventListener('mouseover', handleSoundActivation);
    }

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.addEventListener('mouseover', handleSoundActivation);
        }

        return () => {
            if (videoRef.current) {
                videoRef.current.removeEventListener('mouseover', handleSoundActivation);
            }
        }
    }, []);

    return (
        <div className="full-screen-video">
            <video ref={videoRef} src={videoUrl} autoPlay muted playsInline loop />
        </div>
    );
};

export default BreathingInstructions;