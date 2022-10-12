import { Avatar, Card, CardContent, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import TaskAltIcon from '@mui/icons-material/TaskAlt';

const JoinTeamCard = (props) => { 
    return ( 
            <Card sx={{ marginBottom: 1 }}>
                <CardContent>
                    <span className="material-icons" style={{fontSize: 52 + 'px', color: '#000000'}}>{props.image}</span>

                    <Typography variant="h4" color="secondary" fontFamily="Passion One">
                        {props.name}
                    </Typography>

                    <List>
                        {props.data.map((data) => (
                            <ListItem disablePadding key={data} sx={{ paddingY: 0.5 }}>
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
    );
}

export default JoinTeamCard;