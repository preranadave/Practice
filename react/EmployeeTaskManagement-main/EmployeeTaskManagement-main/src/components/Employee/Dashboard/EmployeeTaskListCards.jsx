import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const EmployeeTaskListCards = () => {
  const [UserData, setUserData] = useContext(AuthContext);
  const loggedInuserData = JSON.parse(localStorage.getItem("authToken"));

    const data=UserData && UserData.find(e=>e.id==loggedInuserData.data.id)
  
  //console.log(UserData);
//   const loggedInuserData = JSON.parse(localStorage.getItem("authToken"));
//   const data = loggedInuserData.data;
  return (
    <div className="flex items-center gap-5 mt-10 mx-2 ">
      <div className="bg-blue-200 border-[2px]  border-black border-dashed shadow-[4px_4px_0px_black] w-[45%] rounded-xl py-6 px-9">
        <h1 className=" text-4xl font-bold">
          {data && data.tasknumbers.newtask}
        </h1>
        <h3 className=" text-xl font-semibold">New Task</h3>
      </div>
      <div className="bg-green-200 border-[2px]  border-black border-dashed shadow-[4px_4px_0px_black] w-[45%] rounded-xl py-6 px-9">
        <h1 className=" text-4xl font-bold">
          {data && data.tasknumbers.completed}
        </h1>
        <h3 className=" text-xl font-semibold">Completed Task</h3>
      </div>
      <div className="bg-yellow-200 border-[2px]  border-black border-dashed shadow-[4px_4px_0px_black] w-[45%] rounded-xl py-6 px-9">
        <h1 className=" text-4xl font-bold">
          {data && data.tasknumbers.active}
        </h1>
        <h3 className=" text-xl font-semibold">Accepted Task</h3>
      </div>

      <div className="bg-red-200 border-[2px]  border-black border-dashed shadow-[4px_4px_0px_black] w-[45%] rounded-xl py-6 px-9">
        <h1 className=" text-4xl font-bold">
          {data && data.tasknumbers.failed}
        </h1>
        <h3 className=" text-xl font-semibold">Failed Task</h3>
      </div>
    </div>
  );
};

export default EmployeeTaskListCards;
