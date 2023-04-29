import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'react-bootstrap';

function BreathingWheel() {
    const [phase, setPhase] = useState('IN');
    const [timeRemaining, setTimeRemaining] = useState(getPhaseInterval(phase));

    useEffect(() => {
        const phaseInterval = getPhaseInterval(phase);

        const timeoutId = setTimeout(() => {
            const nextPhase = getNextPhase(phase);
            setPhase(nextPhase);
            setTimeRemaining(nextPhase);
        }, phaseInterval);

        const intervalId = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => {
                const newTimeRemaining = prevTimeRemaining - 1000;
                if (newTimeRemaining < 0) {
                    clearTimeout(timeoutId);
                    clearInterval(intervalId);
                    return 0;
                }
            })
        }, 1000)

        return () => clearTimeout(timeoutId);
    }, [phase])

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
                return 4000;
            case 'HOLD':
                return 7000;
            case 'OUT':
                return 8000;
            default:
                return 0;
        }
    }

    const progress = ((getPhaseInterval(phase) - timeRemaining) / getPhaseInterval(phase)) * 100;

    return (
        <div style={{ position: 'relative'}}>
            <ProgressBar
                now={progress}
                min={0}
                max={100}
            />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <h1>{phase}</h1>   
                <p>{progress}</p>        
            </div>
        </div>
    );
}

export default BreathingWheel;