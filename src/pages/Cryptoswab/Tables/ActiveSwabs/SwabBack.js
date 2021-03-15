import React, { useState, useEffect } from "react"
import { Button, Modal, ModalBody } from "reactstrap"

const SwabBack = ({ modal, modalToggle }) => {
  const [time, setTime] = useState(59)

  useEffect(() => {
    // reset time when close
    if (!modal) setTime(59)

    const timer1 = setTimeout(() => setTime(time > 0 ? time - 1 : 59), 1000)

    return () => {
      clearTimeout(timer1)
    }
  }, [time])

  return (
    <Modal
      isOpen={modal}
      toggle={modalToggle}
      className="modal-dialog-centered"
    >
      <ModalBody>
        <div>
          <div className="d-flex justify-content-between">
            <p>Crypto Currency</p>
            <p>Bitcoin</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Crypto Amount</p>
            <p>12</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Market Price</p>
            <p>12 USD</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Fees</p>
            <p>12 USD</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Balance Value</p>
            <p>12 USD</p>
          </div>
        </div>
        <div className="text-center">00:{time > 9 ? time : "0" + time}</div>
        <div className="text-center">
          <Button className="mr-5" onClick={modalToggle}>
            Cancel
          </Button>
          <Button className="ml-5" color="primary" onClick={modalToggle}>
            Swab Back
          </Button>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default SwabBack
