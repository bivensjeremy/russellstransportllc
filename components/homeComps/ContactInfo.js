import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { companyInfo } from "../../data/companyInfo";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const igIcon = <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" viewBox="0 0 16 16">
<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>

const ContactInfo = () => {
    return (
        <div>
            <Box sx={{ display: { sm: 'block', md: 'flex' }, paddingX: 4, paddingTop: 1, color: '#FFF', backgroundColor: '#000000' }}>
                
                <Box>
                    <Typography variant="h3" gutterBottom>
                        Contact Us
                    </Typography>
                    <Box sx={{ marginLeft: 4 }}>
                        <Typography variant="h5">
                            <span className="material-icons">phone</span>
                            <Link href="tel:+14785951817"><a>{' '}{companyInfo.phone}</a></Link>
                            <span> or </span>
                            <Link href="tel:+14785951897"><a>{' '}{companyInfo.secondaryPhone}</a></Link>
                        </Typography>

                        <Typography variant="h5">
                            <span className="material-icons mi-contact  align-middle">email</span>
                            <Link href="mailto:info@russelstransportllc.com?subject=Contact From Website"><a>{' '}{companyInfo.email}</a></Link>
                        </Typography>

                        <Typography variant="h7">
                            <span className="material-icons mi-contact align-middle contactCompanyInfo">schedule</span>
                            {' '}24 hours a day, 7 days a week
                        </Typography>
                    </Box>
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <Box sx={{ 
                    m: 'auto', 
                    textAlign: "center",
                    paddingY: 3 
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={6}>
                            <Typography>
                                Follow our Instagram Page!
                            </Typography>

                            <Link href="https://www.instagram.com/russellstransport/"><a target="_blank">
                                <div style={{ borderRadius: 10, width: 48, height: 48, margin: 'auto', background: 'linear-gradient(140deg,blue,#F56040 60%)'}}>
                                    {igIcon}
                                </div>
                            </a></Link>
                        </Grid>

                        <Grid item xs={12} md={6}>
                    <Typography>
                        Connect with us on LinkedIn!
                    </Typography>

                    <Link href="https://www.linkedin.com/company/russell-s-transport-llc/?viewAsMember=true"><a target="_blank">
                            <LinkedInIcon sx={{ width: 52, height: 52 }}/>
                    </a></Link>
                        </Grid>
                    </Grid>
                        
                    {/* </Box> */}

                    {/* <Box> */}
                       
                    {/* </Box> */}
                    
                </Box>
                
            </Box>

                {/* <Typography variant="subtitle1" color="#FFF" marginX={4}>
                    Feel free to contact us with any questions you have.  We offer quick replies and affordable rates. Our excellent service is what sets us apart from the rest.  With 24/7 service, I assure you, you&#39;re our TOP priority.
                </Typography> */}
        </div>
    );
}

export default ContactInfo;