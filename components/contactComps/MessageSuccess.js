import { Button, Container, Typography } from '@mui/material';
import Link from 'next/link';

const MessageSuccess = () => {
    return (
        <div align='center'>
            <Container sx={{ my: 25 }}>
                <Typography variant='h5'>
                    Message sent!
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

export default MessageSuccess;