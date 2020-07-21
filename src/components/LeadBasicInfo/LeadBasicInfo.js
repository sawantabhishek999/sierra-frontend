import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import LeadBadge from "../LeadBadge/LeadBadge";

const LeadBasicInfo = (props) => {
  const getStatusColor = (status) => {
    let color = "";
    switch (status) {
      case "New":
        color = "primary";
        break;
      case "Active":
        color = "info";
        break;
      case "Prime":
        color = "success";
        break;
      case "DoNotContact":
        color = "warning";
        break;
      case "Blocked":
        color = "danger";
        break;
      default:
        color = "secondary";
    }
    return {
      text: status,
      color: color,
    };
  };
  return (
    <Fragment>
      <Row>
        <Col sm={6}>
          <Row>
            <Col sm={5}>
              <b>First Name:</b>
            </Col>
            <Col sm={5} style={{ textAlign: "left" }}>
              <p>{props.lead.firstName}</p>
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
          <Row>
            <Col sm={5}>
              <b>Last Name:</b>
            </Col>
            <Col sm={5} style={{ textAlign: "left" }}>
              <p>{props.lead.lastName}</p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={6}>
          <Row>
            <Col sm={5}>
              <b>Lead Type:</b>
            </Col>
            <Col sm={5} style={{ textAlign: "left" }}>
              <p>{props.lead.leadType}</p>
            </Col>
          </Row>
        </Col>
        <Col sm={6}>
          <Row>
            <Col sm={5}>
              <b>Lead Status:</b>
            </Col>
            <Col sm={5} style={{ textAlign: "left" }}>
              <LeadBadge {...getStatusColor(props.lead.leadStatus)} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
};

export default LeadBasicInfo;
