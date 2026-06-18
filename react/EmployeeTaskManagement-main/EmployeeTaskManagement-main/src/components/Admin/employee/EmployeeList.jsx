import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const EmployeeList = () => {
  const [UserData, setUserData] = useContext(AuthContext);

//   const total =
//     UserData &&
//     UserData.tasknumbers.reduce((acc, obj) => {
//       return acc + obj.active + obj.completed + obj.newtask + obj.failed;
//     }, 0);

  //console.log(total);
  return (
    <div>
      <div className="bg-[#1c1c1c] space-y-2  p-5 rounded mt-5">
        <div className="bg-emerald-600 py-2 px-4 flex justify-between items-center rounded-md text-white">
          <h2 className="w-1/5">Employee Name</h2>
          <h3 className="w-1/5">Email</h3>
        </div>
        {UserData &&
          UserData.map((elem) => {
            return (
              <div className="border-[1px] border-emerald-300 py-2 px-4 flex justify-between items-center rounded-md text-white">
                <h2 className="w-1/5">{elem.name}</h2>
                <h3 className="w-1/5">{elem.email}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default EmployeeList;
