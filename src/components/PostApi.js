import React, { useEffect } from 'react'
import axios from 'axios';

const PostApi = ({formData, setFromActive}) => {

    // response is ok then close the popup using setFromActive 
    const getResponse = (param)=>{
        console.log(param,'getResponse')
       if(setFromActive) setFromActive(false)
    }

    // call handleClick for api post 
    const handleClick = async () => {
        try {
          const response = await axios.post(
            "https://pvm-rl1b.onrender.com/api/postusers",formData);
            getResponse(response.data,); 
        } catch (error) {
          console.error(error);
        }
    };

    //call handleClick baced on the formData state uptade 
    useEffect(()=>{
        if(formData)handleClick()
    },[formData])
}

export default PostApi