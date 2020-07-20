import React, { useState, Fragment } from "react";
import { Row, Col, Container, Button } from "reactstrap";
import LeadsFilters from "./LeadsFilters/LeadsFilters";
import LeadsList from "./LeadsList/LeadsList";
import LeadsView from "./LeadsView/LeadsView";
import "./Leads.scss";

const Leads = (props) => {
  const [isListView, setIsListView] = useState(true);
  const [isCreateView, setIsCreateView] = useState(false);
  const [lead, setLead] = useState(null);
  const [filters, setFilters] = useState(null);

  const toggleView = (createView) => {
    setIsCreateView(createView);
    setIsListView(!isListView);
  };

  const applyFilter = (filterObj) => {
    setFilters(filterObj);
  };

  return (
    <Fragment>
      {isListView ? (
        <Container>
          <Row className="leads-content">
            <Col md="10">
              <LeadsFilters applyFilter={applyFilter} />
            </Col>
            <Col md="2" className="mb-1 mt-2 mb-sm-0">
              <Button
                size="md"
                className="add-btn"
                color="btn btn-primary"
                onClick={() => toggleView(true)}
              >
                <i className="pe-7s-config btn-icon-wrapper"> </i>
                Create New Lead
              </Button>
            </Col>
          </Row>
          <Row className="leads-content">
            <LeadsList
              toggleView={toggleView}
              lead={setLead}
              filters={filters}
            />
          </Row>
        </Container>
      ) : (
        <LeadsView
          toggleView={toggleView}
          lead={lead}
          createView={isCreateView}
        />
      )}
    </Fragment>
  );
};

export default Leads;
