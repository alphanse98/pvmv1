 import callIcon from '../assets/Group 1888.svg'
 import insta from '../assets/Group 1872.svg'
 import whatsapp from '../assets/Group 1873.svg'
 import pin from '../assets/Group 1874.svg'
 import youtube from '../assets/Group 1875.svg'
 import fb from '../assets/Group 1871.svg'
 import { Formik } from 'formik'
 import * as Yup from 'yup';
 
function FooterSection() {

  const uservalidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(10, 'Phone number must be at most 10 characters')
    .required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
  });

  const userData = {name:"",phone:"",email:""}

  return (
    <footer>
    <Formik
    initialValues = {userData}
    validationSchema={uservalidation}
    onSubmit = {(param)=>{console.log(param)}}
    >

    {(
      {errors, touched,values,setFieldValue,submitForm}) => (
      <div className="headerContainer">
        <div className="FooterFlex">
          <div className="FooterSendQuote">
            <h1 className="FooterHeadding fontFamily">Send Us a Quote!</h1>

            <input placeholder="Name" className="FooterInp" value={values.name} onChange={(e)=>setFieldValue("name",e.target.value)}></input>
            <p className='errorMsg fontFamily'>{errors.name || touched.name  } </p>
            <input placeholder="Phone Number" type="number" className="FooterInp" value={values.phone} onChange={(e)=>setFieldValue("phone",e.target.value)}></input>
            <p className='errorMsg fontFamily'>{errors.phone || touched.phone} </p>
            <input placeholder="Email" className="FooterInp" value={values.email} onChange={(e)=>setFieldValue("email",e.target.value)}></input>
            <p className='errorMsg fontFamily'>{errors.email || touched.email} </p>

            <textarea
              placeholder="Description"
              className="FooterInp"
            ></textarea>

            <button className="FooterBtn"  onClick={submitForm}>Submit</button>
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
      )}
      </Formik>
    </footer>
  );
}

export default FooterSection;
