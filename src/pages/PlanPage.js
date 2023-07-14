import CardList from '../components/CardList';
import MobileNavBar from '../components/MobileNavBar';
import PopPupForm from "../components/PopPupForm";
import FooterSection from "../components/FooterSection"

export const PlanPage = () => {
  return (
    <div>
      <CardList/>
      <PopPupForm/>
      <MobileNavBar/>
      <FooterSection/>
    </div>
  )
}
