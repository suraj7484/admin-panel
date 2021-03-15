import React from "react"
import { Container, Row, Col } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import CashStationCard from "./CashStationCard"

const CashStation = props => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Cash Station" breadcrumbItem="Cash Station" />
          <Row>
            {[...new Array(10)].map((item, index) => (
              <Col key={index} md={6} sm={12}>
                <CashStationCard />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(CashStation)
