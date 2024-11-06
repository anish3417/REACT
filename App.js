// App.js
import React from 'react';
import DigitalClock from './Clock';

const App = () => {
    return (
        <div style={{ marginTop: '20px' }}>
            <h1 style={{ textAlign: 'center' }}>Digital Clock</h1>
            <DigitalClock />
        </div>
    );
};

export default App;
