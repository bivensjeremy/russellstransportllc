import { Box } from "@mui/material";
import Head from "next/head";
import AboutUsSection from "../components/aboutComps/AboutUsSection";
import TruckImagesSection from "../components/aboutComps/TruckImagesSection";
import UsCard from "../components/aboutComps/UsCard";
import Banner from "../components/Banner";

import { aboutImages } from "../data/aboutImages";

const about = () => {
    return (
        <div>
            <Head>
                <title>About Us - Russell&apos;s Transport</title>
            </Head>

            <Banner 
                title="About Us"
                image="/images/truckBanner.jpg"
            />
            <Box sx={{ backgroundColor: "#000000" }}>
                <UsCard />

                <AboutUsSection 
                    header="Who We Are"
                    data="We are the founders of Russell&apos;s Transport, LLC. A reputable company based in Dublin, Georgia. We have been in the transportation industry for more than 5 years and have not looked back since. We chose transportation because of the consistency it brings which has allowed us to advance and grow in our business. We believe in learning the industry, staying patient, and booking loads according to what makes sense. We are passionate about continuously learning and growing to ensure we are providing our clients with the best service possible. One unique thing about our business is that we are still in the field of hauling freight. This allows us to stay in tune with what is going on in the market and adapt as needed."
                />

                <TruckImagesSection aboutImages={aboutImages} />

                <AboutUsSection
                    header="Mission Statement"
                    data="Our top priority is to ensure we are meeting all of your needs in a timely and professional manner at all times. We have built our business on a strong foundation which includes honesty, respect, integrity, and hard work. Effective communication is one of our key principles which is why we will always strive to communicate with our clients and employees one-on-one to understand their specific needs and provide assistance based on those needs. We look forward to working with you and are excited about the journey ahead."
                />                
            </Box>

 
        </div>
    );
}

export default about;