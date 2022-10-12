import { Avatar, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const ServiceCard = (props) => {
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <span className="material-icons" style={{fontSize: 52 + 'px', color: '#000000'}}>{props.image}</span>

                    <Typography variant="h4" color="secondary" fontFamily="Passion One" textTransform="uppercase">
                        {props.name}
                    </Typography>

                    <List>
                        {props.data.map((data) => (
                            <ListItem key={data}>
                                <ListItemAvatar>
                                    <Avatar>
                                        <TaskAltIcon color="secondary" />
                                    </Avatar>
                                </ListItemAvatar>

                                <ListItemText primary={data} />
                                
                            </ListItem>
                            
                        ))}
                    </List>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ServiceCard;