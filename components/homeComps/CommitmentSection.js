import { Box } from "@mui/material";
import CommitCardRedesign from "./CommitCardRedesign";
import CommitmentCard from "./CommitmentCard"

const CommitmentSection = () => {
    return (
        <Box sx={{
            background: "#000000",
            paddingY: 7
        }}>
            {/* <CommitmentCard /> */}

            <CommitCardRedesign />
        </Box>
        
    );
}

export default CommitmentSection;