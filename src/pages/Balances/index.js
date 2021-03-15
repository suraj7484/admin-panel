import React, { useState } from "react"
import "./styles.scss"
import { Col, Container, Row } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import WalletStats from "./WalletStats"
import Activites from "./Activities"

import ModalSendPhone from "./Modals/ModalSendPhone"
import ModalSendEmail from "./Modals/ModalSendEmail"
import ModalConvert from "./Modals/ModalConvert"
import ModalRequest from "./Modals/ModalRequest"
import ModalClose from "./Modals/ModalClose"
import ModalStatement from "./Modals/ModalStatement"

const Balances = props => {
  const [modalPhone, setModalPhone] = useState(false)
  const [modalEmail, setModalEmail] = useState(false)
  const [modalConvert, setModalConvert] = useState(false)
  const [modalRequest, setModalRequest] = useState(false)
  const [modalClose, setModalClose] = useState(false)
  const [modalStatement, setModalStatement] = useState(false)
  const currency = props.match.params.currency

  const phoneToggle = () => setModalPhone(!modalPhone)
  const emailToggle = () => setModalEmail(!modalEmail)
  const convertToggle = () => setModalConvert(!modalConvert)
  const requestToggle = () => setModalRequest(!modalRequest)
  const closeToggle = () => setModalClose(!modalClose)
  const statementToggle = () => setModalStatement(!modalStatement)

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Balances" breadcrumbItem={currency} />
          <Row>
            <Col md={4} xs={12}>
              <WalletStats
                phoneToggle={phoneToggle}
                emailToggle={emailToggle}
                convertToggle={convertToggle}
                requestToggle={requestToggle}
                closeToggle={closeToggle}
                statementToggle={statementToggle}
              />
            </Col>
            <Col md={12} xs={12}>
              <Activites />
            </Col>
          </Row>
          <ModalSendPhone isOpen={modalPhone} toggle={phoneToggle} />
          <ModalSendEmail isOpen={modalEmail} toggle={emailToggle} />
          <ModalConvert isOpen={modalConvert} toggle={convertToggle} />
          <ModalRequest isOpen={modalRequest} toggle={requestToggle} />
          <ModalClose isOpen={modalClose} toggle={closeToggle} />
          <ModalStatement isOpen={modalStatement} toggle={statementToggle} />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(Balances)
