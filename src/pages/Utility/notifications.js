import React from "react";
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const Notifications = props => {
  return (
    <React.Fragment>
            <div className="page-content">
            <Container fluid>
            <Breadcrumbs title="Notifications" breadcrumbItem="Notifications" />
          </Container>
            </div>
      </React.Fragment>
  );
}

export default connect()(Notifications)
