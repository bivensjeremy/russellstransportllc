import { Box, Divider, Typography, Stack } from "@mui/material";
import TypesOfTransport from "./TypesOfTransport";

const TransportComp = () => {
    return (
        <div>
            <Stack
                direction={{ xs: 'column', lg: 'row' }}
                // divider={<Divider orientation="vertical" flexItem />}
                spacing={2}
                sx={{ backgroundColor: "#000000", paddingX: 5, paddingBottom: 5 }}
            >
                
                {/* <Box sx={{ 
                    border: 'solid', 
                    width: { xs: '80%', md: '60%' }, 
                    borderWidth: 3,
                    borderColor: '#FFC947',
                    borderRadius: 2,
                    margin: 'auto', 
                    textAlign: "center",
                    backgroundColor: "#FFF",
                    padding: 5
                }}>

                <Typography variant="h4" color="#000000" fontStyle="italic">
                    Transportation is what we do. We are prepared to handle a variety of transports to suit your needs
                </Typography>
            </Box> 

            

            <Divider 
                sx={{ width: '50%', margin: 'auto', marginTop: 5 }}
                variant="middle"
                color="#FFC947"
            /> */}

                <TypesOfTransport 
                    header="Long Haul Transports"
                    data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna.."
                />
            
                <TypesOfTransport 
                    header="Short Haul Transports"
                    data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna."
                />
                <TypesOfTransport 
                    header="Time Critical Hauls"
                    data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum non consectetur a erat nam at lectus urna."
                />
        </Stack>
        </div>
    );
}

export default TransportComp;