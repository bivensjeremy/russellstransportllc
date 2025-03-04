import { Box } from "@mui/material";
import Head from "next/head";
import AboutUsSection from "../components/aboutComps/AboutUsSection";
import TruckImagesSection from "../components/aboutComps/TruckImagesSection";
import UsCard from "../components/aboutComps/UsCard";
import Banner from "../components/Banner";

import { aboutImages } from "../data/aboutImages";
import CoreValues from "../components/aboutComps/CoreValues";

const about = () => {
    return (
        <div>
            <Head>
                <title>About Us - Russell&apos;s Transport</title>
            </Head>

            <Banner 
                title="About Us"
                image="/images/transport/Picture6_banner.jpg"
            />
            <Box sx={{ backgroundColor: "#000000" }}>
                <UsCard />

                <AboutUsSection 
                    header="Who We Are"
                    data="Russell&apos;s Transport, LLC is a reputable family owned and operated small business located in the South Atlanta, Georgia area.  We have been in the transportation industry for more than 7 years and have not looked back since. We chose transportation because of the consistency it brings which has allowed us to advance and grow in our business. We believe in learning the industry, staying patient, and booking loads according to what makes sense. We are passionate about continuously learning and growing to ensure we are providing our clients with the best service possible. One unique thing about our business is that we are still in the field of hauling freight. This allows us to stay in tune with what is going on in the market and adapt as needed."
                />

                <TruckImagesSection aboutImages={aboutImages} />

                <AboutUsSection
                    header="Mission Statement"
                    data="Our mission is to uphold the highest standards of safety, reliability, and integrity in the trucking industry, while providing exceptional customer service, contributing to sustainable growth in our company, and fostering a positive working environment for our employees."
                />

                <CoreValues />                
            </Box>

 
        </div>
    );
}

export default about;