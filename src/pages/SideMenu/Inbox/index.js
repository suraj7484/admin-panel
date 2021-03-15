import React from "react";
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const Inbox = props => {
  return (
    <React.Fragment>
            <div className="page-content">
            <Container fluid>
            <Breadcrumbs title="Inbox" breadcrumbItem="Inbox" />
          </Container>
            </div>
      </React.Fragment>
  );
}

export default connect()(Inbox)
