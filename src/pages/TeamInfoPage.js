import React from "react";
import styles from "../styles/TeamInfo.module.css";
import Container from "@mui/material/Container";
import { Grid, Paper, Typography } from "@mui/material";

const TeamInfo = () => {
    return (
        <div className={styles.teamInfo}>
            <Container maxWidth="md">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Our Team</h1>
                    <h2 className={styles.subtitle}>
                        Meet the talented individuals behind our project
                    </h2>
                </div>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Paper className={styles.paper}>
                            <div className={styles.avatarContainer}>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="avatar"
                                    className={styles.avatar}
                                />
                            </div>
                            <Typography variant="h5" className={styles.name}>
                                John Doe
                            </Typography>
                            <Typography variant="h6" className={styles.position}>
                                Mechanical Engineer
                            </Typography>
                            <Typography className={styles.description}>
                                John is a mechanical engineer who specializes in designing and
                                building complex systems. He brings a wealth of experience and
                                knowledge to our team and is an integral part of our project's
                                success.
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Paper className={styles.paper}>
                            <div className={styles.avatarContainer}>
                                <img
                                    src="https://via.placeholder.com/150"
                                    alt="avatar"
                                    className={styles.avatar}
                                />
                            </div>
                            <Typography variant="h5" className={styles.name}>
                                Jane Smith
                            </Typography>
                            <Typography variant="h6" className={styles.position}>
                                Electrical Engineer
                            </Typography>
                            <Typography className={styles.description}>
                                Jane is an electrical engineer who specializes in designing and
                                optimizing electrical systems. She is a crucial member of our
                                team and has contributed significantly to our project's
                                development.
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default TeamInfo;
