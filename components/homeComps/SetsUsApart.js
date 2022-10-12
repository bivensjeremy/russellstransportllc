import { Box, Container, Typography } from "@mui/material";
import { setsUsApartData } from "../../data/setsUsApartData";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import SetsUsApartCard from "./SetsUsApartCard";

function createSetsUsApartCard(props) {
  return(
    <SetsUsApartCard 
		key={props.id}
		icon={props.icon}
		name={props.name}
		header={props.header}
		data={props.data} 
    />
  )
}


const SetsUsApart = () => {
    return (
        <section>
            <Box sx={{ 
                textAlign: 'center', 
                backgroundColor: '#000000', 
                color: '#FFF', 
                py: 4 
            }}>
				<Box sx={{ border: 'solid', width: { xs: '80%', md: '50%' }, borderWidth: 5, margin: 'auto', marginY: 5 }}>
					<Typography variant="h3" fontFamily="Passion One">
						What Sets Us Apart
					</Typography>
				</Box>
                

				<Container>
					<Carousel 
						autoPlay 
						infiniteLoop 
						interval={3000} 
						showArrows={false} 
						showStatus={false} 
						showThumbs={false}
					>
						{setsUsApartData.map(createSetsUsApartCard)}    
					</Carousel>
				</Container>
			</Box>
		</section>
    );
}

export default SetsUsApart;
