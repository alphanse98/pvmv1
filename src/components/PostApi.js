import React, { useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fromActiveAction } from "../Redux/Slice";

const PostApi = ({ formData, setFormData, setLOader }) => {
  const dispatch = useDispatch();

  // response is ok then close the popup using setFromActive
  // and clear form data and show toasting and close loading
  const getResponse = () => {
    dispatch(fromActiveAction(false));
    toast.success("done", {
      position: "top-right",
    });
    setFormData("");
    setLOader(false)
  };

  // call handleClick for api post
  const handleClick = async () => {
    try {
      const response = await axios.post(
        // "https://pvm-rl1b.onrender.com/api/postusers",
        "http://localhost:4000/api/user",
        formData
      );
      getResponse(response.data);
    } catch (error) {
      // if det error then close the popup using setFromActive
      // and clear form data and show toasting and close loading
      console.log(error);
      toast.error("error", {
        position: "top-right",
      });
      dispatch(fromActiveAction(false));
      setFormData("");
      setLOader(false)
    }
  };

  //call handleClick based on the formData state uptade
  useEffect(() => {
    if (formData) handleClick();
  }, [formData,]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default PostApi;
