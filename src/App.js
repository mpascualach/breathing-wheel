import React, { useState, useEffect, useRef } from 'react';
import './css/App.css';

//import StartComponent from './js/StartComponent';
import Intro from './js/Intro.js';
import BreathingInstructions from './js/BreathingInstructions';

function App() {
    // const sanctuary = process.env.PUBLIC_URL + '/sanctuary.mp3';
    // const audioRef = useRef(null);

    const videoUrl = process.env.PUBLIC_URL + '/exercises.mp4';

    // const bell = process.env.PUBLIC_URL + '/bell.mp3';
    // const bellSoundEffect = new Audio(bell);

    // const [startFadeOut, setStartFadeOut] = useState(false);
    // const [startedExperience, setStartedExperience] = useState(false);
    // const [isAudioPlaying, setAudioPlaying] = useState(false);
    // const [step, setStep] = useState(0);

    // useEffect(() => {
    //     if (isAudioPlaying && audioRef.current) {
    //         audioRef.current.play();
    //     }
    // }, [isAudioPlaying]);

    // useEffect(() => {
    //     return () => {
    //         if (audioRef.current) {
    //             audioRef.current.pause();
    //             audioRef.current.currentTime = 0;
    //         }
    //     }
    // }, []);

    // const handleTextVisible = () => {
    //     handleAudioToggle(true);
    // };

    // const handleAudioToggle = () => {
    //     setAudioPlaying(!setAudioPlaying);
    // }

    // const handleFadeOutComplete = () => {
    //     setStartFadeOut(true);
    //     setStartedExperience(true);
    //     setStep(0);
    //     const audio = new Audio(sanctuary);
    //     audio.play();
    // };

    // const handleSwitchComponent = () => {
    //     bellSoundEffect.play();
    //     setTimeout(() => {
    //         setStep(1);
    //     }, 1000);
    // }

    // const MainBody = (
    //     <div>
    //         <button className="music-toggle-button" onClick={handleAudioToggle}>
    //             {isAudioPlaying ? 'Stop Music' : 'Start Music'}
    //         </button>
    //         { step === 0 && (
    //             <Intro
    //                 imgName="calm-background.png"
    //                 onTextVisible={handleTextVisible}
    //                 onTextClick={handleSwitchComponent}
    //                 onFadeOutComplete={handleFadeOutComplete}/>
    //         )}
    //         { step === 1 && (
    //             <BreathingInstructions/>
    //         )}
    //     </div>
    // );

    // const firstStep = (
    //     <audio ref={audioRef} src={sanctuary} />
    //     {!startedExperience ? (
    //         <StartComponent onFadeOut={handleFadeOutComplete} />
    //     ) : MainBody
    //     }
    // );

    return (
        <div className="App d-flex justify-content-center align-items-center">
            <BreathingInstructions videoUrl={videoUrl} soundDelay={3000}/>
        </div>
    );
}

//<BreathingWheel/>

export default App;