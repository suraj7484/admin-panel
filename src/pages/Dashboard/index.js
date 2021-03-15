import React from "react";
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const Dashboard = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Home" breadcrumbItem="Home" />
          <h1>Welcome to wallex.xyz</h1>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default connect()(Dashboard)
