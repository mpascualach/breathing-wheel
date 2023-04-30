import React, { useState, useEffect } from 'react';
import './BreathingWheel.css'

const CIRCLE_RADIUS = 5;
const CIRCLE_CIRCUMFERENCE = 2 * Math.PI * CIRCLE_RADIUS;

function BreathingWheel() {
    const [breathingPhase, setBreathingPhase] = useState(0);
    const [breathingSeconds, setBreathingSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBreathingSeconds((seconds) => {
                if (seconds === 0) {
                    setBreathingPhase((phase) => (phase + 1) % 3);
                }
                return (seconds + 1) % 8;
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const breathingPhases = [
        { label: "Inhale", startPosition: 0 },
        { label: "Hold", startPosition: 360 / (4 / 19) },
        { label: "Exhale", startPosition: 360 / (11 / 19) }
    ];

    const currentPhase = breathingPhases[breathingPhase];
    const dotPosition = currentPhase.startPosition + (CIRCLE_CIRCUMFERENCE * (breathingSeconds / 19)) % CIRCLE_CIRCUMFERENCE;

    const dotStyle = {
        transform: `translate(-50%, -50%) rotate(${dotPosition}deg) translateX(${CIRCLE_RADIUS}em)`,
      };

    const text = currentPhase.label;

    return (
        <div className="circle">
            <div className="dot" style={dotStyle}></div>
            <div className="text">{text}</div>
        </div>
    );
}

export default BreathingWheel;