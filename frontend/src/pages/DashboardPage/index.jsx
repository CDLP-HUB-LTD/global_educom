import React from "react";
import { Dashboard } from "../../views/pages/Dashboard";
import { FooterBottom } from "../../components/FooterBottom";
import useAuth from "../../useAuth";

const DashboardPage = () => {
  const auth = useAuth();

  return (
    <>
      <Dashboard auth={auth} />
      <FooterBottom />
    </>
  );
};

export default DashboardPage;
