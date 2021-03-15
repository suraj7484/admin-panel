import React, { useState } from "react"
import PropTypes from "prop-types"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"

const ModalClose = ({ isOpen, toggle }) => {
  return (
    <Modal className="modal-dialog-centered" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h5 className="text-danger">
          <i className="fas fa-exclamation-triangle mr-2"></i>Warning
        </h5>
      </ModalHeader>
      <ModalBody>Are you sure you want to close this balance?</ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Yes
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ModalClose.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

export default ModalClose
