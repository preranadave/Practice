import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteBlog = ({onLoad,ishide}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Message, SetMessage] = useState(false);
  useEffect(() => {
    axios.delete(`http://localhost:8001/blogs/${id}`).then(() => {
      SetMessage(true);

      setTimeout(() => {
        SetMessage(false);

       // props.onHide();
        onLoad();
        navigate("/admin/blog-management");
      }, 2000);
    });
  });
  return (
    <div
      className={`bg-red-100 border-[1px] border-red-600 p-2 px-10 absolute rounded-lg shadow-lg top-0 left-[50%] transition-all ease-in-out duration-700 z-[-20] ${
        Message ? "top-[15%] opacity-100 z-20" : "top-0 opacity-0"
      }`}
    >
      Blog Deleted Successfully!
    </div>
  );
};

export default DeleteBlog;
