import React from 'react';
import './App.css';

import Start from './Start.js'
import BreathingWheel from './BreathingWheel/BreathingWheel.js';

function App() {
    return (
        <div className="App d-flex justify-content-center align-items-center">
            <BreathingWheel/>
        </div>
    );
}

export default App;