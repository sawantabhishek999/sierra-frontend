import React, { useState, Fragment } from "react";
import { Button, Row } from "reactstrap";

const LeadsView = (props) => {
  const [isDetailsView] = useState(true);

  const toggleView = () => {
    props.toggleView(!isDetailsView);
  };

  return (
    <Fragment className="leads-content">
      <Row>
        <Button
          disabled={props.color === "gray"}
          size="md"
          className="btn-icon"
          color="dark"
          onClick={toggleView}
        >
          <i className="pe-7s-config btn-icon-wrapper"> </i>
          Back to list
        </Button>
      </Row>
      {props.lead}
      {props.createView ? (
        <p>Leads create form will come here</p>
      ) : (
        <p>Leads view will come here</p>
      )}
    </Fragment>
  );
};

export default LeadsView;
