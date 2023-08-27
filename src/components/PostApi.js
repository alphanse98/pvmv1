import React, { useEffect, useCallback } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { fromActiveAction } from "../Redux/Slice";

const PostApi = ({ formData, setFormData, setLoader }) => {
  const dispatch = useDispatch();

  const getResponse = useCallback(() => {
    dispatch(fromActiveAction(false));
    toast.success("done", {
      position: "top-right",
    });
    setFormData("");
    setLoader(false);
  }, [dispatch, setFormData, setLoader]);

  // Wrap handleClick with useCallback to maintain its reference
  const handleClick = useCallback(async () => {
    try {
      const response = await axios.post(
        "https://api.planmydesign.com/api/user",
        // "http://localhost:4000/api/user",
        formData
        // formData
      );
      getResponse(response.data);
    } catch (error) {
      console.log(error);
      toast.error("error", {
        position: "top-right",
      });
      dispatch(fromActiveAction(false));
      setFormData("");
      // setLoader(false);
    }
  }, [formData, dispatch, setFormData, getResponse]);

  useEffect(() => {
    if (formData) {
      handleClick();
    }
  }, [formData, handleClick]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default PostApi;
