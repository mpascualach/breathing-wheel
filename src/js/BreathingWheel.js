import React, { useState, useEffect } from 'react';
import '../sass/BreathingWheel.scss'

function BreathingWheel() {
    const [breathingPhases, setBreathingPhases] = useState([
        {
          name: 'inhale',
          duration: 4,
          className: 'inhale-phase'
        },
        {
          name: 'hold',
          duration: 7,
          className: 'hold-phase'
        },
        {
          name: 'exhale',
          duration: 8,
          className: 'exhale-phase'
        }
    ]);

    const [currentPhase, setCurrentPhase] = useState(
        parseInt(localStorage.getItem('currentPhase'))|| 0
    );

    useEffect(() => {
        setCurrentPhase(0);
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentPhase((currentPhase + 1) % breathingPhases.length);
        }, breathingPhases[currentPhase].duration * 1000);
        return () => clearInterval(interval);
      }, 
    [currentPhase, breathingPhases]);

    useEffect(() => {
        localStorage.setItem('currentPhase', currentPhase);
    }, [currentPhase]);

    const getPhaseLabel = () => {
        return breathingPhases[currentPhase].name;
    };

    const text = currentPhase.label;

    return (
        <div className="circle">
            <div className={`dot ${breathingPhases[currentPhase].className}`}/>
            <div className="text">{getPhaseLabel()}</div>
        </div>
    );
}

export default BreathingWheel;