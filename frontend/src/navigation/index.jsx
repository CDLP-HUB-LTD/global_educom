import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Header } from "../components/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardPage from "../pages/DashboardPage";
import ProfilePage from "../pages/ProfilePage";
import useAuth from "../useAuth";

const DefaultLayout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

const DashboardLayout = ({ children }) => <>{children}</>;

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    const logoutUser = async () => {
      try {
        await logout();
        window.location.href = "/";
      } catch (error) {
        console.error("Error during logout:", error);
      }
    };

    logoutUser();
  }, [logout]);

  return <Navigate to="/" />;
};

const Navigation = () => {
  const { user, userId } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("User is logged in. UserId:", userId);
    }
  }, [user, userId]);

  return (
    <Routes>
      <Route
        index
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
      <Route path="/login" element={<DefaultLayout><Login /></DefaultLayout>} />
      <Route path="/logout" element={<DefaultLayout><Logout /></DefaultLayout>} />
      <Route path="/register" element={<DefaultLayout><Register /></DefaultLayout>} />
      <Route
        path="/dashboard"
        element={
          <DashboardLayout>
            {<DashboardPage />}
          </DashboardLayout>
        }
      />
      <Route path="/profile" element={<DashboardLayout><ProfilePage /></DashboardLayout>} />
    </Routes>
  );
};

export default Navigation;
