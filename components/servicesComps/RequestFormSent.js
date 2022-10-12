import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const RequestFormSent = () => {
    return (
        <Box container marginX='auto' sx={{ width: { md: '100%', lg: '75%' }, padding: { sm: 1, md: 3 }, backgroundColor: '#FFF', }}>
            <div align='center'>
            <Container sx={{ my: 15 }}>
                <Typography variant='h5'>
                    Thank you. Your request has been sent.
                </Typography>

                <Typography variant='h5'>
                    We will follow you with you to complete your request.
                </Typography>

                <Link href="/"><a>
                    <Button variant="contained">
                        Return Home
                    </Button>
                </a></Link>
            </Container>
        </div>
            
        </Box>
        
    );
}

export default RequestFormSent;