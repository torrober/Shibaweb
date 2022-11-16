import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const ProtectedRoute = ({ children }: any) => {
    const userActive = useContext(UserContext);
    const user = userActive?.userActive;
    if (!user) {
      return <Navigate to="/" replace />;
    }
  
    return children;
  };