import React from "react";
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const Settings = props => {
  return (
    <React.Fragment>
            <div className="page-content">
            <Container fluid>
            <Breadcrumbs title="Settings" breadcrumbItem="Settings" />
          </Container>
            </div>
      </React.Fragment>
  );
}

export default connect()(Settings)
