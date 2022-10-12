import { Box, Typography } from "@mui/material";

const AboutUsSection = (props) => {
    return (
        <div>
            <Box sx={{ py: 2, px: {xs: 3, md: 16}, textAlign: 'center', color: '#FFF' }}>
                <Typography variant="h3" fontSize={52} letterSpacing={2} color="primary" fontFamily="Passion One" textTransform="uppercase">
                    {props.header}
                </Typography>
                
                <Typography paragraph fontSize={24} align="justify">
                    {props.data}
                </Typography>
                
            </Box>
        </div>
    );
}

export default AboutUsSection;