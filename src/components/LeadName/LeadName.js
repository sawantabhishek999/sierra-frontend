import React from "react";
import UserAvatar from "react-user-avatar";

const LeadName = (props) => {
  return (
    <div style={{ display: "flex" }}>
      <div className="col-md-2">
        <UserAvatar
          size="36"
          name={props.name}
          colors={["#ccc", "#fbfbfb", "#ccaabb"]}
        />
      </div>
      <div className="col-md-8">{props.name}</div>
    </div>
  );
};

export default LeadName;
