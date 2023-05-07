import React from 'react';
import Container from '@mui/material/Container';
import styles from '../styles/HomePage.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Container maxWidth="md">
                <div className={styles.footerContent}>
                    <nav className={styles.footerNav}>
                        <a href="#contact">Contact</a>
                    </nav>
                </div>
            </Container>
        </div>
    );
};

export default Footer;
