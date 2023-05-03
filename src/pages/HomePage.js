import React from "react";
import styles from "../styles/HomePage.module.css";
import Container from "@mui/material/Container";

const HomePage = () => {
    return (
        <div className={styles.homePage}>
            <Container maxWidth="md">
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>Hydroponic System</h3>
                    <div className={styles.videoContainer}>
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/6udSInwofSU?start=10&end=300&autoplay=1&loop=1&playlist=6udSInwofSU&mute=1&playsinline=1?controls=0&modestbranding=1&iv_load_policy=3"
                            title="video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            playsInline
                        ></iframe>

                    </div>
                    <h2 className={styles.subtitle}>Grow plants efficiently</h2>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>About Our Project</h2>
                        <p className={styles.description}>
                            Cleveland State University's 2022-2023 Senior Design Project, proudly sponsored by Rockwell Automation and Fork Farms, showcases the collaborative efforts of students from various engineering departments. This interdisciplinary initiative brings together students from Mechanical Engineering, Electrical and Computer Engineering, and Computer Science departments, working hand in hand to achieve a common goal. The project's successful completion is the result of the combined efforts of six dedicated students, two representatives from each department, who embody the spirit of collaboration and the pursuit of excellence that defines Cleveland State University's engineering programs.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HomePage;
