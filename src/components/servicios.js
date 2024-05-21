import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Servicios() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" sx={{padding: '30px'}}>
                <Box sx={{
                    display: 'grid', gridTemplateColumns: '1fr', justifyContent: 'center',
                    alignItems: 'center', padding: '30px'
                }}>
                    <Typography
                        sx={{
                            fontSize: "35px",
                            fontWeight: "800",
                            marginBottom: "20px",
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}
                    >
                        Servicios que proporcionamos
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={5} marginBottom={3}>
                            <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px' }}>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: "800",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Audiometria clinica
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Nuestra audiometría clínica es una evaluación exhaustiva de la audición de un paciente, que nos permite identificar y tratar problemas de audición con precisión y eficacia.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={12} sm={5} marginBottom={3}>
                        <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px' }}>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: "800",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Impedanciometría
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Nuestra audiometría clínica es una evaluación exhaustiva de la audición de un paciente, que nos permite identificar y tratar problemas de audición con precisión y eficacia.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={5} marginBottom={3}>
                        <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px' }}>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: "800",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Tamizaje Auditivo neonatal y escolar
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Nuestra audiometría clínica es una evaluación exhaustiva de la audición de un paciente, que nos permite identificar y tratar problemas de audición con precisión y eficacia.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={12} sm={5} marginBottom={3}>
                        <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px' }}>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: "800",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Venta de audífonos
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Nuestra audiometría clínica es una evaluación exhaustiva de la audición de un paciente, que nos permite identificar y tratar problemas de audición con precisión y eficacia.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={5} marginBottom={3}>
                        <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px' }}>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: "800",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Protectores de ruido
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Nuestra audiometría clínica es una evaluación exhaustiva de la audición de un paciente, que nos permite identificar y tratar problemas de audición con precisión y eficacia.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={12} sm={5} marginBottom={3}>
                        <Box sx={{ bgcolor: '#e8e9ed', borderRadius: '12px', padding: '15px' }}>
                                <Typography sx={{
                                    fontSize: "20px",
                                    fontWeight: "800",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Se reciben recetas de CCSS
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    textAlign: 'left',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Nuestra audiometría clínica es una evaluación exhaustiva de la audición de un paciente, que nos permite identificar y tratar problemas de audición con precisión y eficacia.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}