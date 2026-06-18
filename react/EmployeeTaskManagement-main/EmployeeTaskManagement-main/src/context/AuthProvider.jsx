import React, { createContext, useEffect, useState } from "react";
import { GetLocalStorage } from "../utils/LocalStorage";
import axios from "axios";

export const AuthContext = createContext();
// localStorage.clear();
const AuthProvider = ({ children }) => {
  const [UserData, setUserData] = useState(null);

  const [AdminData, setAdminData] = useState(null);

  
  useEffect(() => {
    axios.get("http://localhost:8000/employees").then((response)=>{
      setUserData(response.data)
    })
  },[UserData]);
  
  useEffect(() => {
    axios.get("http://localhost:8000/admin").then((response)=>{
      setAdminData(response.data)
    })
  },[AdminData]);

  return (
    <div>
      <AuthContext.Provider value={[UserData,setUserData,AdminData,setAdminData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
