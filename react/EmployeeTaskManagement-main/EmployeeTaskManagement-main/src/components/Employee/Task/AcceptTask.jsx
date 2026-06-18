import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AcceptTask = ({ task }) => {
  const [UserData, setUserData] = useContext(AuthContext);
  const loggedInuserData = JSON.parse(localStorage.getItem("authToken"));

  const [Message, SetMessage] = useState(false);
  const CompleteTask = () => {
    const UpdateEmployee = UserData.map((emp) => {
      if (emp.id == loggedInuserData.data.id) {
        const UpdateTasks = emp.tasks.map((tsk) => {
          if (tsk.id.toLowerCase() == task.id) {
            tsk.completed = true;
            tsk.active = false;
          }
          return tsk;
        });
        emp.tasknumbers.complete = emp.tasknumbers.complete + 1;
        emp.tasknumbers.active = emp.tasknumbers.complete - 1;

        return { ...emp, tasks: UpdateTasks };
      }
      return emp;
    });
    console.log(UpdateEmployee);
    const UpdateEmp = UpdateEmployee.find(
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
  };
  const FailedTask = () => {
    const UpdateEmployee = UserData.map((emp) => {
      if (emp.id == loggedInuserData.data.id) {
        const UpdateTasks = emp.tasks.map((tsk) => {
          if (tsk.id.toLowerCase() == task.id) {
            tsk.completed = false;
            tsk.active = false;
            tsk.failed = true;
          }
          return tsk;
        });
        emp.tasknumbers.complete = emp.tasknumbers.complete + 1;
        emp.tasknumbers.active = emp.tasknumbers.complete - 1;

        return { ...emp, tasks: UpdateTasks };
      }
      return emp;
    });
    console.log(UpdateEmployee);
    const UpdateEmp = UpdateEmployee.find(
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
  };
  return (
    <div id="task" className="overflow-hidden  rounded-md  overflow-y-scroll h-[400px] border-[2px] bg-purple-200 border-black border-dashed shadow-[4px_4px_0px_black]">
      <div className=" w-[350px] flex-shrink-0  text-black p-6  space-y-6">
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
            className="bg-green-400 px-2 py-1 rounded"
            onClick={CompleteTask}
          >
            Complete
          </button>

          <button className="bg-red-700 px-2 py-1 rounded" onClick={FailedTask}>
            Failed
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptTask;
