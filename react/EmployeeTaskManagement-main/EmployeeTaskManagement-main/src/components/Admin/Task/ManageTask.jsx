import React from "react";
import CreateTaskForm from "./CreateTaskForm";
import AllTaskList from "./AllTaskList";
import EmployeeHeader from "../../Employee/Dashboard/EmployeeHeader";

const ManageTask = (props) => {
  return (
    <div className="py-2 px-10 bg-black h-fit w-full">
      {/* <EmployeeHeader
        changeUser={props.changeUser}
        data={props.data}
      ></EmployeeHeader> */}
      <CreateTaskForm></CreateTaskForm>
      <AllTaskList></AllTaskList>
    </div>
  );
};

export default ManageTask;
