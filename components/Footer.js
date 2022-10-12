import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { companyInfo } from "../data/companyInfo";

const Footer = () => {
    return (
        <footer>
            <Box sx={{ backgroundColor: '#000000', color: "lightGrey", paddingTop: 1 }}>

                <Box sx={{  
                    display: { sx: '', md: 'flex' },
                    textAlign: { xs: 'center', md: '' },
                    mx: 3,
                    marginTop: 1,
                }}>
                    <Typography variant="overline">
                        Copyright &copy; {new Date().getFullYear()} {companyInfo.name}
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Typography variant="overline">
                        Web Services Provided by <Link href="https://bivensblueprint.com"><a target="_blank">
                                <Typography variant="overline" color="primary">
                                    Bivens Blueprint, LLC
                                </Typography>
                            </a></Link>
                    </Typography> 
                </Box>
            </Box>
            
        </footer>
    );
}

export default Footer;