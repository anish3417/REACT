// Clock.js
import React, { useState, useEffect } from 'react';
import './App.css';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="clock-container">
            <h1>Digital Clock</h1>
            <div className="clock-time">{time.toLocaleTimeString()}</div>
            <div className="clock-footer">Stay on time, every second.</div>
        </div>
    );
};

export default DigitalClock;
