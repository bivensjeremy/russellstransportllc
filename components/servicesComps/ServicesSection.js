import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Link from "next/link";
import ServiceCard from "./ServiceCard";

function createServiceCard(servicesInfo) {
    return(
        <ServiceCard
            key={servicesInfo.id}
            image={servicesInfo.image}
            name={servicesInfo.name}
            data={servicesInfo.data} 
        />
    )
}


const ServicesSection = (props) => {
    return (
        <div align="center">
            <Box sx={{ flexWrap: 'center', py: 2 }}>
                <Typography variant="h3" fontSize={52} letterSpacing={2} color="#FFF" fontFamily="Passion One">What We Offer</Typography>
            </Box>
            
                <Container>
                    <Grid container spacing={2} key={props.id}>
                        {props.servicesInfo.slice(0, 3).map(createServiceCard)} 
                    </Grid>
                </Container>
            
            
            <Box sx={{ py: 2,  }}>
                <Typography variant="h3" fontSize={52} letterSpacing={2} color="#FFF" fontFamily="Passion One">
                    What You&apos;ll Need to Get Started
                </Typography>
                
                <Container maxWidth='md'>
                    {props.servicesInfo.slice(3, 4).map(createServiceCard)} 
                </Container>
                
            </Box>

            <Box sx={{ py: 4 }}>
                <Typography variant="h4" color="#FFF">
                    Download Carrier Agreement
                </Typography>

                <Link href="/docs/OB&T Dispatching Service Dispatch and Carrier Agreement2.pdf" download><a>
                    <Button variant="contained" size="large" color="primary">
                        Download
                    </Button>
                </a></Link>

            </Box>
        </div>
    );
}

export default ServicesSection;