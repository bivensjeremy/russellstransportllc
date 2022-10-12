import { Box, Grid, Typography } from "@mui/material";
import { professionalServiceData } from "../../data/professionalServiceData";
import ProfessionalServiceCard from "./ProfessionalServiceCard";
import TaglineBar from "./TaglineBar";

function createProfessionalServiceCard(props) {
	return(
		<ProfessionalServiceCard 
		key={props.id}
		icon={props.icon}
		name={props.name}
		header={props.header}
		data={props.data} 
		/>
	)
}


const ProfessionalService = () => {
	return (
			<Box  sx={{ 
				textAlign: 'center', 
				color: '#FFF', 
				py: 4, 
				px: {sm: 0, md: 16} ,
				backgroundColor: '#000000', 
			}}>
				<TaglineBar
					tagline="Professional Services" 
				/>
				<Grid container spacing={1}>
					{professionalServiceData.map(createProfessionalServiceCard)}
				</Grid>
			</Box>
	);
}

export default ProfessionalService;