import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogsHome from "./components/User/BlogsHome";
import AdminDashboard from "./components/Admin/AdminDashboard";
import BlogsManagement from "./components/Admin/BlogsManagement";
import AddBlog from "./components/Admin/AddBlog";
import UpdateBlog from "./components/Admin/UpdateBlog";
import DeleteBlog from "./components/Admin/DeleteBlog";
import ViewFullBlog from "./components/User/ViewFullBlog";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogsHome></BlogsHome>}></Route>
        <Route path="/full-blog/:id" element={<ViewFullBlog></ViewFullBlog>}></Route>

        {/* Admin Routing */}

        <Route path="/admin" element={<AdminDashboard></AdminDashboard>}>
          <Route
            path="/admin/blog-management"
            element={<BlogsManagement></BlogsManagement>}
          ></Route>
          <Route
            path="/admin/add-blog"
            element={<AddBlog></AddBlog>}
          ></Route>
          <Route
            path="/admin/update-blog/:id"
            element={<UpdateBlog></UpdateBlog>}
          ></Route>
          <Route
            path="/admin/delete-blog/:id"
            element={<BlogsManagement></BlogsManagement>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
