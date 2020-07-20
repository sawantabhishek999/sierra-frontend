import React, { useState, Fragment } from "react";
import { Button, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import CreateLead from "../LeadsView/CreateLead/CreateLead";

const LeadsView = (props) => {
  const [isDetailsView] = useState(true);

  const toggleView = () => {
    props.toggleView(!isDetailsView);
  };

  return (
    <Fragment className="leads-content">
      <Row>
        <FontAwesomeIcon icon={faArrowCircleLeft} />
      </Row>
      {props.lead}
      {props.createView ? (
        <CreateLead toggleView={toggleView} />
      ) : (
        <p>Leads view will come here</p>
      )}
    </Fragment>
  );
};

export default LeadsView;
