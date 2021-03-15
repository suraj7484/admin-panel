import React, { useState } from "react"
import {
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap"

const ImageModal = ({ src }) => {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  return (
    <Modal isOpen={modal} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}></ModalHeader>
      <ModalBody>
        <img src={src} style={ { width: '100%' }}/>
      </ModalBody>
    </Modal>
  )
}

export default ImageModal