import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ManageHistoryOutlinedIcon from '@mui/icons-material/ManageHistoryOutlined';
import Ejecucion from './ejecucion';
export default function Empresarial() {

    const handleClick = () => {
        const whatsappLink = "https://wa.me/+50684064851?text=Hola%20quiero%20solicitar%20una%20cita"; // Replace with your number
        window.location.href = whatsappLink; // Open WhatsApp chat
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
                            fontSize: {
                                xs: '30px',
                                sm: '40px',
                                md: '50px',
                            },
                                                       fontWeight: "800",
                            fontFamily: 'Futura',
                            color: '#003153',
                            textAlign: 'center',
                            marginBottom: '20px'
                        }}
                    >
                        Objetivo general de nuestro programa
                    </Typography>

                    <Grid container>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    bgcolor: '#e8e9ed',
                                    borderRadius: '12px',
                                    padding: '15px',
                                    display: 'flex',
                                    flexDirection: 'column', // Stack elements vertically
                                    alignItems: 'center', // Center horizontally
                                    justifyContent: 'center', // Center vertically (optional)
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: {
                                            xs: '12px',
                                            sm: '16px',
                                            md: '20px',
                                        },
                                        fontWeight: "800",
                                        textAlign: 'center',
                                        fontFamily: 'Futura',
                                        color: '#003153',
                                    }}
                                >
                                    Identificar
                                </Typography>
                                <SearchIcon sx={{
                                    width: '10vw', // Adjust as needed
                                    height: '10vw', // Adjust as needed
                                }} />

                            </Box>
                        </Grid>

                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    bgcolor: '#e8e9ed',
                                    borderRadius: '12px',
                                    padding: '15px',
                                    display: 'flex',
                                    flexDirection: 'column', // Stack elements vertically
                                    alignItems: 'center', // Center horizontally
                                    justifyContent: 'center', // Center vertically (optional)
                                }}
                            >
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
                                    Evaluar
                                </Typography>
                                <InventoryOutlinedIcon sx={{
                                    width: '10vw', // Adjust as needed
                                    height: '10vw', // Adjust as needed
                                }} />
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box
                                sx={{
                                    bgcolor: '#e8e9ed',
                                    borderRadius: '12px',
                                    padding: '15px',
                                    display: 'flex',
                                    flexDirection: 'column', // Stack elements vertically
                                    alignItems: 'center', // Center horizontally
                                    justifyContent: 'center', // Center vertically (optional)
                                }}
                            >
                                < Typography sx={{
                                    fontSize: {
                                        xs: '12px',
                                        sm: '16px',
                                        md: '20px',
                                    }, fontWeight: "800",
                                    textAlign: 'center',
                                    fontFamily: 'Futura',
                                    color: '#003153'
                                }}>
                                    Gestionar
                                </Typography>
                                <ManageHistoryOutlinedIcon sx={{
                                    width: '10vw', // Adjust as needed
                                    height: '10vw', // Adjust as needed
                                }} />
                            </Box>
                        </Grid>
                    </Grid>
                    <Button variant="contained"
                        sx={{
                            bgcolor: "#E9BD15", borderRadius: "6px",
                            height: "50px", // Set desired height
                            width: "300px",  // Set desired width
                            justifySelf: 'center', // Center the button horizontally
                            marginTop: '30px',
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}
                        onClick={handleClick}
                    >
                        Solicitar una cita
                    </Button>
                </Box>
            </Container>
            <Ejecucion />
        </React.Fragment >
    );
}