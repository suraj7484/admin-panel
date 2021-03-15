import React, { useState } from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroup,
} from "reactstrap"
import PropTypes from "prop-types"
import PhoneInput from "react-phone-input-2"

// react-hook-form
const ModalSendPhone = ({ isOpen, toggle }) => {
  const [phone, setPhone] = useState("")

  const handleChange = value => setPhone(value)

  return (
    <Modal className="modal-dialog-centered" isOpen={isOpen} toggle={toggle}>
      <ModalHeader
        toggle={toggle}
        close={
          <button className="close" onClick={toggle}>
            &times;
          </button>
        }
      >
        Send by phone number
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Enter phone number</Label>
            <PhoneInput
              inputClass="w-100"
              country="us"
              value={phone}
              onChange={handleChange}
              placeholder="Phone number"
            />
          </FormGroup>
          <FormGroup>
            <Label>Choose currency</Label>
            <Input type="select" defaultValue="default">
              <option value="default" disabled hidden>
                Select your option
              </option>
              <option>USD United States Dollar</option>
              <option>EUR European Euro</option>
              <option>CNY Chinese Yuan</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Payment amount</Label>
            <Input type="number" />
          </FormGroup>
          <FormGroup>
            <Label>
              Payment note <span className="text-muted">(optional)</span>
            </Label>
            <Input type="textarea" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Send
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ModalSendPhone.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

export default ModalSendPhone
