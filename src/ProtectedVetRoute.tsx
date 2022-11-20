import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const ProtectedVetRoute = ({ children }: any) => {
    const userActive = useContext(UserContext);
    const user = userActive?.userActive;
    if (userActive?.userActive?.userType != "2") {
      console.log(userActive?.userActive)
      return <Navigate to="/" replace />;
      
    }
    return children;
  };