import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import ReqAuth from "../Components/ReqAuth";
import { Admin } from "./Admin";
import { User } from "./User";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />;
      <Route
        path="/admin"
        element={
          <ReqAuth>
            <Admin />
          </ReqAuth>
        }
      />
      <Route
        path="/user"
        element={
          <ReqAuth>
            <User />
          </ReqAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
