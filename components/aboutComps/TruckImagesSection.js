import { Container, ImageList, ImageListItem } from "@mui/material";
import Image from "next/image";


const TruckImagesSection = ({aboutImages}) => {
    return (
        <Container>
            <ImageList sx={{ width: "90%", m: 'auto' }} cols={3} rowHeight="auto" gap={10}>
                {aboutImages.map((item) => (
                    <ImageListItem key={item.id}>
                        <Image 
                            src={item.image}
                            height={1028}
                            width={822}
                            layout="responsive"
                            alt={item.alt}
                            quality='50'
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Container>
    );
}

export default TruckImagesSection;