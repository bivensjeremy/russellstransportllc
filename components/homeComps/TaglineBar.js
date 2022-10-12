import { Box, Typography } from "@mui/material";

const TaglineBar = ({tagline}) => {
    return (
        <Box sx={{ border: 'solid', width: { xs: '80%', md: '50%'}, color: "#FFF", borderWidth: 3, borderRadius: 2, margin: 'auto', marginY: 5 }}>
            <Typography variant="h3" fontFamily="Passion One" textTransform='uppercase'>
                {tagline}
            </Typography>
        </Box>
    );
}

export default TaglineBar;