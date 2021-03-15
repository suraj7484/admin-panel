import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Media,
  Row,
} from "reactstrap"
import { Link } from "react-router-dom"
import { wallet } from "common/data"

const WalletStats = ({
  phoneToggle,
  emailToggle,
  qrcodeToggle,
  convertToggle,
  requestToggle,
  closeToggle,
  statementToggle,
}) => {
  const [sendOpen, setSendOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  const sendToggle = () => setSendOpen(!sendOpen)
  const moreToggle = () => setMoreOpen(!moreOpen)
  return (
    <Card>
      <CardBody>
        <Media>
          <div className="mr-4">
            <i className="mdi mdi-account-circle text-primary h1" />
          </div>

          <Media body>
            <div className="text-muted">
              <h5>{wallet.userName}</h5>
              <p className="mb-1">{wallet.email}</p>
              <p className="mb-0">Id no: {wallet.id}</p>
            </div>
          </Media>
        </Media>
      </CardBody>
      <CardBody className="border-top">
        <Row>
          <Col sm="6">
            <div>
              <p className="text-muted mb-2">Available Balance</p>
              <h5>{wallet.availableBalance}</h5>
            </div>
          </Col>
          <Col sm="6">
            <div className="text-sm-right mt-4 mt-sm-0">
              <p className="text-muted mb-2">Since last month</p>
              <h5>
                {wallet.lastMonthDifference}
                <span className="badge badge-success ml-1 align-bottom">
                  {wallet.lastMonthDifferencePercent}
                </span>
              </h5>
            </div>
          </Col>
        </Row>
      </CardBody>
      <CardBody className="border-top">
        <Row className="text-center">
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-plus-circle" />
              </div>

              <Link to="/deposit" className="btn btn-primary btn-sm w-sm">
                Deposit
              </Link>
            </div>
          </Col>
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-repost" />
              </div>

              <Button
                className="btn-sm w-sm"
                color="primary"
                onClick={convertToggle}
              >
                Convert
              </Button>
            </div>
          </Col>
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-send" />
              </div>

              <ButtonDropdown isOpen={sendOpen} toggle={sendToggle}>
                <DropdownToggle className="btn-sm w-sm" color="primary" caret>
                  Dropdown
                  <i className="fas fa-caret-down float-right caret-down"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={phoneToggle}>
                    <i className="fas fa-phone-alt mr-2"></i>Send by mobile
                    number
                  </DropdownItem>
                  <DropdownItem onClick={emailToggle}>
                    <i className="fas fa-envelope mr-2"></i>Send by email
                  </DropdownItem>
                  <DropdownItem onClick={qrcodeToggle}>
                    <i className="fas fa-qrcode mr-2"></i>Scan Qr
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </Col>
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-repost" />
              </div>

              <Button
                className="btn-sm w-sm"
                color="primary"
                onClick={requestToggle}
              >
                Request
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-transfer" />
              </div>

              <Link to="/cryptoswab" className="btn btn-primary btn-sm w-sm">
                Crypto swab
              </Link>
            </div>
          </Col>
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-money" />
              </div>

              <Link to="/cash-station" className="btn btn-primary btn-sm w-sm">
                Cash station
              </Link>
            </div>
          </Col>
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-wallet" />
              </div>

              <Link to="/withdraw" className="btn btn-primary btn-sm w-sm">
                Withdraw
              </Link>
            </div>
          </Col>
          <Col sm="3">
            <div className="mt-4 mt-sm-0">
              <div className="font-size-24 text-primary mb-2">
                <i className="bx bx-dots-horizontal-rounded" />
              </div>

              <ButtonDropdown isOpen={moreOpen} toggle={moreToggle}>
                <DropdownToggle className="btn-sm w-sm" color="primary" caret>
                  More
                  <i className="fas fa-caret-down float-right caret-down"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={statementToggle}>
                    <i className="fas fa-file-invoice mr-2"></i>Statement
                  </DropdownItem>
                  <DropdownItem onClick={closeToggle}>
                    <i className="far fa-times-circle mr-2"></i>Close Balance
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

WalletStats.propTypes = {
  phoneToggle: PropTypes.func,
  emailToggle: PropTypes.func,
  qrcodeToggle: PropTypes.func,
  convertToggle: PropTypes.func,
  requestToggle: PropTypes.func,
  closeToggle: PropTypes.func,
  statementToggle: PropTypes.func,
}

export default WalletStats
