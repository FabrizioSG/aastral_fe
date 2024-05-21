import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';

export default function Productos() {
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
                            fontSize: "30px",
                            fontWeight: "800",
                            fontFamily: 'Futura',
                            color: '#003153'
                        }}
                    >
                        Ofrecemos una amplia variedad de audifonos para tus necesidades
                    </Typography>
                    <Grid container>
                        <Grid item xs={4} padding={1}>
                            <Box sx={{padding: '15px', bgcolor: 'white', height: '300px'}}>
                                <Typography>
                                    Audifono 1
                                </Typography>
                            </Box>
                            </Grid>
                            <Grid item xs={4} padding={1}>
                            <Box sx={{padding: '15px', bgcolor: 'white', height: '300px' }}>
                                <Typography>
                                    Audifono 2
                                </Typography>
                            </Box>
                            </Grid>
                            <Grid item xs={4} padding={1}>
                            <Box sx={{padding: '15px', bgcolor: 'white', height: '300px'}}>
                                <Typography>
                                    Audifono 3
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
                    >
                        Ver todas las opciones
                    </Button>

                </Box>
            </Container>
        </React.Fragment>
    );
}