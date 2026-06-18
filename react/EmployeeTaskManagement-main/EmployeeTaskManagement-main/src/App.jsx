import { useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Login } from "./components/Auth/Login";
import EmployeeDashboard from "./components/Employee/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Admin/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";
import { SetLocalStorage } from "./utils/LocalStorage";
import {
  BrowserRouter,
  Link,
  Navigate,
  Route,
  Routes,
  redirect,
} from "react-router-dom";
import EmployeeHeader from "./components/Employee/Dashboard/EmployeeHeader";
import AddEmployee from "./components/Admin/employee/AddEmployee";
import ManageTask from "./components/Admin/Task/ManageTask";

function App() {
  // localStorage.clear()
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [UserData, setUserData,AdminData] = useContext(AuthContext);
  const [UserRole, setUserRole] = useState(null);
  // Check if the user is authenticated on mount
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    // Remove the token from localStorage and update the authentication state
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
  };
  const handleLogin = (email, password) => {

    // Simulate a login (in real-world, you'd call an API here)
    if (email == "admin@example.com" && password == "123") {
      if(AdminData)
      {
        const admin = AdminData.find(
          (e) => e.email == email && e.Password == password
        );
        if(admin)
        {

          setUserRole("admin");
          // Store the auth token in localStorage
          localStorage.setItem("authToken", JSON.stringify({role:"admin",data:admin}));
          setIsAuthenticated(true);
        }
      }
    } else if (UserData) {
      const employee = UserData.find(
        (e) => e.email == email && e.Password == password
      );
      if (employee) {
        setUserRole("employee");
        localStorage.setItem("authToken", JSON.stringify({role:"user",data:employee}));
        console.log(JSON.parse(localStorage.getItem("authToken")))
        setIsAuthenticated(true);
      }
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <BrowserRouter>
        <div>
          {isAuthenticated &&<EmployeeHeader userLogout={handleLogout}></EmployeeHeader>}
        </div>
        <Routes>
          <Route
            path="/login"
            element={isAuthenticated ? <Navigate to="/" /> : <Login HandleLogin={handleLogin}
            setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/"
            element={
              isAuthenticated ? (
                UserRole == "admin" ? (
                  <AdminDashboard />
                ) : (
                  <EmployeeDashboard userLogout={handleLogout}/>
                )
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/add-employee"
            element={isAuthenticated ? <AddEmployee></AddEmployee>  : <Navigate to="/login" />}
          />
          <Route
            path="/create-task"
            element={isAuthenticated ? <ManageTask></ManageTask>  : <Navigate to="/login" />}
          />
        </Routes>
      </BrowserRouter>
      {/* 
      {!localStorage.getItem("Userlog") ? (
        <Login HandleLoginRouting={HandleLoginRouting} />
      ) : (
        ""
      )}
      {UserRole == "admin" ? (
        <AdminDashboard
          changeUser={setUserRole}
          data={LoggedInUserData}
        ></AdminDashboard>
      ) : UserRole == "employee" ? (
        <EmployeeDashboard
          changeUser={setUserRole}
          data={LoggedInUserData}
        ></EmployeeDashboard>
      ) : null} */}
    </>
  );
}

export default App;
