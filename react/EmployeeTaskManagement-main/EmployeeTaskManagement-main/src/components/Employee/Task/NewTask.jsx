import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import axios from "axios";

const NewTask = ({ task }) => {
  const [UserData, setUserData] = useContext(AuthContext);
  const loggedInuserData = JSON.parse(localStorage.getItem("authToken"));

  const [Message, SetMessage] = useState(false);
  // const data =
  //   UserData && UserData.find((e) => e.id == loggedInuserData.data.id);

  const AcceptTask = () => {
    const UpdatedEmployee = UserData.map((emp) => {
      if (emp.id == loggedInuserData.data.id) {
        const updatedtask = emp.tasks.map((tsk) => {
          if (tsk.id.toLowerCase() == task.id.toLowerCase()) {
            tsk.active = true;
            tsk.newtask = false;
            // return { ...tsk, newtask: false, active: true };
          }
          return tsk;
        });
        emp.tasknumbers.newtask = emp.tasknumbers.newtask - 1;

        emp.tasknumbers.active = emp.tasknumbers.active + 1;
        return { ...emp, tasks: updatedtask };
      }
      return emp;
    });
    //console.log(UpdatedEmployee.find(e=>e.id==loggedInuserData.data.id))
    console.log(UpdatedEmployee);
    const UpdateEmp = UpdatedEmployee.find(
      (e) => e.id == loggedInuserData.data.id
    );
    axios
      .put(
        `http://localhost:8000/employees/${loggedInuserData.data.id}`,
        UpdateEmp
      )
      .then((response) => {
        SetMessage(true);
        const msgtime = setTimeout(() => {
          SetMessage(false);
        }, 2000);
      });

    // const taskupdate = data.tasks.find(
    //   (e) => e.id.toLowerCase() == task.id.toLowerCase()
    // );
    // taskupdate.active=true;
    // taskupdate.newtask=false;
  };
  return (
    <div id="task" className="overflow-hidden overflow-y-scroll h-[400px] border-[2px]  bg-yellow-200 rounded-md   border-black border-dashed shadow-[4px_4px_0px_black]">
      {/* {Message && (
        <div className="absolute z-999 h-screen w-full overflow-hidden top-0 backdrop-blur text-center">
          <div className=" bg-emerald-400/50 translate-y-[400px] translate-x-[500px] w-[500px] py-4 text-white">
            You accepted task!
          </div>
        </div>
      )} */}
      <div className="h-full w-[350px] flex-shrink-0   text-black p-6  space-y-6">
        <div className=" flex justify-between items-center">
          <h3 className="bg-red-500 rounded-md  px-3 py-2 text-xs">
            {task.Priority}
          </h3>
          <h3>{task.Date}</h3>
        </div>
        <div>
          <h1 className="text-3xl font-semibold ">{task.Title}</h1>
          <p className="mt-5">{task.Description}</p>
        </div>
        <div className="text-black flex space-x-5">
          <button
            className="bg-blue-400 px-2 py-1 rounded"
            onClick={AcceptTask}
          >
            Accept
          </button>
          {/* 
          <button>Declined</button> */}
        </div>
      </div>
    </div>
  );
};

export default NewTask;
