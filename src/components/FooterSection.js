 import callIcon from '../assets/Group 1888.svg'
 import insta from '../assets/Group 1872.svg'
 import whatsapp from '../assets/Group 1873.svg'
 import pin from '../assets/Group 1874.svg'
 import youtube from '../assets/walkthroughIcon.svg'
 import fb from '../assets/Group 1871.svg'
 import { Formik } from 'formik'
 import * as Yup from 'yup';
import { useState } from 'react'
import PostApi from './PostApi'
import { BarLoader } from 'react-spinners';

 
function FooterSection() {
  const [formData, setFormData] = useState()
  const [loader, setLOader] = useState(false);



  const uservalidation = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    mobile: Yup.string()
    .min(10, 'Phone number must be at least 10 characters')
    .max(10, 'Phone number must be at most 10 characters')
    .required('Phone number is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    Description: Yup.string(),

  });

  const userData = {name:"",mobile:"",email:"",Description:""}

  const handleSubmit = (param, { resetForm }) => {
    // Form submission logic...
    setFormData(param)
    setLOader(true)
    // Reset the form fields
    resetForm();
  };

  return (
    <footer>
    <Formik
    initialValues = {userData}
    validationSchema={uservalidation}
    onSubmit={handleSubmit}
    >
    {(
      {errors, touched,values,setFieldValue,submitForm}) => (
      <div className="headerContainer">
        <div className="FooterFlex">
          <div className="FooterSendQuote">
            <h1 className="FooterHeadding fontFamily">Send Us a Quote!</h1>

            <input placeholder="Name" className="FooterInp" type='text' value={values.name} onChange={(e)=>setFieldValue("name",e.target.value)}></input>
            <p className='errorMsg fontFamily'>{errors.name || touched.name  } </p>
            <input placeholder="Phone Number" type="number" className="FooterInp" value={values.mobile} onChange={(e)=>setFieldValue("mobile",e.target.value)}></input>
            <p className='errorMsg fontFamily'>{errors.mobile || touched.mobile} </p>
            <input placeholder="Email" className="FooterInp" type='Email' value={values.email} onChange={(e)=>setFieldValue("email",e.target.value)}></input>
            <p className='errorMsg fontFamily'>{errors.email || touched.email} </p>

            <textarea
              placeholder="Description"
              className="FooterInp"
              type='text'
              value={values.Description}
              onChange={(e)=>setFieldValue("Description",e.target.value)}
            ></textarea>

            {loader? <div className='FooterBtn FooterLoading'><BarLoader color="#FFFFFF" /> </div>:<button className="FooterBtn"  onClick={submitForm}>Submit</button>}
          </div>
          {/* <BarLoader color="#FFFFFF" />  */}
         
          <div className="FooterAbout" >
          <h1 className="FooterAboutHeading FooterHeadding fontFamily" id="About">About Us</h1>
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
      <PostApi formData={formData} setFormData={setFormData} setLOader = {setLOader} />
    </footer>
  );
}

export default FooterSection;
