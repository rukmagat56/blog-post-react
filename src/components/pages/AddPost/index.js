import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

const AddPost = () => {
  const user = localStorage.getItem("user");
  const formik = useFormik({
    // Initial values name must be same as input field name
    initialValues: {
      title: "",
      content: "",
    },

    // Validation Schema
    //object value should be same as initial values
    validationSchema: Yup.object({
      title: Yup.string().required(),
      content: Yup.string().required(),
    }),

    // On Submit
    onSubmit: (data) => {
      const { token } = JSON.parse(user); //converting string into json format
      const headers = {
        'Accept':'application/json',
        'Content-Type':'application/json',
        Authoriztion: `Bearer ${token}`, //configuration
      };
      // const post={
      //   ...data,  // all input value
      //   status:'publish'
      // };
      axios
        .post(`${process.env.REACT_APP_API_ROOT}/posts`, data, {
          headers: headers,
        })
        .then((res) => {
          console.log("res", res);
        })
        .catch((err) => {
          console.log("err", err);
        });
      console.log("data", data);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="addpos w-2/3 m-auto flex flex-column  mt-4 text-center bg-green-400 p-8  rounded-3xl">
          <div className="Title flex flex-column ">
            <label for="title" className="mt-3 mb-3 font-bold text-2xl">
              Title
            </label>
            <input
              type="text"
              className="shadow-lg  border-solid bg-cyan-50 p-3 rounded-lg "
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
            />
          </div>
          <div className="content flex flex-column mt-3">
            <lable for="content" className="mt-3 mb-3 font-bold text-2xl">
              Content
            </lable>
            <textarea
              rows={3}
              className="shadow-lg  border-solid bg-cyan-50 p-3  rounded-lg"
              name="content"
              value={formik.values.content}
              onChange={formik.handleChange}
            ></textarea>
          </div>
          <input
            type="submit"
            className="mt-4 bg-blue-600 w-fit px-3 py-1 text-2xl rounded text-white m-auto"
            value="submit"
          />
        </div>
      </form>
    </>
  );
};
export default AddPost;
