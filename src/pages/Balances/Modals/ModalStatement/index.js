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
  Card,
  CardBody,
} from "reactstrap"
import PropTypes from "prop-types"
import { formatIsoTimeString } from "@fullcalendar/core"
import DownloadCard from "./DownloadCard"

const data = [
  {
    year: 2020,
    months: ["January"],
  },
  {
    year: 2019,
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
]

// react-hook-form
const ModalStatement = ({ isOpen, toggle }) => {
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
        Statement
      </ModalHeader>
      <ModalBody>
        <h5 className="mb-4">Choose your monthly statement</h5>
        {/* <h6>2020</h6>
        <Card className="flex-row align-items-center justify-content-between px-3 py-1 border">
          <p className="mb-0">January</p>
          <Button
            className="btn-circle"
            size="sm"
            color="primary"
            // style={{ width: 30, height: 30, borderRadius: 30 }}
          >
            <i className="fas fa-download"></i>
          </Button>
        </Card> */}
        {data.map(item => (
          <React.Fragment key={item.year}>
            <h6>{item.year}</h6>
            {item.months.map(month => (
              <DownloadCard label={month} />
            ))}
            <div className="mb-4" />
          </React.Fragment>
        ))}
      </ModalBody>
      {/* <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Send
        </Button>
      </ModalFooter> */}
    </Modal>
  )
}

ModalStatement.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

export default ModalStatement
