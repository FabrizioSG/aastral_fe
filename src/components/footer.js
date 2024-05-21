import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Divider from '@mui/material/Divider';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export default function Footer() {
    return (
        <Container>
            <Grid container>
                <Grid item xs={8}>
                    <Box sx={{ marginBottom: '20px', marginTop: '20px' }}>
                        <Typography sx={{
                            fontSize: {
                                xs: '12px',
                                sm: '16px',
                                md: '20px',
                            }, fontWeight: "800",
                            textAlign: 'left',
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}>
                            Siguenos en nuestras redes sociales
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} sx={{ marginBottom: '20px', marginTop: '20px' }}>
                    <Grid container>
                        <Grid item xs={3}>
                            <Box>
                                <Typography>
                                    <a href="https://www.facebook.com/">
                                        <FacebookIcon />
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <Typography>
                                    <a href="https://www.linkedin.com">
                                        <LinkedInIcon />
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <Typography>
                                    <a href="https://www.instagram.com">
                                        <InstagramIcon />
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={3}>
                            <Box>
                                <Typography>
                                    <a href="https://www.x.com">
                                        <XIcon />
                                    </a>
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item xs={4}>
                    Logo
                </Grid>
                <Grid item xs={4}>
                    Links
                </Grid>
                <Grid item xs={4}>
                    <Typography sx={{
                        fontSize: {
                            xs: '8px',
                            sm: '12px',
                            md: '16px',
                        },
                        textAlign: 'left',
                        fontFamily: 'Futura',
                        color: '#003153',
                        margin: '10px'
                    }}>                        <HomeIcon />
                        Mediplaza. Diagonal a Silvania Zona Industrias Pavas Oeste, Costa Rica.
                    </Typography>
                    <Typography sx={{
                        fontSize: {
                            xs: '8px',
                            sm: '12px',
                            md: '16px',
                        },
                        textAlign: 'left',
                        fontFamily: 'Futura',
                        color: '#003153',
                        margin: '10px'
                    }}>                        <EmailIcon />
                        info@hearsafelatam.com
                    </Typography>
                    <Typography sx={{
                        fontSize: {
                            xs: '8px',
                            sm: '12px',
                            md: '16px',
                        },
                        textAlign: 'left',
                        fontFamily: 'Futura',
                        color: '#003153',
                        margin: '10px'
                    }}>                        <LocalPhoneIcon />
                        +506 84064852
                    </Typography>
                    <Typography sx={{
                        fontSize: {
                            xs: '8px',
                            sm: '12px',
                            md: '16px',
                        },
                        textAlign: 'left',
                        fontFamily: 'Futura',
                        color: '#003153',
                        margin: '10px'
                    }}>                        <LocalPhoneIcon />
                        +506 89629770
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}