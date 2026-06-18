import axios from "axios";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
const AddBlog = () => {
  const [Message, SetMessage] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    abstract: "",
    image: "",
    isActive: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    createdBy: "Admin", // Hardcoded for now
    updatedBy: "Admin", // Hardcoded for now
  });
  const [FormErrors, SetErrors] = useState({});

  const handleDescriptionChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      description: value,
    }));
  };

  // Handle image file input
  const handleImageChange = (e) => {
    // const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let FormvalidtionErrors = {};

    if (formData.title == "" || formData.title == undefined) {
      FormvalidtionErrors.title = "Please Enter Title";
    }
    if (formData.abstract == "" || formData.abstract == undefined) {
      FormvalidtionErrors.abstract = "Please Enter Abstract";
    }
    if (formData.description == "" || formData.description == undefined) {
      FormvalidtionErrors.description = "Please Enter Description";
    }

    if (formData.image == "" || formData.image == undefined) {
      FormvalidtionErrors.image = "Please Enter Image URL";
    }
    SetErrors(FormvalidtionErrors);
    if (Object.keys(FormvalidtionErrors).length == 0) {
      AddBlog();
    }
  };
  const AddBlog = () => {
    console.log(formData);
    
     axios.post("http://localhost:8001/blogs",formData).then((response) => {
        SetMessage(true)
        setTimeout(() => {
            SetMessage(false);
          }, 2000);
     });
     setFormData({ title: "",
      description: "",
      abstract: "",
      image: "",
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      createdBy: "Admin", // Hardcoded for now
      updatedBy: "Admin", // Hardcoded for now
     })
  };
  return (
    <>
    <div className={`bg-green-100 border-[1px] border-green-600 p-2 px-10 absolute rounded-lg shadow-lg top-0 left-[50%] transition-all ease-in-out duration-700 z-[-20] ${Message ? 'top-[15%] opacity-100 z-40':'top-0 opacity-0'}`}>
    Blog Created Successfully!
    </div>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md my-10">
        <h2 className="text-2xl font-semibold mb-4">Create Blog</h2>
        <form onSubmit={handleSubmit}>
          {/* Blog Title */}
          <div className="mb-4">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Title
              </label>
              {FormErrors.title && (
                <h3 className={`text-red-500 text-xs`}> {FormErrors.title}</h3>
              )}
            </div>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Blog Abstract */}
          <div className="mb-4">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="abstract"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Abstract
              </label>
              <span>
                {FormErrors.abstract && (
                  <h3 className={`text-red-500 text-xs`}>
                    {" "}
                    {FormErrors.abstract}
                  </h3>
                )}
              </span>
            </div>
            <textarea
              id="abstract"
              name="abstract"
              value={formData.abstract}
              onChange={(e) =>
                setFormData({ ...formData, abstract: e.target.value })
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Blog Description (Rich Text Editor) */}
          <div className="mb-4">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Description
              </label>
              {FormErrors.description && (
                <h3 className={`text-red-500 text-xs`}>
                  {" "}
                  {FormErrors.description}
                </h3>
              )}
            </div>
            <ReactQuill
              value={formData.description}
              onChange={handleDescriptionChange}
              className="mt-1 w-full border border-gray-300 rounded-md"
              theme="snow"
              required
            />
          </div>

          {/* Blog Image */}
          <div className="mb-4">
            <div className="flex gap-2 items-center">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Blog Image
              </label>
              {FormErrors.image && (
                <h3 className={`text-red-500 text-xs`}> {FormErrors.image}</h3>
              )}
            </div>
            <input
              type="url"
              id="image"
              name="image"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            />
            {formData.image != "" && (
              <div className="my-2">
                <img
                  src={formData.image != "" && formData.image}
                  alt="BlogImage"
                  style={{ width: 100 }}
                  className="mb-2"
                />
              </div>
            )}
          </div>

          {/* Is Active */}
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={(e) =>
                  setFormData({ ...formData, isActive: e.target.checked })
                }
                className="mr-2"
              />
              <span className="text-sm text-gray-700">Is Active</span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBlog;
