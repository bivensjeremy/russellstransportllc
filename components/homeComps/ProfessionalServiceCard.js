import { Circle, Star, StarBorder } from "@mui/icons-material";
import { Card, CardContent, Typography, Grid, List, ListItem, ListItemText, Divider } from "@mui/material";

const ProfessionalServiceCard = (props) => {
    return (
        <Grid item xs={12} sm={6} lg={3}>
            <Card sx={{ height: '100%', '&:hover': { backgroundColor: '#FFC947' }}}>
                <CardContent>
                    <span className="material-icons" style={{fontSize: 46 + 'px'}}>{props.icon}</span>
                    <Typography variant="h3" fontFamily="Passion One" textTransform="uppercase">
                        {props.name}
                    </Typography>

                    <List>
                        {props.data.map((data) => (
                            <ListItem key={data}>
                                <Circle fontSize="1" sx={{ marginRight: 1 }} />
                                <ListItemText primary={data} />
                            </ListItem>
                        ))}
                        
                    </List>
                    {/* <Typography variant="body1">
                        {props.data}
                    </Typography> */}

                    {/* <hr className="m-auto"/> */}
                </CardContent> 
            </Card>
        </Grid>
    );
}

export default ProfessionalServiceCard;