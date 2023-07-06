import React, { useState } from "react";
import poppupicon from "../assets/popupicon.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import PostApi from "./PostApi";
import { useDispatch, useSelector } from "react-redux";
import { fromActiveAction } from "../Redux/Slice";




const PopPupForm = () => {
  // const [fromActive, setFromActive] = useState(false);
  const fromActive = useSelector((state) => state.fromActiveStore.fromActive);
  const dispatch = useDispatch()


  const [formData, setFormData] = useState();

  const uservalidation = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    mobile: Yup.string()
      .min(10, "Phone number must be at least 10 characters")
      .max(10, "Phone number must be at most 10 characters")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    Description: Yup.string(),
  });

  const userData = { name: "", mobile: "", email: "", Description: "" };

  return (
    <div>
      {/* poppup icon */}
      <img
        src={poppupicon}
        className="popupicon"
        onClick={() => dispatch(fromActiveAction(true))}
        alt="im"
      ></img>
      {/* form popup */}
      {fromActive && (
        <div className="fromActive">
          <div className="formBox">
            <p className="serviceHeading fontFamily">Contact Now !</p>
            <Formik
              initialValues={userData}
              validationSchema={uservalidation}
              onSubmit={(param) => {
                setFormData(param);
              }}
            >
              {({ errors, touched, values, setFieldValue, submitForm }) => (
                <>
                  <input
                    placeholder="Name"
                    className="formInpit"
                    type="text"
                    value={values.name}
                    onChange={(e) => setFieldValue("name", e.target.value)}
                  ></input>
                  <p className="popupError fontFamily">
                    {errors.name || touched.name}{" "}
                  </p>
                  <input
                    placeholder="Phone Number"
                    type="number"
                    className="formInpit"
                    value={values.mobile}
                    onChange={(e) => setFieldValue("mobile", e.target.value)}
                  ></input>
                  <p className="popupError fontFamily">
                    {errors.mobile || touched.mobile}{" "}
                  </p>
                  <input
                    placeholder="Email"
                    className="formInpit"
                    type="Email"
                    value={values.email}
                    onChange={(e) => setFieldValue("email", e.target.value)}
                  ></input>
                  <p className="popupError fontFamily">
                    {errors.email || touched.email}{" "}
                  </p>

                  <textarea
                    placeholder="Description"
                    className="formInpit popupDescription"
                    type="text"
                    value={values.Description}
                    onChange={(e) =>
                      setFieldValue("Description", e.target.value)
                    }
                  ></textarea>

                  <button className="HeaderDownloadBtn " onClick={submitForm}>
                    Submit
                  </button>
                </>
              )}
            </Formik>
            <PostApi formData={formData} setFormData={setFormData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PopPupForm;
