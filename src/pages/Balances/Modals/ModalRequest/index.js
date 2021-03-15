import React from "react"
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
  UncontrolledTooltip,
} from "reactstrap"
import PropTypes from "prop-types"

// react-hook-form
const ModalRequest = ({ isOpen, toggle }) => {
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
        Request money
      </ModalHeader>
      <ModalBody>
        <Form>
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
          <FormGroup className="mb-0">
            <Label>
              Payment note <span className="text-muted">(optional)</span>
            </Label>
            <Input type="textarea" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="checkbox" id="checkbox" />
              Save as static QR Code{" "}
              <i class="fas fa-exclamation-circle" id="exclamation"></i>
            </Label>
            <UncontrolledTooltip placement="top" target="exclamation">
              A static QR Code will allow you to receive payments multiple
              times. Convenient to use on printing paper such as donations,
              pricetags, brochures, packaging, newspapers, magazines, etc.
            </UncontrolledTooltip>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Generate QR Code
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ModalRequest.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

export default ModalRequest
