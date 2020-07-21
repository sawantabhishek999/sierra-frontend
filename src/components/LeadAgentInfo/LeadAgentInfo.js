import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";

const LeadAgentInfo = (props) => {
  return (
    <Fragment>
      <Row>
        {props.lead.assignedTo.id !== -1 ? (
          <div style={{ width: "100%" }}>
            <Col sm={12}>
              <Row>
                <Col sm={5}>
                  <b>Agent Email:</b>
                </Col>
                <Col sm={5} style={{ textAlign: "left" }}>
                  <p>{props.lead.assignedTo.email}</p>
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row>
                <Col sm={5}>
                  <b>Agent Name:</b>
                </Col>
                <Col sm={5} style={{ textAlign: "left" }}>
                  <p>
                    {props.lead.assignedTo.firstName}{" "}
                    {props.lead.assignedTo.lastName}
                  </p>
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row>
                <Col sm={5}>
                  <b>Agent Phone:</b>
                </Col>
                <Col sm={5} style={{ textAlign: "left" }}>
                  <p>{props.lead.assignedTo.phone}</p>
                </Col>
              </Row>
            </Col>
          </div>
        ) : (
          <p>No agent info found</p>
        )}
      </Row>
    </Fragment>
  );
};

export default LeadAgentInfo;
