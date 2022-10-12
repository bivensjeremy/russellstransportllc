import { Box } from "@mui/material";
import Image from "next/image";

const Video = () => {
    return (
        <Box sx={{ 
            objectFit: 'cover',
            position: 'fixed',
            top: 0,
            // left: 0,
            zIndex: -1,
        }}>
            {/* <video
                style={{ opacity: '90%', objectFit: 'cover' }}
                playsInline 
                autoPlay 
                loop
                muted 
                poster="/images/timelapseStillImage.png">
                <source src="/videos/truckVideo.mp4" type="video/mp4" />
            </video> */}

            <Image
                objectFit="cover"
                src="/images/truckbackground.jpg"
                alt="Timelapse City Background"
                priority
                width='2000%'
                height='1500%'
            />
        
        </Box>
    );
}

export default Video;