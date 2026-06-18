import React from "react";
import EmployeeHeader from "../../Employee/Dashboard/EmployeeHeader";
import ManageTask from "../Task/ManageTask";

const AdminDashboard = (props) => {
  return (
    <div className="p-2 bg-black h-fit w-full">
      <ManageTask changeUser={props.changeUser} data={props.data}></ManageTask>
    </div>
  );
};

export default AdminDashboard;
