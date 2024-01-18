import Head from "next/head";
import Banner from "../components/Banner";
import { Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { govtContractingData } from "../data/govtContractingData";
import CircleIcon from '@mui/icons-material/Circle';

const governmentcontracting = () => {
    return (
        <div>
            <Head>
                <title>Government Contracting - Russell&apos;s Transport</title>
            </Head>

            <Banner
                title="Government Contracting"
                image="/images/transport/Picture8.jpg"
            />

            <Box sx={{ backgroundColor: "#000000" }}>
                {/* Company Summary */}
                <Box sx={{ py: 2, px: {xs: 3, md: 16}, textAlign: 'center', color: '#FFF' }}>
                    <Typography variant="h3" fontSize={42} letterSpacing={2} color="primary" fontFamily="Passion One" textTransform="uppercase">
                        {govtContractingData[0].name}
                    </Typography>
                    
                    <List>
                        {govtContractingData[0].data.map((data) => (
                            <ListItem key={data}>
                                <ListItemText primary={data} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Core Competencies */}
                <Box sx={{ py: 2, px: {xs: 3, md: 16}, textAlign: 'center', color: '#FFF' }}>
                    <Typography variant="h3" fontSize={42} letterSpacing={2} color="primary" fontFamily="Passion One" textTransform="uppercase">
                        {govtContractingData[1].name}
                    </Typography>
                    
                    <Grid container>
                        {govtContractingData[1].data.map((data) => (
                            <Grid item xs={4}>
                                <Typography paragraph fontSize={20}>
                                    {data}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Differentiators */}
                <Box sx={{ py: 2, px: {xs: 3, md: 16}, textAlign: 'center', color: '#FFF' }}>
                    <Typography variant="h3" fontSize={42} letterSpacing={2} color="primary" fontFamily="Passion One" textTransform="uppercase">
                        {govtContractingData[2].name}
                    </Typography>
                    
                    <List>
                        {govtContractingData[2].data.map((data) => (
                            <ListItem key={data}>
                                <ListItemAvatar>
                                    <CircleIcon sx={{ width: 12 }} />
                                </ListItemAvatar>

                                <ListItemText primary={data} />
                            </ListItem>
                        ))}
                    </List>
                </Box>

                {/* Past Performance */}
                <Box sx={{ py: 2, px: {xs: 3, md: 16}, textAlign: 'center', color: '#FFF' }}>
                    <Typography variant="h3" fontSize={42} letterSpacing={2} color="primary" fontFamily="Passion One" textTransform="uppercase">
                        {govtContractingData[3].name}
                    </Typography>
                    
                    <List>
                        {govtContractingData[3].data.map(({company, details}) => (
                            <Box sx={{ py: 1 }}>
                                <Typography sx={{ fontWeight: "bold" }}>
                                    {company}
                                </Typography>
                                {details}
                            </Box>
                        ))}
                    </List>
                </Box>

                {/* NAICS Codes */}
                <Box sx={{ py: 2, px: {xs: 3, md: 16}, textAlign: 'center', color: '#FFF' }}>
                    <Typography variant="h3" fontSize={42} letterSpacing={2} color="primary" fontFamily="Passion One" textTransform="uppercase">
                        {govtContractingData[4].name}
                    </Typography>

                    <List>
                        {govtContractingData[4].data.map((data) => (
                            <ListItem key={data}>
                                <ListItemText primary={data} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </div>
    );
}

export default governmentcontracting;