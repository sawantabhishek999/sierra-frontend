import React, { useState, Fragment, useEffect } from "react";
import { Alert, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import Table from "../../../components/Table/Table";
import LeadBadge from "../../../components/LeadBadge/LeadBadge";
import LeadName from "../../../components/LeadName/LeadName";
import axios from "../../../utils/services/axios-base.service";

const LeadsList = (props) => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalLeads, setTotalLeads] = useState(0);

  const setLead = (id) => {
    props.lead(id);
    props.toggleView(false);
  };

  const [columns] = useState([
    {
      dataField: "name",
      text: "Name",
      sort: true,
      formatter: (cellContent, row) => {
        return <LeadName {...row} />;
      },
    },
    {
      dataField: "email",
      text: "Email",
      sort: false,
    },
    {
      dataField: "phone",
      text: "Phone",
      sort: false,
    },
    {
      dataField: "leadType",
      text: "Lead Type",
      sort: false,
    },
    {
      dataField: "leadStatus",
      text: "Status",
      sort: false,
      formatter: (cellContent, row) => {
        const statusProps = getLeadStatus(row);
        return (
          <div>
            <LeadBadge {...statusProps} />
          </div>
        );
      },
    },
    {
      dataField: "",
      text: "View",
      sort: false,
      formatter: (cellContent, row) => {
        return (
          <span style={{ cursor: "pointer" }} onClick={() => setLead(row.id)}>
            <FontAwesomeIcon
              color="green"
              size="24"
              icon={faArrowCircleRight}
            />
          </span>
        );
      },
    },
  ]);

  const fetchLeads = (pageNumber, pageSize) => {
    setIsLoading(true);
    axios
      .get(
        `/api/Leads?name=${props.filters ? props.filters.name : ""}&email=${
          props.filters ? props.filters.email : ""
        }&phone=${
          props.filters ? props.filters.phone : ""
        }&pageNumber=${pageNumber}&pageSize=${pageSize}`
      )
      .then((response) => {
        if (
          response &&
          response.data &&
          !response.data.isError &&
          response.data.data.leads
        ) {
          let responseDataList = response.data.data.leads;
          setTotalLeads(response.data.data.totalRecords);
          const lstLeads = responseDataList.map((item) => {
            return {
              name: `${item.firstName} ${item.lastName}`,
              id: item.id,
              email: item.email,
              phone: item.phone,
              leadType: item.leadType,
              leadStatus: item.leadStatus,
            };
          });
          setLeads(lstLeads);
          setIsLoading(false);
        } else {
          setLeads([]);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const getLeadStatus = (item) => {
    let color = "primary";
    switch (item.leadStatus) {
      case "New":
        color = "primary";
        break;
      case "Active":
        color = "secondary";
        break;
      case "Prime":
        color = "danger";
        break;
      case "Pending":
        color = "warning";
        break;
      case "Unclaimed":
        color = "info";
        break;
      case "Closed":
        color = "success";
        break;
      default:
        color = "dark";
    }

    return {
      text: item.leadStatus,
      color: color,
    };
  };

  useEffect(() => {
    fetchLeads(1, 10);
  }, [props.filters]);

  const handleTableChange = (type, { page, sizePerPage }) => {
    fetchLeads(page, sizePerPage);
  };

  return (
    <Fragment>
      <div style={{ width: "100%" }}>
        {isLoading && leads.length === 0 ? (
          <Alert color="info">
            Loading your request&nbsp;&nbsp;
            <Spinner size="sm" color="primary" />
          </Alert>
        ) : !isLoading && leads.length === 0 ? (
          <Alert color="warning">No data found</Alert>
        ) : (
          ""
        )}
        {leads.length > 0 ? (
          <Table
            onTableChange={handleTableChange}
            data={leads}
            columns={columns}
            totalSize={totalLeads}
            isLoading={isLoading}
            keyField={"id"}
          />
        ) : (
          ""
        )}
      </div>
    </Fragment>
  );
};

export default LeadsList;
