import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";

export const DefaultRoute = ({ children }: any) => {
    const userActive = useContext(UserContext);
    const user = userActive?.userActive;
    if (!user) {
      return <Navigate to="/login" replace />;
    } else {
        switch(user.userType) {
            case "1":
                return <Navigate to="/main" />
            case "2":
                return <Navigate to="/mainVet" />
            case "3":
                return <Navigate to="/mainAdmin" />
            default:
                return <Navigate to="/login" replace />;
        }
    }
};