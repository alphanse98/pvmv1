import FooterSection from "../components/FooterSection"
import MobileNavBar from "../components/MobileNavBar"
import {Helmet} from "react-helmet";


const AboutPage = () => {
  return (
    <div>
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="description" content="Download free plans for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services." />
          <meta name="keywords" content="free plans, architecture visualization, home plans, elevation designs, interior designs, 3D floor plans" />
          <meta property="og:title" content="Download Free Plans for Architecture Visualization" />
          <meta property="og:description" content="Download free plans for architecture visualization, including home plans, elevation designs, interior designs, and 3D floor plans. Bring your dream project to life with our professional services." />
          <title>plan my spaces.com</title>
      </Helmet>
      {/* <Header/> */}
      <FooterSection/>
      <MobileNavBar/>
    </div>
  )
}

export default AboutPage