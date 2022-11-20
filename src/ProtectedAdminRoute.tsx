import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const ProtectedAdminRoute = ({ children }: any) => {
    const userActive = useContext(UserContext);
    const user = userActive?.userActive;
    if (!user && userActive?.userActive?.userType != "3") {
      return <Navigate to="/" replace />;
    }
    return children;
  };