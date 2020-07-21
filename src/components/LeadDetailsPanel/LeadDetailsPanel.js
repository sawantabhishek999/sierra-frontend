import React from "react";
import {
  CollapsibleHead,
  CollapsibleContent,
} from "react-collapsible-component";
import { Card, CardBody } from "reactstrap";

const LeadDetailsPanel = (props) => {
  return (
    <div>
      <CollapsibleHead isExpanded={true} className="additionalClassForHead">
        {props.title}
      </CollapsibleHead>
      <CollapsibleContent
        isExpanded={true}
        className="additionalClassForContent"
      >
        <Card className="main-card mb-3">
          <CardBody>{props.content}</CardBody>
        </Card>
      </CollapsibleContent>
    </div>
  );
};

export default LeadDetailsPanel;
