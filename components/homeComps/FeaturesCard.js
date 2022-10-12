import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

const FeaturesCard = ({objectFit, image, data}) => {
    return (
        <Grid item xs={12} sm={6} lg={2}>
            <Card sx={{ height: '100%', background: '#000000' }}>
                <CardMedia
                    component="img"
                    sx={{ objectFit: objectFit }}
                    height="160"
                    image={image}
                    alt={data}
                />
                
                <CardContent sx={{ background: '#FFF', height: '100%'}}>
                    <Typography color="secondary" variant="body1" textAlign="center">
                        {data}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        
    );
}

export default FeaturesCard;