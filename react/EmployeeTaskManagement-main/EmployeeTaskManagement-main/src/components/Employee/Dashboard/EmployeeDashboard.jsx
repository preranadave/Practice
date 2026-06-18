import React from "react";
import EmployeeHeader from "./EmployeeHeader";
import EmployeeTaskListCards from "./EmployeeTaskListCards";
import TaskList from "../Task/TaskList";
import Background from "../../../assets/images/paper-lines.webp"

const EmployeeDashboard = ({userLogout}) => {
  const HeroBgStyle = {
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "repeat",
    width: "100%",
    position: "relative",
  };
  return (
    <div className="p-4 h-screen" style={HeroBgStyle}>
      {/* <EmployeeHeader userLogout={userLogout} /> */}
      <EmployeeTaskListCards></EmployeeTaskListCards>
      <TaskList></TaskList>
    </div>
  );
};

export default EmployeeDashboard;
