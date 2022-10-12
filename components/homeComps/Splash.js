import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { companyInfo } from "../../data/companyInfo";
import truckWallpaperPrime  from "../../public/images/truckWallpaperPrime.png"
import styles from '../../styles/customStyles.module.css'


const Splash = () => {
    return (
        <div style={{  minHeight: '85vh', display: 'flex', flexDirection: 'column', }}>
            <Box sx={{ zIndex: -1 }}>
                <Image
                    src={truckWallpaperPrime}
                    alt="Timelapse City Background"
                    priority
                    placeholder="blur"
                    blurDataURL="/images/truckbackground.jpg"
                    layout="fill"
                />
            </Box>
            
            <Box sx={{ 
                marginTop: 'auto',
                textAlign: 'center',
                // zIndex: 0
                //textShadow: 'red 2px 5px',  
            }}>
                <Box sx={{ marginX: {sm: 0, md: 20 }, padding: 4,  color: '#FFF', background: '#000000', borderRadius: 3 }}>
                    <Typography variant="h1" fontFamily='Passion One' textTransform='uppercase' className={styles.metallicText2}>
                        {companyInfo.name}
                    </Typography>

                    <Typography variant="body1" sx={{ textShadow: 'none' }}>
                        Our top priority is to ensure we are meeting all of your needs in a timely and professional manner at all times. We have built our business on a strong foundation which includes honesty, respect, integrity, and hard work. Effective communication is one of our key principles which is why we will always strive to communicate with our clients and employees one-on-one to understand their specific needs and provide assistance based on those needs.
                    </Typography>

                    <Box sx={{ py: 2, textShadow: 'none' }}>
                        <Typography variant="h5" fontFamily="Passion One">
                            Transportation is what we do. We are prepared to handle a variety of transports to suit your needs.
                        </Typography>   
                    </Box> 
                    
                    <Link href="/join"><a>
                        <Button variant="contained" size="large" color="primary" sx={{ fontSize: 20 }}>
                            Join Our Team
                        </Button>
                    </a></Link>
                </Box> 
                
            </Box>   
        </div>
    );
}

export default Splash;