import React from "react";

const CompletedTask = ({ task }) => {
  return (
    <div>
      <div className="h-[400px] w-[350px] flex-shrink-0 rounded-md bg-green-200 border-[2px] border-black border-dashed shadow-[4px_4px_0px_black] text-black p-6  space-y-6">
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
        <div className="text-white flex space-x-5">
          <button className="bg-orange-400 px-2 py-1 rounded">Completed</button>

          {/* <button>Failed</button>  */}
        </div>
      </div>
    </div>
  );
};

export default CompletedTask;
