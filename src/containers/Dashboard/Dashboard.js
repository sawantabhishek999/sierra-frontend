import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Leads from "../Leads/Leads";
import CustomNavbar from "../../components/CustomNavbar/CustomNavbar";

const Dashboard = ({ match }) => {
  return (
    <Fragment>
      <CustomNavbar />
      <Route path="/" component={Leads} />
      <Route path="/leads" component={Leads} />
    </Fragment>
  );
};

export default Dashboard;
