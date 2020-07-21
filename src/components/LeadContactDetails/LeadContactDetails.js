import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import LeadBadge from "../LeadBadge/LeadBadge";

const LeadContactDetails = (props) => {
  const getStatusColor = (status) => {
    let color = "secondary";
    switch (status) {
      case "WrongAddress":
        color = "danger";
        break;
      case "WrongNumber":
        color = "danger";
        break;
      case "ValidAddress":
        color = "success";
        break;
      case "ValidNumber":
        color = "success";
        break;
      case "OptedOut":
        color = "warning";
        break;
      default:
        color = "info";
        break;
    }
    return {
      text: status,
      color: color,
    };
  };
  return (
    <Fragment>
      <Row>
        <Col sm={7}>
          <Row>
            <Col sm={3}>
              <b>Email:</b>
            </Col>
            <Col sm={9} style={{ textAlign: "left" }}>
              <p>{props.lead.email}</p>
            </Col>
          </Row>
        </Col>
        <Col sm={5}>
          <Row>
            <Col sm={6}>
              <b>Email Status:</b>
            </Col>
            <Col sm={6} style={{ textAlign: "left" }}>
              <LeadBadge {...getStatusColor(props.lead.emailStatus)} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={7}>
          <Row>
            <Col sm={3}>
              <b>Phone:</b>
            </Col>
            <Col sm={9} style={{ textAlign: "left" }}>
              <p>{props.lead.phone}</p>
            </Col>
          </Row>
        </Col>
        <Col sm={5}>
          <Row>
            <Col sm={6}>
              <b>Phone Status:</b>
            </Col>
            <Col sm={6} style={{ textAlign: "left" }}>
              <LeadBadge {...getStatusColor(props.lead.phoneStatus)} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LeadContactDetails;
