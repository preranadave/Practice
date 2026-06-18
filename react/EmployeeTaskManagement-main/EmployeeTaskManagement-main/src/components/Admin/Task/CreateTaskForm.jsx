import React, { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import { GetLocalStorage } from "../../../utils/LocalStorage";
import axios from "axios";
import { v4 as uuid } from "uuid";

const CreateTaskForm = () => {
  function getUID() {
    // Get the timestamp and convert
    // it into alphanumeric input
    return Date.now().toString(36);
  }
  const [UserData, setUserData] = useContext(AuthContext);
  const [AssignToID, setAssignToID] = useState("");

  const [Message, SetMessage] = useState(false);
  // const [UpdateEmployee, setUpdateEmployee] = useState({});
  const [AssignError, setAssignError] = useState(false);
  const [Newtask, setNewtask] = useState({
    id: "",
    active: false,
    newtask: true,
    completed: false,
    failed: false,
    Title: "",
    Description: "",
    Date: "",
    Category: "",
    Priority: "",
  });

  const CheckAssignedID = (e) => {
    e.preventDefault();
    if (AssignToID == "" || AssignToID == undefined) {
      setAssignError(true);
    } else {
      SubmitTask();
    }
  };

  const SubmitTask = async () => {
    Newtask.id = uuid();
    const taskToAdd = {
      ...Newtask,
    };
    const Employees = await UserData.map((element) => {
      if (element.id == AssignToID) {
        return {
          ...element,
          tasks: [...element.tasks, taskToAdd],
        };
      }
      return element;
    });
    const UpdateEmp = Employees.find((e) => e.id == AssignToID);
    UpdateEmp.tasknumbers.newtask = UpdateEmp.tasknumbers.newtask + 1;
    axios
      .put(`http://localhost:8000/employees/${AssignToID}`, UpdateEmp)
      .then((response) => {
        SetMessage(true);
        const msgtime = setTimeout(() => {
          SetMessage(false);
        }, 2000);
      });
  };
  return (
    <>
    <h1 className="text-emerald-400 text-3xl  text-center font-semibold my-2 mb-5">Create Task</h1>
    <div className="text-white bg-[#1c1c1c] px-10 py-2 ">
     
      {Message && (
        <h1 className=" text-center bg-emerald-400/50 text-white">
          Created Task
        </h1>
      )}
      <form
        onSubmit={(e) => {
          CheckAssignedID(e);
        }}
        className="w-full flex flex-wrap items-start justify-between"
      >
        <div className="w-1/2">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h3>Task Title</h3>
              <input
                value={Newtask.Title}
                onChange={(e) =>
                  setNewtask({ ...Newtask, Title: e.target.value })
                }
                type="text"
                name=""
                id=""
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
            <div className="space-y-3">
              <h3>Date</h3>
              <input
                value={Newtask.Date}
                onChange={(e) =>
                  setNewtask({ ...Newtask, Date: e.target.value })
                }
                type="date"
                name=""
                id=""
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
            <div className="space-y-3">
              {AssignError && (
                <h3 className={`text-red-500 text-xs`}>
                  Please Select Employee!
                </h3>
              )}
              <h3>Assign To *</h3>
              <select
                name=""
                id=""
                value={AssignToID}
                onChange={(e) => setAssignToID(e.target.value)}
                className="bg-transparent border-[1px] border-gray-400 w-4/5 p-2"
              >
                <option className="text-gray-500" value="" selected disabled>
                  Select Employee
                </option>

                {UserData &&
                  UserData.map((item) => {
                    if (item.name != "admin") {
                      return (
                        <option
                          value={item.id}
                          className="bg-black border-none"
                        >
                          <span>{item.name}</span>
                        </option>
                      );
                    }
                  })}
              </select>
              {/* <input
                value={tasskAssignto}
                onChange={(e) => {
                  settasskAssignto(e.target.value);
                }}
                type="text"
                name=""
                id=""
                placeholder="Employee Name"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              /> */}
            </div>
            <div className="space-y-3">
              <h3>Category</h3>
              <input
                value={Newtask.Category}
                onChange={(e) =>
                  setNewtask({ ...Newtask, Category: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="design,dev etc."
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
            <div className="space-y-3">
              <h3>Priority</h3>
              <input
                value={Newtask.Priority}
                onChange={(e) =>
                  setNewtask({ ...Newtask, Priority: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="high,low,medium"
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="flex flex-col items-start gap-8">
            <h3>Description</h3>
            <textarea
              value={Newtask.Description}
              onChange={(e) =>
                setNewtask({ ...Newtask, Description: e.target.value })
              }
              name=""
              id=""
              cols="65"
              rows="10"
              className="text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></textarea>

            <button
              type="submit"
              className="w-full rounded-md bg-emerald-600 border-none outline-none px-4 py-2"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};

export default CreateTaskForm;
