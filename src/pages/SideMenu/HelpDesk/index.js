import React from "react";
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const HelpDesk = props => {
  return (
    <React.Fragment>
            <div className="page-content">
            <Container fluid>
            <Breadcrumbs title="Help Desk" breadcrumbItem="Help Desk" />
          </Container>
            </div>
      </React.Fragment>
  );
}

export default connect()(HelpDesk)
