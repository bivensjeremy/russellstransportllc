import { useState } from "react";
import { Box } from "@mui/material";
import { useFormik } from "formik";
import Head from "next/head";
import Banner from "../components/Banner";
import RequestForm from "../components/servicesComps/RequestForm";
import RequestFormSent from "../components/servicesComps/RequestFormSent";
import ServicesSection from "../components/servicesComps/ServicesSection";
import { servicesInfo } from "../data/servicesData";
import { requestServicesValidation } from "../Validations/requestServiceValidations";

const Services = () => {
    const [requestSent, setRequestSent] = useState('');
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            companyName: '',
            email: '',
            phone: '',
            streetAddress: '',
            city: '',
            state: '',
            zip: '',
            trailerType: '',
            freightGuard: '',
            region: [],
            dispatchFile: '',
        },
        validationSchema: requestServicesValidation,
        onSubmit: async(values) =>  {
            // console.log(JSON.stringify(values, null, 2));
            await new Promise((r) => setTimeout(r, 500));
            const response = await fetch("/api/requestapi", { 
                method: 'POST', 
                headers: { 
                    'Content-type': 'application/json',
                    'Accept': 'application/json'
                }, 
                body: JSON.stringify(values) 
            });
            const resData = await response.json();
            if (resData.status === 'success'){
                setRequestSent(true)
            }else if(resData.status === 'fail'){
                alert("Message failed to send.")
            }
        },
    })
    return (
        <div>
            <Head>
                <title>Dispatch Services - Russell&apos;s Transport</title>
            </Head>
            
            <Banner
                title="Request Dispatch Services"
                image="/images/truckBanner2.jpg"
            />

            <Box sx={{ backgroundColor: '#000000' }}>
                <Box sx={{ 
                    mx: { xs: 0,  md: 10 }, 
                    paddingBottom: 10
                }}>
                    <ServicesSection servicesInfo={servicesInfo} />
                    
                    { requestSent ? <RequestFormSent /> : <RequestForm formik={formik} />}
                    
                </Box>  
            </Box>  
        </div>
    );
}

export default Services;