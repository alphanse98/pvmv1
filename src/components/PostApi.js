import React, { useEffect } from 'react'
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fromActiveAction } from "../Redux/Slice";



const PostApi = ({formData,setFormData}) => {
  const dispatch = useDispatch()

    // response is ok then close the popup using setFromActive 
    const getResponse = (param)=>{
      console.log(param,'response')
      dispatch(fromActiveAction(false))
      // notification
      toast.success('done', {
        position: "top-right",
      }); 
      //clear user data
      setFormData('')
    }

    // call handleClick for api post 
    const handleClick = async () => {
        try {
          const response = await axios.post(
            "https://pvm-rl1b.onrender.com/api/postusers",formData);
            getResponse(response.data,); 
        } catch (error) {
          console.log(error);
          //error notification
          toast.error('error', {
            position: "top-right",
          });
          dispatch(fromActiveAction(false))
          //clear user data
          setFormData('')
        }
    };

    //call handleClick baced on the formData state uptade 
    useEffect(()=>{
        if(formData)handleClick()
    },[formData])

   return(
    <>
    <ToastContainer/>
    </>
   ) 
}

export default PostApi