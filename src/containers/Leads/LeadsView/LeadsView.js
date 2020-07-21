import React, { useState, Fragment } from "react";
import { Row, Container, CardBody, Card, CardHeader } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";
import CreateLead from "../LeadsView/CreateLead/CreateLead";
import LeadDetails from "./LeadDetails/LeadDetails";

const LeadsView = (props) => {
  const [isDetailsView] = useState(true);

  const toggleView = () => {
    props.toggleView(!isDetailsView);
  };

  return (
    <Fragment>
      <div className="leads-content">
        <Container style={{ marginTop: "20px" }}>
          <Card>
            <CardHeader style={{ textAlign: "left" }}>
              <span onClick={toggleView} style={{ cursor: "pointer" }}>
                <FontAwesomeIcon icon={faArrowCircleLeft} size={20} />
              </span>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;
              {props.createView ? <b>Create new Lead</b> : <b>Lead Details</b>}
            </CardHeader>
            <CardBody>
              <Row>
                {props.createView ? (
                  <CreateLead toggleView={toggleView} />
                ) : (
                  <LeadDetails leadId={props.lead} />
                )}
              </Row>
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};

export default LeadsView;
