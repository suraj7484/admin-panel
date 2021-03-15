import React from "react";
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const Arbitration = props => {
  return (
    <React.Fragment>
            <div className="page-content">
            <Container fluid>
            <Breadcrumbs title="Arbitration" breadcrumbItem="Arbitration" />
          </Container>
            </div>
      </React.Fragment>
  );
}

export default connect()(Arbitration)
