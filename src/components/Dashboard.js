import React, { useState, useEffect } from 'react';
import { Container, Typography, Box } from '@mui/material';
import Alerts from './Alerts';
import DataTable from './DataTable';
import SensorCards from './SensorCards';
import Sidebar from './Sidebar';
import PlantProgress from './PlantProgress';


const Dashboard = () => {
    const [sensorData, setSensorData] = useState([]);

    const fetchSensorData = async () => {
        try {
            const response = await fetch('/api/get-data');
            const result = await response.json();
            if (response.status === 200) {
                setSensorData(result.data.map(item => ({
                    timestamp: item.DateAndTime,
                    temperature: item.PLC_Temperature_Value,
                    humidity: item.PLC_Humidity_Value,
                    pH: item.PLC_pH_Value,
                    nutrientLevel: item.PLC_TDS_Value,
                })));
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };


    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchSensorData();
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <Container>
            <Sidebar />
            <Box sx={{ paddingTop:'66px',paddingLeft: '64px', display: 'flex', flexDirection: 'column', height: '100%' }}> {/* Update paddingLeft value to match drawerWidth */}
                <Typography variant="h4" align="center" gutterBottom>
                    Hydroponic Monitoring Dashboard
                </Typography>
                {sensorData.length > 0 && (
                    <Alerts latestData={sensorData[sensorData.length - 1]} />
                )}


                <SensorCards sensorData={sensorData} />
                <hr/>
                <Box mt={4} flexGrow={1}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Plant Progress
                    </Typography>
                    <PlantProgress />
                 </Box>
                <hr/>

                <Box mt={4} flexGrow={1}>
                    <DataTable />
                </Box>


            </Box>
        </Container>
    );
};

export default Dashboard;