import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"
import PcNavBar from '../components/PcNavBar';


export const PlanPage = () => {
  return (
    <div>
      <PcNavBar/>
      <CardList/>
      <PopPupForm/>
      <MobileNavBar/>
      <FooterSection/>
    </div>
  )
}
