import { Card, CardBody, Col, Container, Row } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import UserProfile from "./UserProfile/index"
import CryptoCharts from "./CryptoCharts/index"
import CryptoAmount from "./CryptoAmount/index"
import Tables from "./Tables"
import "./styles.scss"

const Cryptoswab = props => {
  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Cryptoswab" breadcrumbItem="Cryptoswab" />
          <UserProfile />
          <Row>
            <Col md={8} xs={12}>
              <CryptoCharts />
            </Col>
            <Col md={4} xs={12}>
              <CryptoAmount />
            </Col>
          </Row>
          <Tables />
        </Container>
      </div>
    </>
  )
}

export default connect()(Cryptoswab)
