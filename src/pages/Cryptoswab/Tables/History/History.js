import React from "react"
import { Table, Button } from "reactstrap"

const History = () => {
  const date = new Date().toLocaleDateString("en-GB")
  const crypto = "Bitcoin"
  const balance = "14"
  const amount = "12 USD"
  const gain = "12%"
  const data = { date, crypto, balance, amount, gain }
  return (
    <Table className="mb-0">
      <thead>
        <tr>
          <th>Date</th>
          <th>Crypto</th>
          <th>Balance</th>
          <th>Amount</th>
          <th>Gain</th>
        </tr>
      </thead>
      <tbody>
        {new Array(6).fill(data).map((item, index) => (
          <tr key={index}>
            <th scope="row">{item.date}</th>
            <td>{item.crypto}</td>
            <td>{item.balance}</td>
            <td>{item.amount}</td>
            <td>{item.gain}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default History
