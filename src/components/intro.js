import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

export default function SimpleContainer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/empresarial'); // Redirect to /empresarial route
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{ bgcolor: '#e8e9ed', padding: '30px' }}>
                <Box sx={{
                    display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center',
                    alignItems: 'center', paddingRight: '100px', paddingLeft: '100px', paddingTop: '20px'
                }}>
                    <Typography
                        sx={{
                            fontSize: "50px",
                            fontWeight: "800",
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}
                    >
                        Bienvenido a HearSafe
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "17px",
                            fontWeight: "500",
                            marginBottom: "50px",
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}
                    >
                        Somos una clínica líder en audiología que ofrece servicios integrales de audición y equilibrio. Nuestro equipo de audiólogos altamente capacitados proporciona soluciones personalizadas para satisfacer sus necesidades únicas. Estamos comprometidos a mejorar su calidad de vida mejorando sus habilidades auditivas y de comunicación.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "40px",
                            fontWeight: "800",
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}
                    >
                        Ofrecemos planes empresariales a su medida
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "20px",
                            fontWeight: "800",
                            fontFamily: 'Futura',
                            color: '#003153',
                            marginBottom: "40px"
                        }}
                    >
                        Empresas de distintos sectores industriales
                        que han confiado en nuestro programa
                    </Typography>
                    <Grid container sx={{
                        flexDirection: { xs: 'column', sm: 'row' },
                    }}>
                        <Grid item xs={12} sm={3} margin={1}>
                            <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px', border: '2px solid #003153' }}>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '12px',
                                        sm: '16px',
                                        md: '20px',
                                    },
                                    fontWeight: "800",
                                    textAlign: 'center',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Industria médica
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={2} margin={1}>
                            <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px', border: '2px solid #003153' }}>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '12px',
                                        sm: '16px',
                                        md: '20px',
                                    },
                                    fontWeight: "800",
                                    textAlign: 'center',
                                    fontFamily: 'Futura',
                                    color: '#003153',
                                    textOverflow: 'ellipsis'
                                }}>
                                    Construcción
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} margin={1}>
                            <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px', border: '2px solid #003153' }}>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '12px',
                                        sm: '16px',
                                        md: '20px',
                                    }, fontWeight: "800",
                                    textAlign: 'center',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Industria alimentaria
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={3} margin={1}>
                            <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px', border: '2px solid #003153' }}>
                                <Typography sx={{
                                    fontSize: {
                                        xs: '12px',
                                        sm: '14px',
                                        md: '20px',
                                    }, fontWeight: "800",
                                    textAlign: 'center',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Industria agricola
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Button variant="contained"
                        sx={{
                            bgcolor: "#E9BD15", borderRadius: "6px",
                            height: "50px", // Set desired height
                            width: "350px",  // Set desired width
                            justifySelf: 'center', // Center the button horizontally
                            marginTop: '30px',
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}
                        onClick={handleClick}
                    >
                        APRENDE MÁS SOBRE NUESTROS PLANES
                    </Button>

                </Box>
            </Container>
        </React.Fragment>
    );
}