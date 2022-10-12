import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "../../data/companyInfo";

const SplashSecondary = () => {
    return (
        <Grid container sx={{ backgroundColor: '#000000'}}>
            <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: 'center', }}>
                    <Box sx={{ m: {sm: 0, md: 10 } , pX: 5,  color: '#FFF' }}>
                        <Typography variant="h1" fontFamily='Passion One' gutterBottom>
                            {companyInfo.name}
                        </Typography>

                        <Typography variant="h5" fontStyle="italic" gutterBottom>
                            Our top priority is to ensure we are meeting all of your needs in a timely and professional manner at all times. We have built our business on a strong foundation which includes honesty, respect, integrity, and hard work. Effective communication is one of our key principles which is why we will always strive to communicate with our clients and employees one-on-one to understand their specific needs and provide assistance based on those needs.
                        </Typography>

                        <Box sx={{ py: 6 }}>
                            <Typography variant="h3" fontFamily="Passion One" color="#FFF" fontSize={48} fontStyle="italic">
                                Transportation is what we do. We are prepared to handle a variety of transports to suit your needs.
                            </Typography>
                        </Box> 
                        
                        <Link href="/services"><a>
                            <Button variant="contained" size="large" color="primary" sx={{ fontSize: 20 }}>
                                Join Our Team
                            </Button>
                        </a></Link>
                    </Box> 
                </Box>   
            </Grid>

            <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: 'center', }}>
                    <Box sx={{ m: {sm: 0, md: 10 } , pX: 5,  color: '#FFF' }}>
                        <Image
                            objectFit="cover"
                            src="/images/truckbackground.jpg"
                            alt="Timelapse City Background"
                            priority
                            width='2000%'
                            height='1500%'
                        />
                    </Box> 
                </Box>   
            </Grid>
        </Grid>
    );
}

export default SplashSecondary;