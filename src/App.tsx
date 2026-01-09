// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import DashboardComp from "./components/DashboardComp";
import { Bounce, ToastContainer, toast } from "react-toastify";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // const [count, setCount] = useState(0);
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
       <Route element={<ProtectedRoute />}> 
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<DashboardComp />} />
          <Route path="/landing-page" element={<LandingPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
