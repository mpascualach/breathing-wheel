import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function BreathingWheel() {
    const [phase, setPhase] = useState('IN');
    const { totalTime, percentIncrement } = getPhaseInterval(phase);
    const [timeElapsed, setTimeElapsed] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeElapsed((prevTime) => prevTime + 100);
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const phaseInterval = getPhaseInterval(phase);
    
        const timeoutId = setTimeout(() => {
          const nextPhase = getNextPhase(phase);
          setPhase(nextPhase);
          setTimeElapsed(0);
        }, phaseInterval);
    
        return () => clearTimeout(timeoutId);
      }, [phase]);

    function getNextPhase(currentPhase) {
        switch(currentPhase) {
            case 'IN':
                return 'HOLD';
            case 'HOLD':
                return 'OUT';
            case 'OUT':
                return 'IN';
            default:
                return currentPhase;
        }
    }

    function getPhaseInterval(currentPhase) {
        switch(currentPhase) {
            case 'IN':
                return { totalTime: 4000, percentIncrement: 0.0526 } ;
            case 'HOLD':
                return { totalTime: 7000, percentIncrement: 0.0143 };
            case 'OUT':
                return { totalTime: 8000, percentIncrement: 0.0071 };
            default:
                return { totalTime: 0, percentIncrement: 0 };
        }
    }

    const progress = (timeElapsed / totalTime) * 100;

    return (
        <div className="breathing-wheel">
            <div className="progress-wrapper">
                <ProgressBar
                    now={progress}
                    label={`${progress.toFixed(0)}%`}
                />
            </div>
            
            <div className="phase-wrapper">
                <h1>{phase}</h1>     
            </div>
        </div>
    );
}

export default BreathingWheel;