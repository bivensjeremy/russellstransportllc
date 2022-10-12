import { useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Head from "next/head";
import ContactMeForm from "../components/contactComps/ContactMeForm";
import { useFormik } from 'formik';
import { contactValidationSchema } from "../Validations/contactValidations";
import MessageSuccess from "../components/contactComps/MessageSuccess";
import Banner from "../components/Banner";
import ContactInfo from "../components/homeComps/ContactInfo"

const Contact = () => {
    const [submitSuccess, setSuccess] = useState('');

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
        },
        validationSchema: contactValidationSchema,
        onSubmit: async(values) => {
            // console.log(JSON.stringify(values, null, 2));
            await new Promise((r) => setTimeout(r, 500));
            const response = await fetch("/api/contactapi", { 
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
                console.log("Message failed to send.")
                console.log(response)
            }
        },
    });

    return (
        <div>
            <Head>
                <title>Contact Us - Russell&apos;s Transport</title>
            </Head>

            <Banner
                title="Contact Us"
                image="/images/truckBanner.jpg"
            />

            <Box sx={{ backgroundColor: '#000000' }}>
                <Container sx={{ paddingTop: 5 }}>
                    <Grid container>
                        <Grid item xs={12} md={3} px={3} align='center'>
                            <Typography variant='h2' color="#FFF" fontFamily="Passion One" gutterBottom>
                                Have a question? Send A Message
                            </Typography>

                            <Typography variant="body1" color="#FFF" align="justify" fontSize={20} gutterBottom>
                                {/* Feel free to contact us with any questions you have.  We offer quick replies and affordable rates. Our excellent service is what sets us apart from the rest.  With 24/7 service, I assure you, you&#39;re our TOP priority. */}
                                Do you have a question about our dispatching services? What types of freight we haul? Maybe you&apos;d like to join our team! Feel free to send us a message and we&apos;ll get back to you as soon as possible!
                            </Typography>
                        </Grid>

                        <Grid item xs={12} md={9}>
                            <Container sx={{ backgroundColor: '#FFF', mb: 5, borderRadius: 2, p: 2, mx: 'auto' }}>
                                { submitSuccess ? <MessageSuccess /> : <ContactMeForm formik={formik} /> }
                            </Container>
                        </Grid>           
                        
                    
                    </Grid>
                </Container> 

                <ContactInfo />  
            </Box>
           
        </div>
    );
}


export default Contact;