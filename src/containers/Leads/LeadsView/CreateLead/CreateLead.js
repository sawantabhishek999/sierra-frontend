import React, { useState, Fragment } from "react";
import {
  AvForm,
  AvField,
  AvGroup,
  AvFeedback,
} from "availity-reactstrap-validation";
import {
  Button,
  Label,
  Input,
  FormGroup,
  Container,
  Col,
  Row,
  Card,
  CardBody,
  InputGroup,
  InputGroupAddon,
  CardTitle,
} from "reactstrap";
import InputMask from "react-input-mask";
import Select from "react-select";
import { ToastContainer, toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { COMMON_REGEX } from "../../../../utils/constants";
import axios from "../../../../utils/services/axios-base.service";
import "react-toastify/dist/ReactToastify.css";

const CreateLead = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [lead, setLead] = useState({});
  const [cellNumberInvalid, setCellNumberInvalid] = useState(false);
  const invalidStyle = {
    border: "1px solid red",
  };

  const validStyle = {
    border: "",
  };

  const agents = [
    { value: "2192", label: "Andrey Agent" },
    { value: "2121", label: "Andrew Antonov" },
  ];

  const submit = () => {
    setIsLoading(true);
    createLead();
  };
  const cancel = () => {
    props.toggleView();
  };

  const onInput = (event) => {
    if (event.target) {
      if (event.target.id === "fname") {
        lead.firstName = event.target.value;
      } else if (event.target.id === "lname") {
        lead.lastName = event.target.value;
      } else if (event.target.id === "email") {
        lead.email = event.target.value;
      } else if (event.target.id === "phone") {
        lead.phone = event.target.value;
      } else if (event.target.id === "confirmPassword") {
        lead.password = event.target.value;
      } else if (event.target.name === "leadType") {
        lead.leadType = event.target.value;
      }
    } else {
      lead.assignTo = {
        agentUserId: event.value,
      };
    }
    setLead(lead);
  };

  const createLead = () => {
    axios
      .post(`/api/Leads`, lead)
      .then((response) => {
        debugger;
        console.log(response);
        if (response && response.data && !response.data.isError) {
          notify(response.data.message, true);
          setIsLoading(false);
          setTimeout(() => {
            props.toggleView();
          }, 2000);
        } else {
          notify(response.data.message, false);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        notify(err, false);
      });
  };

  const notify = (message, isSuccess) => {
    debugger;
    const toastConfig = {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    isSuccess
      ? toast.success(message, toastConfig)
      : toast.error(message, toastConfig);
  };

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Container className="create-lead-container">
        <Card>
          <CardBody style={{ padding: "20px" }}>
            <CardTitle>
              <b>Basic Details</b>
            </CardTitle>
            <AvForm row>
              <Row>
                <Col md={6}>
                  <AvGroup row>
                    <Label for="fname" sm={3}>
                      First Name
                    </Label>
                    <Col sm={9}>
                      <AvField
                        name="fname"
                        id="fname"
                        placeholder="eg. John"
                        autoComplete="none"
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "First Name is required.",
                          },
                        }}
                        value={lead.firstName}
                        onBlur={onInput}
                      />
                    </Col>
                  </AvGroup>
                </Col>
                <Col md={6}>
                  <FormGroup row>
                    <Label for="lname" sm={3}>
                      Last Name
                    </Label>
                    <Col sm={9}>
                      <AvField
                        name="lname"
                        id="lname"
                        placeholder="eg. Doe"
                        autoComplete="none"
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "Last Name is required.",
                          },
                        }}
                        value={lead.lastName}
                        onBlur={onInput}
                      />
                      {/* <AvFeedback>Last name is required</AvFeedback> */}
                    </Col>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <AvGroup row>
                    <Label for="email" sm={3}>
                      Email
                    </Label>
                    <Col sm={9}>
                      <AvField
                        name="email"
                        id="email"
                        placeholder="eg. example@test.com"
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "Email is required.",
                          },
                          pattern: {
                            value: COMMON_REGEX.EMAIL,
                            errorMessage: "Please enter a valid Email",
                          },
                        }}
                        value={lead.email}
                        onBlur={onInput}
                      />
                      <AvFeedback />
                    </Col>
                  </AvGroup>
                </Col>
                <Col md={6}>
                  <AvGroup row>
                    <Label for="phone" sm={3}>
                      Phone
                    </Label>
                    <Col sm={9}>
                      <InputGroup
                        className="mb-3"
                        style={cellNumberInvalid ? invalidStyle : validStyle}
                      >
                        <InputGroupAddon addonType="prepend">
                          <div className="input-group-text">
                            <FontAwesomeIcon icon={faPhone} />
                          </div>
                        </InputGroupAddon>
                        <InputMask
                          required
                          className="form-control"
                          placeholder="999-999-9999"
                          mask="999-999-9999"
                          maskChar={null}
                          name="phone"
                          id="phone"
                          value={lead.phone}
                          onBlur={onInput}
                          onChange={(event) => {
                            setCellNumberInvalid(
                              event.target.value ? false : true
                            );
                          }}
                        />
                      </InputGroup>
                    </Col>
                  </AvGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <AvGroup row>
                    <Label for="password" sm={3} className="pull-right">
                      Password
                    </Label>
                    <Col sm={9}>
                      <AvField
                        type="password"
                        name="password"
                        id="password"
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "Password is required.",
                          },
                          pattern: {
                            value: COMMON_REGEX.STRONG_PASSWORD,
                            errorMessage:
                              "Password must have at least 1 special character, 1 uppercase letter, 1 lowercase letter, 1 digit and minimum length should be 6 characters.",
                          },
                        }}
                      />
                    </Col>
                  </AvGroup>
                </Col>
                <Col md={6}>
                  <AvGroup row>
                    <Label for="confirmPassword" sm={3}>
                      Confirm Password
                    </Label>
                    <Col sm={9}>
                      <AvField
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        value={lead.password}
                        onBlur={onInput}
                        validate={{
                          required: {
                            value: true,
                            errorMessage: "Confirm password is required.",
                          },
                          pattern: {
                            value: COMMON_REGEX.STRONG_PASSWORD,
                            errorMessage:
                              "Password must have at least 1 special character, 1 uppercase letter, 1 lowercase letter, 1 digit and minimum length should be 6 characters.",
                          },
                          match: {
                            value: "password",
                            errorMessage: "Passwords do not match.",
                          },
                        }}
                      />
                    </Col>
                  </AvGroup>
                </Col>
              </Row>
              <hr />
              <CardTitle>
                <b>Other Details</b>
                <Row>
                  <Col md={6}>
                    <FormGroup row>
                      <Label for="confirmPassword" sm={3}>
                        Lead Type
                      </Label>
                      <Col sm={9}>
                        <FormGroup row tag="fieldset" onChange={onInput}>
                          <Col sm={4}>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="leadType" value={1} />{" "}
                                Buyer
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col sm={4}>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="leadType" value={2} />{" "}
                                Lender
                              </Label>
                            </FormGroup>
                          </Col>
                          <Col sm={4}>
                            <FormGroup check>
                              <Label check>
                                <Input type="radio" name="leadType" value={3} />{" "}
                                Both
                              </Label>
                            </FormGroup>
                          </Col>
                        </FormGroup>
                      </Col>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup row>
                      <Label for="agent" sm={3}>
                        Agent
                      </Label>
                      <Col sm={9}>
                        <Select
                          options={agents}
                          id="agent"
                          onChange={onInput}
                        />
                      </Col>
                    </FormGroup>
                  </Col>
                </Row>
              </CardTitle>
              <FormGroup
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                <Button
                  className="btn btn-success"
                  disabled={isLoading}
                  onClick={submit}
                >
                  Submit
                </Button>
                <Button className="btn btn-warning" onClick={cancel}>
                  Cancel
                </Button>
              </FormGroup>
            </AvForm>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default CreateLead;
