import { Navigate, Outlet } from "react-router-dom";
import { usePatient } from "../store/patients";

const ProtectedRoute = () => {
  const userEmail = usePatient((state) => state.userEmail);

  if (!userEmail) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
