import { Box, Grid, Typography } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const CoreValues = () => {
    const valuesData = [
        "Safety",
        "Integrity",
        "Customer Service",
        "Teamwork",
        "Consistency",
        "Professionalism",
        "Open-Minded",
        "Accountability",
        "Sustainability"
    ];

    return (
        <Box sx={{ py: 2, px: {xs: 3, md: 16}, textAlign: 'center', color: '#FFF' }}>
                <Typography variant="h3" fontSize={52} letterSpacing={2} color="primary" fontFamily="Passion One" textTransform="uppercase">
                    Core Values
                </Typography>
                
                <Grid container>
                    {valuesData.map((value) => (
                        <Grid item xs={6} md={4}>
                            <Typography paragraph fontSize={24} align="justify">
                                <TaskAltIcon sx={{ mr: 1 }}/>
                                {value}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
                
                
            </Box>
    );
}

export default CoreValues;