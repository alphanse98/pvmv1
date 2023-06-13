 import callIcon from '../assets/Group 1888.svg'
 import insta from '../assets/Group 1872.svg'
 import whatsapp from '../assets/Group 1873.svg'
 import pin from '../assets/Group 1874.svg'
 import youtube from '../assets/Group 1875.svg'
 import fb from '../assets/Group 1871.svg'
 



function FooterSection() {
  return (
    <footer>
      <div className="headerContainer">
        <div className="FooterFlex">
          <div className="FooterSendQuote">
            <h1 className="FooterHeadding fontFamily">Send Us a Quote!</h1>
            <input placeholder="Name" className="FooterInp"></input>
            <input placeholder="Phone Number" className="FooterInp"></input>
            <input placeholder="Email" className="FooterInp"></input>
            <textarea
              placeholder="Description"
              className="FooterInp"
            ></textarea>
            <button className="FooterBtn">Submit</button>
          </div>
          
          <div className="FooterAbout">
          <h1 className="FooterAboutHeading FooterHeadding fontFamily">About Us</h1>
          <p className="serviceFieldsParagraph FooterAboutParagraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            libero ante, semper a lacus non, vulputate cursus mauris. Lorem
            ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam libero ante, semper a lacus non, vulputate
            ipsum dolor sit amet Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Aliquam libero ante, semper a lacus non, vulputate
          </p>
          <div>
            <div className='footerIconWraper'>
            <img src={callIcon} alt='' className='footerIcon'></img>
            <span className='footerNumber fontFamily'>+91-987654322</span>
            </div>
            <div className='FooterSocialMediaIcons'>
                <img src={whatsapp} alt='' className='footerSocialMediaIcon'></img>
                <img src={insta} alt='' className='footerSocialMediaIcon'></img>
                <img src={fb} alt='' className='footerSocialMediaIcon'></img>
                <img src={pin} alt='' className='footerSocialMediaIcon'></img>
                <img src={youtube} alt='' className='footerSocialMediaIcon'></img>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
