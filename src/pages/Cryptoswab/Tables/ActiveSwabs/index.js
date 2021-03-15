import React, { useState } from "react"
import { Table, Button } from "reactstrap"
import SwabBack from "./SwabBack"

const ActiveSwabs = () => {
  const [modal, setModal] = useState(false)

  const modalToggle = () => setModal(!modal)

  const date = new Date().toLocaleDateString("en-GB")
  const crypto = "Bitcoin"
  const value = "0.00023"
  const usd = "100 USD"

  const data = { date, crypto, value, usd }
  return (
    <Table className="mb-0">
      <thead>
        <tr>
          <th>Date</th>
          <th>Crypto</th>
          <th>Value</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {new Array(3).fill(data).map((item, index) => (
          <tr key={index}>
            <th scope="row">{date}</th>
            <td>{item.crypto}</td>
            <td>
              {item.value}
              <br />
              {item.usd}
            </td>
            <td>
              <Button color="primary" onClick={modalToggle}>
                Swab Back
              </Button>
              <SwabBack modal={modal} modalToggle={modalToggle} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default ActiveSwabs
