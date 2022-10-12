import { Card, Box, Typography, Stack, Divider } from "@mui/material";
import Link from "next/link";

const CommitmentCard = () => {
    return (
        <div>
            <Box sx={{ paddingX: {xs: 5, md: 26 } }}>
                <Typography variant="h3" fontFamily="Passion One" textAlign="center" color="primary">
                    Russell&apos;s Transport, LLC is passionate about efficiently &#38; effectively picking up and delivering freight for our customers.
                </Typography>

                <Typography variant="h5"  textAlign="center" color="#FFF">
                    We take pride in being on-time, being professional at all times, and building healthy and long lasting relationships with our customers through effective and on-going communication.
                </Typography>
            </Box>
            
            <Card sx={{ 
                p: { xs: 1, md: 5 },
                m: 5,
                backgroundColor: '#FFF'
            }}>
                <Card sx={{
                    backgroundColor: '#000000',
                    borderRadius: 16,
                    px: { xs: 1, md: 4 },
                    py: 1
                }}>
                    <Typography fontFamily="Passion One" variant="h3" textAlign="center" color="#FFF">
                        Dedicated Truck Drivers Wanted!
                    </Typography>

                    <Stack 
                        sx={{ py: 2 }}
                        direction="row" 
                        spacing={2} 
                        justifyContent="center"
                        divider={<Divider orientation="vertical" flexItem color="#FFF" />
                    }>
                        <Typography color="#FFF" variant="h5" fontStyle="italic">
                            Local and OTR (Southeast Region)
                        </Typography>

                        <Typography color="#FFF" variant="h5" fontStyle="italic">
                            Quarterly Bonuses
                        </Typography>

                        <Typography color="#FFF" variant="h5" fontStyle="italic">
                            Incentive Pay for Passing DOT Inspection
                        </Typography>
                    </Stack>

                    <Typography variant="h6"  textAlign="center" gutterBottom color="#FFF">
                        If you need your freight moved in a timely and efficient manner, call us today for a freight quote. Additionally, if you are looking to join our trucking team located in the Southeast Region, we would love for you to fill out our <Link href="/join"><a>
                            <Typography variant="variant" color="primary">
                                online interest application.
                            </Typography>
                        </a></Link>
                    </Typography>
                </Card>
            </Card>
        </div>
    );
}

export default CommitmentCard;