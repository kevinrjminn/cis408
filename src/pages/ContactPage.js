import React from 'react';
import styles from '../styles/ContactPage.module.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactPage = () => {
    return (
        <div className={styles.contactPage}>
            <Container maxWidth="md">
                <div className={styles.titleContainer}>
                    <h1 className={styles.title}>Contact Us</h1>
                </div>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <div className={styles.contactInfo}>
                            <h3>Contact Information</h3>
                            <p>Name: Kevin Minn</p>
                            <p>Email: kevin.rj.minn@outlook.com</p>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={styles.contactForm}>
                            <h3>Get in Touch</h3>
                            <form>
                                <TextField
                                    fullWidth
                                    label="Name"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    label="Email"
                                    variant="outlined"
                                    margin="normal"
                                />
                                <TextField
                                    fullWidth
                                    label="Message"
                                    variant="outlined"
                                    margin="normal"
                                    multiline
                                    rows={4}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    className={styles.submitButton}
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ContactPage;
