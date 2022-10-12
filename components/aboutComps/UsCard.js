import { Box, Card, Container } from "@mui/material";
import Image from "next/image";

const UsCard = () => {
    return (
        <Container maxWidth="sm" sx={{ paddingY: 3 }}>
            <Card sx={{
                borderRadius: 3,
                margin: 'auto',
                
            }}>
                <Image
                    src="/images/us/couple.png"
                    width={100}
                    height={100}
                    alt="couple-image"
                    layout="responsive"
                    placeholder="blur"
                    blurDataURL="/images/us/couple.png"
                />
            </Card>
            
        </Container>
    );
}

export default UsCard;