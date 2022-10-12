import Head from 'next/head'
import CommitmentSection from '../components/homeComps/CommitmentSection'
import ContactInfo from '../components/homeComps/ContactInfo'
import FeaturesSection from '../components/homeComps/FeaturesSection'
import ProfessionalService from '../components/homeComps/ProfessionalService'
import Splash from '../components/homeComps/Splash'
import SplashSecondary from '../components/homeComps/SplashSecondary'
import TransportComp from '../components/homeComps/TransportComp'
import Video from '../components/homeComps/Video'

export default function Home() {
	return (
    <div>
		<Head>
			<title>Russell&apos;s Transport, LLC</title>
			<meta name="description" content="Russell&apos;S Transport, LLC" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		{/* <SplashSecondary />

      	<Video /> */}

        <Splash />
		
		<FeaturesSection />

        <ProfessionalService />

        {/* <SetsUsApart /> */}

		{/* <TransportComp /> */}

		<CommitmentSection />

		<ContactInfo />
    </div>
    
  )
}
