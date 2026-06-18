import React, { useContext } from "react";
import AcceptTask from "./AcceptTask";
import CompletedTask from "./CompletedTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import { AuthContext } from "../../../context/AuthProvider";

const TaskList = () => {
  const [UserData, setUserData] = useContext(AuthContext);
  const loggedInuserData = JSON.parse(localStorage.getItem("authToken"));

    const data=UserData && UserData.find(e=>e.id==loggedInuserData.data.id)
  
  // const loggedInuserData = JSON.parse(localStorage.getItem("authToken"));
  // const data = loggedInuserData.data;
  return (
    <div
      id="tasklist"
      className="flex justify-start items-center  py-5 gap-6  overflow-x-scroll h-fit mx-2  mt-10"
    >
      {data &&
        data.tasks.map((elem,index) => {
          if (elem.newtask) {
           
            return  <NewTask key={index} task={elem}></NewTask>;
          }
          
          if (elem.active) {
            return <AcceptTask key={index} task={elem}></AcceptTask>;
          }
          if (elem.completed) {
            return <CompletedTask key={index} task={elem}></CompletedTask>;
          }
          if (elem.failed) {
           return <FailedTask key={index} task={elem}></FailedTask>;
          }
        })}
    </div>
  );
};

export default TaskList;
