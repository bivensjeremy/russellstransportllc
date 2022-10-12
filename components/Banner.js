import { Box, Typography } from "@mui/material";
import Image from "next/image";


const Banner = (props) => {
    return (
<Box>
    {/* <Box sx={{ 
           height: '40vh',
           display: 'flex',
            zIndex: -1,
        }}>
     */}

        <Box sx={{ 
            objectFit: 'cover',
            position: 'absolute',
            top: {xs: 50, md: 0},
            left: 0,
            zIndex: -1,
            width: '100%',
            height: '100%',
            backgroundColor: '#000000'
        }}>

            <Image
                 src={props.image}
                 
                //  objectFit="cover"
                 width='2000%'
                height='1000%'
                alt="Truck Banner Image"
             />
        </Box>
              


        <Box sx={{ textAlign: 'center' }}>
            <Box sx={{ 
                paddingY: {xs: 0, md: 15 },
                color: '#FFF', 
                textTransform: 'uppercase'
            }}>
                <Typography  
                    variant='h2' 
                    fontFamily='Passion One' 
                    letterSpacing={4} 
                    fontSize={84}
                    sx={{ textShadow: 'black 3px 5px' }}
                >
                      {props.title}
                </Typography>
            </Box>
        </Box>
    </Box>
       
        

        // <Box sx={{ 
        //     height: '40vh',
        //     display: 'flex'
        // }}>
        //         {/* <Image
        //         src={props.banner}
        //         layout="responsive" 
        //         width={1947} 
        //         height={518} 
        //     /> */}
       
            
        //    <Box sx={{ 
        //         textAlign: 'center',
        //         m: 'auto',
        //         textTransform: "uppercase",
                
        //     }}>
        //         <Typography variant='h2' fontFamily='Passion One' letterSpacing={4} fontSize={84}>
        //             {props.title}
        //         </Typography>
        //     </Box>

          
        
        // </Box>
    );
}

export default Banner;
