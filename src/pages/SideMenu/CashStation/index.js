import React from "react";
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const CashStation = props => {
  return (
    <React.Fragment>
            <div className="page-content">
            <Container fluid>
            <Breadcrumbs title="Cash Station" breadcrumbItem="Cash Station" />
          </Container>
            </div>
      </React.Fragment>
  );
}

export default connect()(CashStation)
