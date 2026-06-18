import React, { useState } from "react";

export const Login = ({ HandleLogin }) => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();

    HandleLogin(Email, Password);
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="flex flex-col gap-12 items-center justify-center w-screen h-screen  ">
        <h1 className="text-center text-black-400 border-[2px]  border-black border-dashed shadow-[4px_4px_0px_black] px-3 py-2 text-3xl font-semibold">
          Employee Task Management System
        </h1>
        <form
          action=""
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="p-20 border-[2px]  border-black border-dashed shadow-[4px_4px_0px_black] flex flex-col space-y-5 rounded-md items-center justify-center"
        >
          <input
            required
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="rounded-full  bg-transparent border-2 outline-none border-black  px-5 py-2 placeholder:text-gray-300"
            placeholder="Email"
          />
          <input
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="rounded-full  bg-transparent border-2 outline-none border-black px-5 py-2 placeholder:text-gray-300"
            placeholder="Password"
          />

          <button className="hover:bg-emerald-400  font-semibold   border-black border-dashed shadow-[4px_4px_0px_black] text-black rounded-full  w-full py-2">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
