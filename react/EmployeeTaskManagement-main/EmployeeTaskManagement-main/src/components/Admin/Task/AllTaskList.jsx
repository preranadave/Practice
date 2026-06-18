import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllTaskList = () => {
  const [UserData, setUserData] = useContext(AuthContext);

  const [isExpanded, setExpanded] = useState(true);
  const toggleExpand = () => {
    isExpanded ? setExpanded(false) : setExpanded(true);
  };
  return (
    <div className="bg-[#1c1c1c] space-y-2  p-5 rounded mt-5">
      {/* <div className="bg-emerald-600 py-2 px-4 flex justify-evenly items-center rounded-md text-white">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">Tasks</h3>
        <h3 className="w-1/5">New</h3>
        <h3 className="w-1/5">Active</h3>
        <h3 className="w-1/5">Completed</h3>
        <h3 className="w-1/5">Failed</h3>
      </div> */}

      {
        UserData &&
          UserData.map((employee) => (
            <div key={employee.id}>
              <div
                className="bg-emerald-600 py-2 px-4 flex  items-center rounded-md text-white"
                onClick={toggleExpand}
              >
                <h2>{employee.name}</h2>
              </div>
             <div
                className={`text-sm leading-6 my-3 transition-all duration-500 border-[1px] border-emerald-300 py-2 mt-2 px-2 flex-col gap-32 items-center rounded-md text-white ${
                  isExpanded
                    ? "opacity-100 max-h-[280px]"
                    : "opacity-0 max-h-[0px]"
                }`}
              > {employee.tasks.length!=0?
                <ul className="gap-5 flex items-center">
                  {employee.tasks.map((task) => (
                    <li key={task.id} className="bg-blue-800 rounded px-3 py-2">
                      <strong>{task.Title}</strong>
                    </li>
                  ))}
                </ul>:"no task"}
              </div>
              
            </div>
          ))
        // return (
        //   <div className="border-[1px] border-emerald-300 py-2 px-4 flex justify-between items-center rounded-md text-white">
        //     <h2 className="w-1/5">{elem.name}</h2>
        //     <h3 className="w-1/5">{elem.tasknumbers.newtask}</h3>
        //     <h3 className="w-1/5">{elem.tasknumbers.active}</h3>
        //     <h3 className="w-1/5">{elem.tasknumbers.completed}</h3>
        //     <h3 className="w-1/5">{elem.tasknumbers.failed}</h3>
        //   </div>
        // );
      }
    </div>
  );
};

export default AllTaskList;
