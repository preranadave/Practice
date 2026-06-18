import React from "react";
import { useNavigate } from "react-router-dom";
const EmployeeHeader = (props) => {
  const loggedInuserData = JSON.parse(localStorage.getItem("authToken"));

  const data = loggedInuserData.data;
  const navigate = useNavigate();
  const LogOutUser = (e) => {
    // localStorage.setItem("Userlog", "");
    // window.location.reload()
    props.userLogout();
  };
  return (
    <>
      {loggedInuserData.role != "admin" ? (
        <div className="flex items-center justify-between bg-lime-100  py-2 my-3 px-14 border-[2px]  border-black border-dashed shadow-[4px_4px_0px_black] mx-2 rounded-md ">
          <h1 className="text-xl font-medium ">
            Hello <br />
            <span className="text-4xl font-semibold">{data.name}</span>
          </h1>
          <div className="flex space-x-2">
            {loggedInuserData.role == "admin" ? (
              <button
                onClick={() => navigate("/add-employee")}
                className="bg-emerald-500 border-none outline-none font-semibold rounded-lg px-4 py-3"
              >
                Add Employee
              </button>
            ) : (
              ""
            )}
            {loggedInuserData.role == "admin" ? (
              <button
                onClick={() => navigate("/create-task")}
                className="bg-blue-400 border-none outline-none font-semibold rounded-lg px-4 py-3"
              >
                Create Task
              </button>
            ) : (
              ""
            )}
            <button
              onClick={LogOutUser}
              className="outline-none border-[1px] bg-red-500/50 border-black border-dashed shadow-[4px_4px_0px_black] font-semibold rounded-lg px-4 py-3"
            >
              Log-Out
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-black h-[7vw] pt-5">
        <div className="flex items-center justify-between bg-emerald-600  py-2 px-14  mx-2 rounded-md ">
          <h1 className="text-xl font-medium ">
            Hello <br />
            <span className="text-4xl font-semibold">{data.name}</span>
          </h1>
          <div className="flex space-x-2">
            {loggedInuserData.role == "admin" ? (
              <button
                onClick={() => navigate("/add-employee")}
                className="bg-orange-500 border-none outline-none font-semibold rounded-lg px-4 py-3"
              >
                Add Employee
              </button>
            ) : (
              ""
            )}
            {loggedInuserData.role == "admin" ? (
              <button
                onClick={() => navigate("/create-task")}
                className="bg-blue-400 border-none outline-none font-semibold rounded-lg px-4 py-3"
              >
                Create Task
              </button>
            ) : (
              ""
            )}
            <button
              onClick={LogOutUser}
              className=" bg-red-500 border-none outline-none font-semibold rounded-lg px-4 py-3"
            >
              Log-Out
            </button>
          </div>
        </div>
        </div>
      )}
    </>
  );
};

export default EmployeeHeader;
