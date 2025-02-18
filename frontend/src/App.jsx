import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavbarComponent from "./components/NavbarComponent";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
