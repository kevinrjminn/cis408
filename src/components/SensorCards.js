import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label } from 'recharts';

const SensorCards = ({ sensorData }) => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Humidity</Typography>
                        <ResponsiveContainer width="100%" height={200} style={{backgroundColor: 'lightgreen'}}>
                            <LineChart data={sensorData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc"/>
                                <XAxis dataKey="timestamp" stroke="#666">
                                    <Label value="Time" position="insideBottom" offset={-5}/>
                                </XAxis>
                                <YAxis stroke="#666">
                                    <Label value="%" position="insideLeft" angle={-90}/>
                                </YAxis>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="humidity" stroke="#82ca9d"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">pH Level</Typography>
                        <ResponsiveContainer width="100%" height={200} style={{backgroundColor: 'red'}}>
                            <LineChart data={sensorData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc"/>
                                <XAxis dataKey="timestamp" stroke="#666">
                                    <Label value="Time" position="insideBottom" offset={-5}/>
                                </XAxis>
                                <YAxis stroke="#666">
                                    <Label value="pH" position="insideLeft" angle={-90}/>
                                </YAxis>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="pH" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Nutrient Level</Typography>
                        <ResponsiveContainer width="100%" height={200} style={{backgroundColor: 'lightgreen'}}>
                            <LineChart data={sensorData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc"/>
                                <XAxis dataKey="timestamp" stroke="#666">
                                    <Label value="Time" position="insideBottom" offset={-5}/>
                                </XAxis>
                                <YAxis stroke="#666">
                                    <Label value="PPM" position="insideLeft" angle={-90}/>
                                </YAxis>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="nutrientLevel" stroke="#FF8042"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6">Temperature</Typography>
                        <ResponsiveContainer width="100%" height={200} style={{backgroundColor: 'red'}}>
                            <LineChart data={sensorData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#ccc"/>
                                <XAxis dataKey="timestamp" stroke="#666">
                                    <Label value="Time" position="insideBottom" offset={-5}/>
                                </XAxis>
                                <YAxis stroke="#666">
                                    <Label value="temperature" position="insideLeft" angle={-90}/>
                                </YAxis>
                                <Tooltip/>
                                <Legend/>
                                <Line type="monotone" dataKey="temperature" stroke="#8884d8"/>
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default SensorCards;