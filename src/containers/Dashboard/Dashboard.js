import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Leads from "../Leads/Leads";

const Dashboard = ({ match }) => {
  return (
    <Fragment>
      <Route path="/" component={Leads} />
      <Route path="/leads" component={Leads} />
    </Fragment>
  );
};

export default Dashboard;
