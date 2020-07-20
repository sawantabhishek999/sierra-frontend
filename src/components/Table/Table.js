import React, { Fragment } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
  PaginationProvider,
  PaginationListStandalone,
} from "react-bootstrap-table2-paginator";
import overlayFactory from "react-bootstrap-table2-overlay";
import { Row, Col, Card, CardBody } from "reactstrap";

const Table = (props) => {
  const sizePerPageRenderer = ({
    options,
    currSizePerPage,
    onSizePerPageChange,
  }) => (
    <div className="btn-group" role="group">
      {options.map((option) => (
        <button
          key={option.text}
          type="button"
          onClick={() => onSizePerPageChange(option.page)}
          className={`btn ${
            currSizePerPage === `${option.page}`
              ? "btn-secondary"
              : "btn-warning"
          }`}
        >
          {option.text}
        </button>
      ))}
    </div>
  );

  return (
    <Fragment>
      <div style={{ width: "100%" }}>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          {props.data ? (
            <Row>
              <Col md="12">
                <Card className="mb-3">
                  <CardBody>
                    <div className="table-responsive">
                      <div>
                        <PaginationProvider
                          pagination={paginationFactory({
                            custom: true,
                            page: props.page,
                            sizePerPage: props.sizePerPage,
                            totalSize: props.totalSize,
                            showTotal: true,
                            alwaysShowAllBtns: true,
                            sizePerPageRenderer: sizePerPageRenderer,
                          })}
                        >
                          {({ paginationProps, paginationTableProps }) => (
                            <div>
                              <BootstrapTable
                                remote
                                bootstrap4={true}
                                keyField={props.keyField}
                                data={props.data}
                                columns={props.columns}
                                loading={props.isLoading}
                                overlay={overlayFactory({
                                  spinner: true,
                                  background: "rgba(192,192,192,0.1)",
                                })}
                                onTableChange={props.onTableChange}
                                {...paginationTableProps}
                                pagination={paginationFactory({
                                  custom: true,
                                  page: props.page,
                                  sizePerPage: props.sizePerPage,
                                  totalSize: props.totalSize,
                                  showTotal: true,
                                  alwaysShowAllBtns: true,
                                  hideSizePerPage: false,
                                  sizePerPageRenderer: sizePerPageRenderer,
                                })}
                              />
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <PaginationListStandalone
                                  {...paginationProps}
                                />
                              </div>
                            </div>
                          )}
                        </PaginationProvider>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ) : (
            ""
          )}
        </ReactCSSTransitionGroup>
      </div>
    </Fragment>
  );
};

export default Table;
