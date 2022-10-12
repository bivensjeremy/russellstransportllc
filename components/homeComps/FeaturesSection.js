import { Box, Grid, Typography } from "@mui/material";
import FeaturesCard from "./FeaturesCard";
import { featuresData } from "../../data/featuresData";
import TaglineBar from "./TaglineBar";

function createFeaturesCard(props) {
    if(props.id === 2){
        return(
            <FeaturesCard
                key={props.id}
                image={props.image}
                data={props.data}
                objectFit="contain"
            />
        )
    }
    return(
        <FeaturesCard
            key={props.id}
            image={props.image}
            data={props.data}
            objectFit="cover"
        />
    )
}


const FeaturesSection = () => {
    return (
        <Box  sx={{ 
            textAlign: 'center', 
			py: 4, 
			px: {sm: 0, md: 16} ,
			backgroundColor: '#000000', 
		}}>
            <TaglineBar 
                tagline="We Can Handle Anything" 
            />

            <Grid container spacing={1}	px={4}>
                {/* {featuresData.slice(0,5).map(
                    createFeaturesCard
                )}
                <FeaturesCard
                    key={featuresData[5]}
                    image={featuresData[5].image}
                    data={featuresData[5].data}
                    objectFit="contain"
            /> */}
            {featuresData.map(
                createFeaturesCard
            )}
            </Grid>
        </Box>
        
    );
}

export default FeaturesSection;