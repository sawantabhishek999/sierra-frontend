import React, { useState, Fragment, useEffect } from "react";
import { Container, Col, Row, Spinner, Alert } from "reactstrap";
import { CollapsibleComponent } from "react-collapsible-component";
import axios from "../../../../utils/services/axios-base.service";
import LeadDetailsPanel from "../../../../components/LeadDetailsPanel/LeadDetailsPanel";
import LeadBasicInfo from "../../../../components/LeadBasicInfo/LeadBasicInfo";
import LeadContactDetails from "../../../../components/LeadContactDetails/LeadContactDetails";
import LeadAgentInfo from "../../../../components/LeadAgentInfo/LeadAgentInfo";
import LeadPreferencesInfo from "../../../../components/LeadPreferencesInfo/LeadPreferencesInfo";

const LeadDetails = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lead, setLead] = useState(null);
  const [leadId] = useState(props.leadId);

  const getLeadDetails = (leadId) => {
    setIsLoading(true);
    axios
      .get(`/api/Leads/${leadId}`)
      .then((response) => {
        if (response && response.data && !response.data.isError) {
          setLead(response.data.data);
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getLeadDetails(leadId);
  }, []);

  return (
    <Fragment>
      <Container className="lead-details-container">
        {!isLoading ? (
          lead ? (
            <Row>
              <Col md="8">
                <CollapsibleComponent>
                  <LeadDetailsPanel
                    title="Basic Info"
                    content={<LeadBasicInfo lead={lead} />}
                  />
                  <div style={{ borderBottom: "5px white solid" }}></div>
                  <LeadDetailsPanel
                    title="Contact Details"
                    content={<LeadContactDetails lead={lead} />}
                  />
                </CollapsibleComponent>
              </Col>
              <Col md="4">
                <CollapsibleComponent>
                  <LeadDetailsPanel
                    title="Agent Info"
                    content={<LeadAgentInfo lead={lead} />}
                  />
                  <div style={{ borderBottom: "5px white solid" }}></div>
                  <LeadDetailsPanel
                    title="Preferences"
                    content={<LeadPreferencesInfo lead={lead} />}
                  />
                </CollapsibleComponent>
              </Col>
            </Row>
          ) : (
            <Alert color="warning">No data found</Alert>
          )
        ) : (
          <Alert color="info">
            Loading your request&nbsp;&nbsp;
            <Spinner size="sm" color="primary" />
          </Alert>
        )}
      </Container>
    </Fragment>
  );
};

export default LeadDetails;
