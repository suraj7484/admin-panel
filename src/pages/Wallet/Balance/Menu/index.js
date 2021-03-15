import { useState } from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap"
import { Link } from "react-router-dom"

const Menu = ({ toggle }) => {
  const [sendOpen, setSendOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [closeModal, setCloseModal] = useState(false)

  const sendToggle = () => setSendOpen(!sendOpen)
  const moreToggle = () => setMoreOpen(!moreOpen)
  const closeModalToggle = () => setCloseModal(!closeModal)
  return (
    <Card>
      <CardBody>
        <h5 className="mb-0">Your balance: $ 10.0</h5>
      </CardBody>
      <CardBody className="border-top">
        <div className="d-flex justify-content-around">
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-plus-circle" />
            </div>
            <Button
              className="btn-sm w-sm"
              color="primary"
              onClick={() => toggle("Deposit")}
            >
              Deposit
            </Button>
          </div>
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-repost" />
            </div>

            <Button
              className="btn-sm w-sm"
              color="primary"
              onClick={() => toggle("Convert")}
            >
              Convert
            </Button>
          </div>
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-send" />
            </div>
            <ButtonDropdown isOpen={sendOpen} toggle={sendToggle}>
              <DropdownToggle className="btn-sm w-sm" color="primary" caret>
                Send
                <i className="fas fa-caret-down float-right caret-down"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => toggle("SendPhone")}>
                  <i className="fas fa-phone-alt mr-2"></i>Send by mobile number
                </DropdownItem>
                <DropdownItem onClick={() => toggle("SendEmail")}>
                  <i className="fas fa-envelope mr-2"></i>Send by email
                </DropdownItem>
                <DropdownItem onClick={() => {}}>
                  <i className="fas fa-qrcode mr-2"></i>Scan Qr
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-repost" />
            </div>

            <Button
              className="btn-sm w-sm"
              color="primary"
              onClick={() => toggle("Request")}
            >
              Request
            </Button>
          </div>
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-transfer" />
            </div>
            <Link to="/cryptoswab" className="btn btn-primary btn-sm w-sm">
              Crypto swab
            </Link>
          </div>
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-money" />
            </div>

            <Link to="/cash-station" className="btn btn-primary btn-sm w-sm">
              Cash station
            </Link>
          </div>
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-wallet" />
            </div>
            <Button
              className="btn-sm w-sm"
              color="primary"
              onClick={() => toggle("Withdraw")}
            >
              Withdraw
            </Button>
          </div>
          <div className="mt-4 mt-sm-0 text-center">
            <div className="font-size-24 text-primary">
              <i className="bx bx-dots-horizontal-rounded" />
            </div>
            <ButtonDropdown isOpen={moreOpen} toggle={moreToggle}>
              <DropdownToggle className="btn-sm w-sm" color="primary" caret>
                More
                <i className="fas fa-caret-down float-right caret-down"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => toggle("Statement")}>
                  <i className="fas fa-file-invoice mr-2"></i>Statement
                </DropdownItem>
                <DropdownItem onClick={closeModalToggle}>
                  <i className="far fa-times-circle mr-2"></i>Close Balance
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </div>
        </div>
      </CardBody>
      <Modal
        className="modal-dialog-centered"
        isOpen={closeModal}
        toggle={closeModalToggle}
      >
        <ModalHeader toggle={closeModalToggle}>
          <span className="text-danger">
            <i className="fas fa-exclamation-triangle mr-2"></i>Warning
          </span>
        </ModalHeader>
        <ModalBody>Are you sure you want to close this balance?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModalToggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={closeModalToggle}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  )
}

Menu.propTypes = {
  toggle: PropTypes.func,
}

export default Menu
