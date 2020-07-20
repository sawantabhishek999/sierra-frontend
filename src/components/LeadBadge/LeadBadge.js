import React from "react";
import { Badge } from "reactstrap";

const LeadBadge = (props) => {
  return (
    <Badge style={{ padding: "6px" }} color={props.color} pill>
      {props.text}
    </Badge>
  );
};

export default LeadBadge;
