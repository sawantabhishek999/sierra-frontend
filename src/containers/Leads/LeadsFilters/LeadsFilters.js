import React, { useState, Fragment, useEffect } from "react";
import { Row, Button, Form, FormGroup, Label, Input, Card } from "reactstrap";

const LeadsFilters = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onInputName = (event) => {
    setName(event.target.value);
  };
  const onInputEmail = (event) => {
    setEmail(event.target.value);
  };
  const onInputPhone = (event) => {
    setPhone(event.target.value);
  };
  const resetFilters = () => {
    setName("");
    setEmail("");
    setPhone("");
    props.resetFilter({ name: "", email: "", phone: "" });
  };

  useEffect(() => {
    resetFilters();
  }, []);

  return (
    <Fragment>
      <Card style={{ width: "100%", height: "100%", padding: "5px" }}>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="name" className="mr-sm-2">
              Name:
            </Label>
            <Input
              name="name"
              id="name"
              placeholder="enter name"
              value={name}
              onChange={onInputName}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="email" className="mr-sm-2">
              Email:
            </Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="enter email"
              onChange={onInputEmail}
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="phone" className="mr-sm-2">
              Phone:
            </Label>
            <Input
              type="number"
              name="phone"
              id="phone"
              value={phone}
              placeholder="enter phone"
              onChange={onInputPhone}
            />
          </FormGroup>
          &nbsp;&nbsp;&nbsp;
          <FormGroup className="mb-2 sm-3 mb-sm-0">
            {/* <Col sm={{ size: 10, offset: 2 }}>*/}
            <Row>
              <Button
                size="md"
                className="add-btn"
                color="btn btn-success"
                onClick={() => props.applyFilter({ name, email, phone })}
              >
                Apply
              </Button>
              <Button
                size="md"
                className="add-btn"
                color="btn btn-warning"
                onClick={resetFilters}
              >
                Reset
              </Button>
            </Row>
            {/* </Col> */}
          </FormGroup>
        </Form>
      </Card>
    </Fragment>
  );
};

export default LeadsFilters;
