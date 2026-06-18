import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedPage, setSelectedPage] = useState("blogManagement");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-auto">
      {/* Sidebar */}
      {/* <div
        className={`transition-all duration-700 ease-in-out   ${
          isSidebarOpen ? "w-64" : "w-20"
        } bg-gray-800 text-white p-4`}
      >
        <div
          onClick={toggleSidebar}
          className={` p-5 relative  mb-6 focus:outline-none`}
        >
          <div className="flex flex-col">
            <span
              className={`w-[40px] h-[3px] bg-white absolute transition-all ease-in-out duration-700 left-0 right-0 top-[40%] bottom-0 ${
                isSidebarOpen ? "rotate-[140deg] top-[40%]" : ""
              }`}
            ></span>
            <span
              className={`w-[40px] h-[3px] bg-white absolute left-0 transition-all ease-in-out duration-700 right-0 top-[60%] bottom-0 ${
                isSidebarOpen ? "-rotate-[140deg] top-[1.1em]" : ""
              }`}
            ></span>
          </div>
        </div>
        {isSidebarOpen && (
          <div className={`transition-all ease-in-out  duration-1000 overflow-hidden ${isSidebarOpen?'w-full':'w-0'}`}>
            <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
            <ul>
            <Link to="/admin/blog-management" className=" ">
              <li
                className="cursor-pointer mb-4 hover:bg-gray-700 p-2"
                onClick={() => setSelectedPage("blogManagement")}
              >
                Blog Management
              </li>
              </Link>
              <li
                className="cursor-pointer mb-4 hover:bg-gray-700 p-2"
                onClick={() => setSelectedPage("settings")}
              >
                Settings
              </li>
            </ul>
          </div>
        )}
      </div> */}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 text-white p-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Blog Management</h1>
          <button className="bg-blue-500 px-4 py-2 rounded text-white">
            Logout
          </button>
        </header>
        <div className="">
          <Outlet></Outlet>
        </div>
        {/* Main Content */}
        {/* <div className="flex-1 p-6 overflow-y-auto">
            {selectedPage === 'blogManagement' && <BlogList />}
            {selectedPage === 'settings' && <div>Settings Page (Work in Progress)</div>}
          </div> */}
      </div>
    </div>
  );
};

export default AdminDashboard;
