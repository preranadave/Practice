import React, { useState } from "react";
import EmployeeHeader from "../../Employee/Dashboard/EmployeeHeader";
import axios from "axios";
import EmployeeList from "./EmployeeList";

const AddEmployee = () => {
  //   const [Email, setEmail] = useState("");
  //   const [Password, setPassword] = useState("");
  //   const [FirstName, setFirstName] = useState("");
  const [Employee, SetEmployee] = useState({
    name: "",
    email: "",
    Password: "123",
    tasknumbers: {},
    tasks: [],
  });
  const [Message, SetMessage] = useState(false);

  const AddEmployee = (e) => {
    e.preventDefault();

    Employee.tasknumbers.newtask = 0;

    Employee.tasknumbers.active = 0;
    Employee.tasknumbers.completed = 0;
    Employee.tasknumbers.failed = 0;
    axios.post("http://localhost:8000/employees", Employee).then((response) => {
      SetMessage(true);
      const msgtime = setTimeout(() => {
        SetMessage(false);
      }, 2000);
    });
    Employee.name = "";
    Employee.email = "";
  };
  return (
    <div className="bg-black h-screen px-10 pt-2">
      {/* <EmployeeHeader></EmployeeHeader> */}
        <h1 className="text-emerald-400 text-3xl  text-center font-semibold my-2 mb-5">Add Employee</h1>
      <div className="text-white bg-[#1c1c1c] px-10 py-5">
        {Message && (
          <h1 className=" text-center text-emerald-400">Added employee</h1>
        )}
        <form onSubmit={AddEmployee} className="w-1/2 mx-auto">
          <div className="flex flex-col gap-6">
            <div className="space-y-3">
              <h3>Email</h3>
              <input
                value={Employee.email}
                onChange={(e) =>
                  SetEmployee({ ...Employee, email: e.target.value })
                }
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
            <div className="space-y-3">
              <h3>First Name</h3>
              <input
                value={Employee.name}
                onChange={(e) =>
                  SetEmployee({ ...Employee, name: e.target.value })
                }
                type="text"
                name=""
                id=""
                placeholder="First Name"
                className="text-sm py-1 px-2 w-full rounded outline-none bg-transparent border-[1px] border-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-emerald-600 border-none outline-none px-4 py-2"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
      <EmployeeList></EmployeeList>
    </div>
  );
};

export default AddEmployee;
