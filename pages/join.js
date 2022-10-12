import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Head from "next/head";
import Banner from "../components/Banner";
import { useFormik } from "formik";
import DriveForUsForm from "../components/joinComps/DriveForUsForm";
import { useState } from "react";
import { driveForUsValidations } from "../Validations/driveForUsValidations";
import SubmitSuccess from "../components/joinComps/SubmitSuccess";
import JoinTeamCard from "../components/joinComps/joinTeamCard";

const Join = () => {
    const [submitSuccess, setSuccess] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            middleInitial: '',
            lastName: '',
            suffix: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            phone: '',
            phone2: '',
            drivingExp: '',
            carriers: '',
            accidents: '',
            violations: '',
            referred: '',
        },
        validationSchema: driveForUsValidations,
        onSubmit: async(values) => {
            alert(JSON.stringify(values, null, 2));
            await new Promise((r) => setTimeout(r, 500));
            const response = await fetch("/api/joinapi", { 
                method: 'POST', 
                headers: { 
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }, 
                body: JSON.stringify(values) 
            });
            const resData = await response.json();
            if (resData.status === 'success'){
                setSuccess(true)
            }else if(resData.status === 'fail'){
                alert("Message failed to send.")
            }
        },
    });

    return (
        <div>
            <Head>
                <title>Transport - Russell&apos;s Transport</title>
            </Head>

            <Banner
                title="Drive For Us"
                image="/images/truckBanner3.jpg"
            />

            <Box sx={{ backgroundColor: "#000000" }}>
                
                <Box sx={{ 
                    textAlign: { xs: "center" }, 
                    px: {xs: 3, md: 16 }, 
                    color: '#FFF',
                    py: 5
                }}>
                    <Typography variant="h3" textTransform="uppercase" fontFamily="Passion One" letterSpacing={2}>
                        Are you interested in driving for us?
                    </Typography>

                    <Typography paragraph fontSize={24}>
                        Submit the form below to give us a little information about your driving history. We will follow up with you shortly. Thank you for your interest.
                    </Typography> 
                </Box>

                {/* <Divider 
                    sx={{ width: '50%', margin: 'auto' }}
                    variant="middle"
                    color="#FFC947"
                /> */}

                <Box sx={{ paddingTop: 5, mx: { xs: 1, lg: 16 } }}>
                    <Grid container>
                        <Grid item xs={12} lg={4} px={1} align='center'>
                            <Box>
                                <JoinTeamCard
                                    image="local_shipping"
                                    name="Driver Qualifications"
                                    data={[
                                        "2-3 years of Flatbed or Hotshot Experience",
                                        "3-5 years clean MVR",
                                        "Clean Drug Test",
                                        "DOT Medical Card",
                                        "Class A CDL",
                                        "Age 21 or older",
                                        "At least six months of OTR experience"
                                    ]}
                                />
                            </Box>
                            
                            <Box>
                                <JoinTeamCard
                                    image="description"
                                    name="Driver's Job Description"
                                    data={[
                                        "Drive and operate trucks",
                                        "Ability to locate and read location and road maps",
                                        "Load and unload cargo",
                                        "Inspect truck before and after each trip",
                                        "Safely pickup and deliver freight on-time",
                                        "Properly operate Electronic Logging Device (ELD)",
                                        "Follow predesignated routes, schedules and traffic laws",
                                        "Must be able to strap, chain, and tarp freight"
                                    ]} 
                                />
                            </Box>
                        </Grid>

                        <Grid item xs={12} lg={8} px={1}>
                            <Container sx={{ backgroundColor: '#FFF', mb: 5, borderRadius: 2, p: 2, mx: 'auto' }}>
                                { submitSuccess ? <SubmitSuccess /> : <DriveForUsForm formik={formik} /> }
                            </Container>
                        </Grid>           
                        
                    </Grid>
                </Box> 
            </Box>
        </div>
    );
}

export default Join;