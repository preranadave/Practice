import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Onboarding/Welcome";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import Home from "../pages/Home/Home";
import Search from "../pages/Search/Search";
import RecipeDetail from "../pages/Recipe/RecipeDetail";
import CategoryDetail from "../pages/Categories/CategoryDetail";
import Favorites from "../pages/Favorites/Favorites";
import Profile from "../pages/Profile/Profile";
import EditProfile from "../pages/Profile/EditProfile";
import Settings from "../pages/Profile/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/recipe/:id" element={<RecipeDetail />} />
      <Route path="/category/:id" element={<CategoryDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/edit" element={<EditProfile />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}
