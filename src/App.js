import React, { useState, useEffect } from 'react';

const batteryStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  fontFamily: 'sans-serif'
};

const batteryLevelStyles = {
  fontSize: '3em',
  color: '#333'
};

const BatteryStatus = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(battery => {
        setBatteryLevel(battery.level);

        battery.addEventListener('levelchange', () => {
          setBatteryLevel(battery.level);
        });
      });
    }
  }, []);

  return (
    <div style={batteryStyles}>
      <h1 style={batteryLevelStyles}>🔋: {batteryLevel ? (batteryLevel * 100).toFixed(2) + '%' : 'Loading...'}</h1>
    </div>
  );
};

export default BatteryStatus;
