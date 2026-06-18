import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { FavoritesProvider } from "./context/FavoritesContext";
import { UserProvider } from "./context/UserContext";
import "./styles/globals.css";

export default function App() {
  return (
    <UserProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </FavoritesProvider>
    </UserProvider>
  );
}
