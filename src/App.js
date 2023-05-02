import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import { Container, Typography } from '@mui/material';
import GreenProgressBar from './components/GreenProgressBar';
import DrawerAppBar from './components/NavBar';
import DataTable from './components/DataTable';
import SearchDates from './components/SearchDates';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeamInfoPage from './pages/TeamInfoPage';

function App() {
    const startDate = '2023-04-05';

    return (
        <Router>
            <div className="App">
                <DrawerAppBar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/team" element={<TeamInfoPage />} /> {/* Add this route */}
                        <Route
                            path="/dashboard"
                            element={
                                <>
                                    <Dashboard />

                                    <Container>

                                        <center><br></br><h3>Data Table</h3>
                                        <SearchDates></SearchDates><DataTable></DataTable></center>
                                        <Typography variant="h5" align="center" gutterBottom>
                                            Harvest progress
                                        </Typography>
                                        <GreenProgressBar startDate={startDate} />
                                        <Typography variant="h6" align="center" gutterBottom>
                                        </Typography>
                                    </Container>
                                </>
                            }
                        />
                        {

                        }
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
