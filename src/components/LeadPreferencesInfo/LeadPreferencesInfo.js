import React, { Fragment } from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

const LeadPreferencesInfo = (props) => {
  return (
    <Fragment>
      <Row>
        {props.lead ? (
          <div style={{ width: "100%" }}>
            <Col sm={12}>
              <Row>
                <Col sm={5}>
                  <b>E-alert Optout:</b>
                </Col>
                <Col sm={5} style={{ textAlign: "left" }}>
                  {props.lead.eAlertOptOut ? (
                    <FontAwesomeIcon color="green" icon={faCheckCircle} />
                  ) : (
                    <FontAwesomeIcon
                      color="red"
                      size="24"
                      icon={faTimesCircle}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row>
                <Col sm={5}>
                  <b>Mkt. Email:</b>
                </Col>
                <Col sm={5} style={{ textAlign: "left" }}>
                  {props.lead.marketingEmailOptOut ? (
                    <FontAwesomeIcon color="green" icon={faCheckCircle} />
                  ) : (
                    <FontAwesomeIcon
                      color="red"
                      size="24"
                      icon={faTimesCircle}
                    />
                  )}
                </Col>
              </Row>
            </Col>
            <Col sm={12}>
              <Row>
                <Col sm={5}>
                  <b>Text Optout:</b>
                </Col>
                <Col sm={5} style={{ textAlign: "left" }}>
                  {props.lead.textOptOut ? (
                    <FontAwesomeIcon color="green" icon={faCheckCircle} />
                  ) : (
                    <FontAwesomeIcon
                      color="red"
                      size="24"
                      icon={faTimesCircle}
                    />
                  )}
                </Col>
              </Row>
            </Col>
          </div>
        ) : (
          <p>No preferences info found</p>
        )}
      </Row>
    </Fragment>
  );
};

export default LeadPreferencesInfo;
