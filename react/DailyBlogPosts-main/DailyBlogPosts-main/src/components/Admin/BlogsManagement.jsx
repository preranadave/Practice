import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteBlog from "./DeleteBlog";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
const BlogsManagement = () => {
  const navigate = useNavigate();
  const [blogData, setblogData] = useState([]);
  const [DeleteMessage, setDeleteMessage] = useState(false);

  // Sample data
  // const blogData = [
  //   { id: 1, title: 'Blog 1', description: 'Description 1', abstract: 'Abstract 1', image: 'image1.jpg', isActive: true, createdAt: '2024-01-01', updatedAt: '2024-01-01', createdBy: 'Admin', updatedBy: 'Admin' },
  //   { id: 2, title: 'Blog 2', description: 'Description 2', abstract: 'Abstract 2', image: 'image2.jpg', isActive: false, createdAt: '2024-01-02', updatedAt: '2024-01-02', createdBy: 'Admin', updatedBy: 'Admin' },
  //   { id: 3, title: 'Blog 3', description: 'Description 3', abstract: 'Abstract 3', image: 'image3.jpg', isActive: true, createdAt: '2024-01-03', updatedAt: '2024-01-03', createdBy: 'Admin', updatedBy: 'Admin' },
  //   { id: 4, title: 'Blog 4', description: 'Description 4', abstract: 'Abstract 4', image: 'image4.jpg', isActive: false, createdAt: '2024-01-04', updatedAt: '2024-01-04', createdBy: 'Admin', updatedBy: 'Admin' },
  //   { id: 5, title: 'Blog 5', description: 'Description 5', abstract: 'Abstract 5', image: 'image5.jpg', isActive: true, createdAt: '2024-01-05', updatedAt: '2024-01-05', createdBy: 'Admin', updatedBy: 'Admin' },
  //   // Add more data here...
  // ];
  useEffect(()=>{
    axios.get("http://localhost:8001/blogs").then((response) => {
      setblogData(response.data);
    });
  },[])
  

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3;

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogData.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogData.length / postsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const HandleDelete = (blog) => {
    axios.delete(`http://localhost:8001/blogs/${blog.id}`).then(() => {
      setDeleteMessage(true);

      setTimeout(() => {
        setDeleteMessage(false);
      }, 2000);
    });
  };

  return (
    <div className="overflow-x-hidden  overflow-y-auto p-5">
      <div
        className={`bg-red-100 border-[1px] border-red-600 p-2 px-10 absolute rounded-lg shadow-lg top-0 left-[50%] transition-all ease-in-out duration-700 z-[-20] ${
          DeleteMessage ? "top-[15%] opacity-100 z-20" : "top-0 opacity-0"
        }`}
      >
        Blog Deleted Successfully!
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md my-5 "
        onClick={() => {
          navigate("/admin/add-blog");
        }}
      >
        Add Blog
      </button>
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="px-4 py-2 text-left">Serial Number</th>
            <th className="px-4 py-2 text-left">Blog Title</th>
            {/* <th className="px-4 py-2 text-left">Blog Description</th> */}
            <th className="px-4 py-2 text-left">Blog Abstract</th>
            <th className="px-4 py-2 text-left">Blog Image</th>
            <th className="px-4 py-2 text-left">IsActive</th>
            <th className="px-4 py-2 text-left">CreatedAt</th>
            <th className="px-4 py-2 text-left">UpdatedAt</th>
            <th className="px-4 py-2 text-left">CreatedBy</th>
            <th className="px-4 py-2 text-left">UpdatedBy</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((blog, index) => (
            <tr key={blog.id} className="border-b border-gray-200">
              <td className="px-4 py-2">{indexOfFirstPost + index + 1}</td>
              <td className="px-4 py-2">{blog.title}</td>
              {/* <td className="px-4 py-2">{blog.description}</td> */}
              <td className="px-4 py-2">{blog.abstract}</td>
              <td className="px-4 py-2">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-12 h-12 object-cover rounded"
                />
              </td>
              <td className="px-4 py-2">
                {blog.isActive ? "Active" : "Inactive"}
              </td>
              <td className="px-4 py-2">{blog.createdAt}</td>
              <td className="px-4 py-2">{blog.updatedAt}</td>
              <td className="px-4 py-2">{blog.createdBy}</td>
              <td className="px-4 py-2">{blog.updatedBy}</td>
              <td className="">
                <button
                  className="border-none outline-none  text-white  py-2 bg-blue-600 px-2 text-xs me-2 rounded-md " 
                  onClick={() => {
                    navigate(`/admin/update-blog/${blog.id}`);
                  }}
                >
                  <FaPencil />
                </button>
                <button
                  className="border-none outline-none  bg-red-400 text-white py-2 px-2 text-xs rounded-md"
                  onClick={() => {
                    HandleDelete(blog);
                  }}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogsManagement;
