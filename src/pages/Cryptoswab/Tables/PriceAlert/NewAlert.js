import React, { useState } from "react"
import {
  Table,
  Button,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  FormFeedback,
} from "reactstrap"

const alert = {
  crypto: "Bitcoin",
  compare: "Higher than",
  price: 0,
  checked: false,
}

const NewAlert = ({ modal, modalToggle, handleAdd }) => {
  const [state, setState] = useState(alert)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  // const [currentCrypto, setCurrentCrypto] = useState("Bitcoin")

  const dropdownToggle = () => setDropdownOpen(!dropdownOpen)

  const handleCrypto = event =>
    setState({ ...state, crypto: event.target.value })

  const handleCompare = event =>
    setState({ ...state, compare: event.target.value })

  const handlePrice = event =>
    setState({ ...state, price: parseInt(event.target.value) || 0 })

  return (
    <Modal
      isOpen={modal}
      toggle={modalToggle}
      className="modal-dialog-centered"
    >
      <ModalBody className="new-alert">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Crypto currency</h5>
          <Dropdown isOpen={dropdownOpen} toggle={dropdownToggle}>
            <DropdownToggle className="dropdown-btn" caret color="light">
              {state.crypto}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem value="Bitcoin" onClick={handleCrypto}>
                Bitcoin
              </DropdownItem>
              <DropdownItem value="Monero" onClick={handleCrypto}>
                Monero
              </DropdownItem>
              <DropdownItem value="Ethereum" onClick={handleCrypto}>
                Ethereum
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div className="d-flex align-items-center">
          <FormGroup check className="mr-3 text-center">
            <Label check>
              <Input
                type="radio"
                name="compare"
                defaultChecked
                value="Higher than"
                onChange={handleCompare}
              />
              Higher than
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="compare"
                value="Lower than"
                onChange={handleCompare}
              />{" "}
              Lower than
            </Label>
          </FormGroup>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h5>Price</h5>
          <InputGroup className="w-50">
            <Input type="text" placeholder={0} onChange={handlePrice} />
            <InputGroupAddon addonType="prepend">USD</InputGroupAddon>
          </InputGroup>
        </div>
        <div className="text-center">
          <Button className="mr-5" onClick={modalToggle}>
            Cancel
          </Button>
          <Button
            className="ml-5"
            color="primary"
            onClick={() => {
              handleAdd(state)
              setState(alert)
            }}
          >
            Add
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default NewAlert
