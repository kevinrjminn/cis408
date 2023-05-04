import React, { useEffect, useState } from 'react';
import { Alert, AlertTitle } from '@mui/material';

const Alerts = ({ latestData }) => { // Add the latestData prop here
    const [alerts, setAlerts] = useState([]);

    useEffect(() => {
        if (latestData) {
            checkForAlerts(latestData);
        }
    }, [latestData]);

    const checkForAlerts = (sensorData) => {
        const newAlerts = [];

        if (sensorData.temperature > 50) {
            newAlerts.push({ type: 'warning', message: 'Temperature is too high.' });
        }

        if (sensorData.humidity < 80) {
            newAlerts.push({ type: 'warning', message: 'Humidity is too low.' });
        }

        setAlerts(newAlerts);
    };

    return (
        <>
            {alerts.map((alert, index) => (
                <Alert key={index} severity={alert.type}>
                    <AlertTitle>{alert.type.toUpperCase()}</AlertTitle>
                    {alert.message}
                </Alert>
            ))}
        </>
    );
};

export default Alerts;
