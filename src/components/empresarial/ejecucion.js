import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';

export default function Ejecucion() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ padding: '30px' }}>
                <Box sx={{
                    display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center',
                    alignItems: 'center', padding: '30px'
                }}>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '25px',
                                sm: '30px',
                                md: '35px',
                            },
                            fontWeight: "800",
                            marginBottom: "20px",
                            fontFamily: 'Futura',
                            color: '#003153',
                            textAlign: 'center',
                        }}
                    >
                        EJECUCIÓN
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '20px',
                                sm: '25px',
                                md: '30px',
                            },
                            fontWeight: "400",
                            marginBottom: "20px",
                            fontFamily: 'Futura',
                            color: '#003153',
                            textAlign: 'center',
                        }}
                    >
                        Salud auditiva laboral integral
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={5} marginBottom={3}>
                            <Box sx={{
                                bgcolor: '#e8e9ed',
                                borderRadius: '12px',
                                padding: '15px',
                                display: 'flex', // Enable flexbox
                                justifyContent: 'center', // Center content horizontally
                            }}>
                                <VolunteerActivismOutlinedIcon sx={{
                                    width: '10vw', // Adjust as needed
                                    height: '10vw', // Adjust as needed
                                }} />
                                <Typography sx={{
                                    fontSize: {
                                        xs: '15px',
                                        sm: '20px',
                                        md: '25px',
                                    }, textAlign: 'center',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Seguimiento de un equipo
                                    médico interdisciplinario
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={12} sm={5}>
                            <Box sx={{
                                bgcolor: '#e8e9ed',
                                borderRadius: '12px',
                                padding: '15px',
                                display: 'flex', // Enable flexbox
                                justifyContent: 'center', // Center content horizontally
                            }}>
                                <HeadsetOutlinedIcon sx={{
                                    width: '10vw', // Adjust as needed
                                    height: '10vw', // Adjust as needed
                                }} />
                                <Typography sx={{
                                    fontSize: {
                                        xs: '15px',
                                        sm: '20px',
                                        md: '25px',
                                    }, textAlign: 'center',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Venta de protectores auditivos estandar y hechos a la medida
                                </Typography>
                            </Box>
                        </Grid>

                    </Grid>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '20px',
                                sm: '25px',
                                md: '30px',
                            }, fontWeight: "400",
                            marginBottom: "20px",
                            fontFamily: 'Futura',
                            color: '#003153',
                            textAlign: 'center',
                        }}
                    >
                        Se trabaja en exponer en todo momento el pilar del
                        programa a los colaboradores:
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: {
                                xs: '20px',
                                sm: '25px',
                                md: '30px',
                            }, fontWeight: "800",
                            marginBottom: "20px",
                            fontFamily: 'Futura',
                            color: '#003153',
                            textAlign: 'center',
                        }}
                    >
                        Promover la Salud Auditiva
                    </Typography>
                </Box>
            </Container>
        </React.Fragment>
    );
}