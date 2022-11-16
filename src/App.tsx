import React, { useContext, useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import { UserContext, UserProvider } from "./context/UserContext";
import { ProtectedRoute } from "./ProtectedRoute";
function App() {
  const userActive = useContext(UserContext);
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="*" element={<Navigate to="/" />} />
            <Route
              path="/main"
              element={
                <ProtectedRoute>
                 <Main />
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
