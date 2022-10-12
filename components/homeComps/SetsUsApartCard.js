import { Card, CardContent, Typography, Grid, Paper } from "@mui/material";

const SetsUsApartCard = (props) => {
    return (
        <Paper elevation={10} sx={{ margin: 'auto', padding: 5, width: {xs: '90%', sm: '60%', md: '40%'}, height: '100%', '&:hover': { backgroundColor: '#FFC947' }}}>
                
            <span className="material-icons" style={{fontSize: 46 + 'px'}}>{props.icon}</span>
                    <Typography variant="h3" fontFamily="Passion One">
                        {props.name}
                    </Typography>

                    <Typography variant="body1">
                        {props.data}
                    </Typography>

                    {/* <hr className="m-auto"/> */}
               
            </Paper>
    );
}

export default SetsUsApartCard;