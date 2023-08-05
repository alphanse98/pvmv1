import FooterSection from "../components/FooterSection"
import MobileNavBar from "../components/MobileNavBar"
import {Helmet} from "react-helmet";

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Welcome to Plan My Spaces! We are your go-to destination for free downloads of plans and home designs. Our team of professionals is dedicated to bringing your dream project to life with our high-quality architectural services. Learn more about our mission and commitment to providing exceptional design solutions." />
        <meta name="keywords" content="about us, free downloads, plans, home designs, architectural services, high-quality designs, design solutions" />
        <meta property="og:title" content="About Plan My Spaces | Free Downloads and Professional Services" />
        <meta property="og:description" content="Welcome to Plan My Spaces! We are your go-to destination for free downloads of plans and home designs. Our team of professionals is dedicated to bringing your dream project to life with our high-quality architectural services. Learn more about our mission and commitment to providing exceptional design solutions." />
        <title>About Plan My Spaces | Architecture Visualization Services</title>
      </Helmet>
      {/* <Header/> */}
      <FooterSection/>
      <MobileNavBar/>
    </div>
  )
}

export default AboutPage