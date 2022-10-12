import { Button, Container, Typography } from "@mui/material";
import Link from "next/link";

const SubmitSuccess = () => {
    return (
        <div align='center'>
            <Container sx={{
                width: { xs: '90%', lg: '100%'},
                padding: { xs: 10, md: 20},
                backgroundColor: '#FFF',
                borderRadius: 2 
            }}>
                <Typography variant='h5'>
                    Application sent!
                </Typography>

                <Link href="/"><a>
                    <Button variant="contained">
                        Return Home
                    </Button>
                </a></Link>
            </Container>
        </div>
    );
}

export default SubmitSuccess;