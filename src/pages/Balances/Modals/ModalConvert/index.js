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

const ModalConvert = ({ isOpen, toggle }) => {
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
        Convert
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <PhoneInput
              inputClass="w-100"
              country="us"
              // value={phone}
              // onChange={handleChange}
            />
          </FormGroup>
          <ul>
            <li>Fee 1%</li>
            <li>0.0 converted</li>
            <li>0.9203 Conversion rate</li>
          </ul>
          <FormGroup>
            <PhoneInput
              inputClass="w-100"
              country="de"
              // value={phone}
              // onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Convert
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ModalConvert.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

export default ModalConvert
