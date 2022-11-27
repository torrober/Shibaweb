import React, { useContext, useState } from "react";
import Login from "./pages/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import { UserContext, UserProvider } from "./context/UserContext";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedVetRoute } from "./ProtectedVetRoute";
import MainVet from "./pages/MainVet";
import { DefaultRoute } from "./DefaultRoute";
import MainAdmin from "./pages/MainAdmin";
import { ProtectedAdminRoute } from "./ProtectedAdminRoute";
import Pets from "./pages/user/Pet";
import AddPet from "./pages/user/addPet";
import EditPet from "./pages/user/EditPet";
import MyData from "./pages/MyData";
import ChangePassword from "./pages/ChangePassword";
function App() {
  const userActive = useContext(UserContext);
  return (
    <div className="App">
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultRoute />} />
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
            <Route
              path="/MyData"
              element={
                <ProtectedRoute>
                  <MyData />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/ChangePassword"
              element={
                <ProtectedRoute>
                  <ChangePassword />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/user/pets"
              element={
                <ProtectedRoute>
                  <Pets />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/user/addpet"
              element={
                <ProtectedRoute>
                  <AddPet />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/user/editpet/:petID"
              element={
                <ProtectedRoute>
                  <EditPet />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/mainVet"
              element={
                <ProtectedVetRoute>
                  <MainVet />
                </ProtectedVetRoute>
              }
            ></Route>
            <Route
              path="/mainAdmin"
              element={
                <ProtectedAdminRoute>
                  <MainAdmin />
                </ProtectedAdminRoute>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  );
}

export default App;
