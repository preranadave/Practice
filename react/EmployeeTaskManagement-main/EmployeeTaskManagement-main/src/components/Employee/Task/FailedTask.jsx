import React from "react";

const FailedTask = ({task}) => {
  return (
    <div>
      <div className="h-[400px] w-[350px] flex-shrink-0 rounded-md border-[2px] border-black border-dashed shadow-[4px_4px_0px_black] bg-red-300 text-black p-6  space-y-6">
      <div className=" flex justify-between items-center">
          <h3 className="bg-red-500 rounded-md  px-3 py-2 text-xs">{task.Priority}</h3>
          <h3>{task.Date}</h3>
        </div>
        <div>
          <h1 className="text-3xl font-semibold ">{task.Title}</h1>
          <p className="mt-5">
           {task.Description}
          </p>
        </div>
        <div className="text-black flex space-x-5">
        <button className="bg-pink-500-400 px-2 py-1 rounded">Failed</button>

        </div>
      </div>
    </div>
  );
};

export default FailedTask;
