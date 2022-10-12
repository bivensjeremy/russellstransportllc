import { Box, Button, Typography, Paper } from "@mui/material"; 

const TypesOfTransport = (props) => {
    return (
        <Paper sx={{ p: 5, color:'#000000', '&:hover': { backgroundColor: '#FFC947' } }}>
            <Typography variant="h3" textTransform="uppercase" fontFamily="Passion One" textAlign="center" letterSpacing={2}>
                {props.header}
            </Typography>

            <Typography paragraph fontSize={18} textAlign="center">
                {props.data}
            </Typography>

            {/* <Link href="/services"><a>
                <Button variant="contained" color="primary">
                    Service Request
                </Button>
            </a></Link> */}
        </Paper>
    );
}

export default TypesOfTransport;