import { Table } from "reactstrap"
import CardContent from "../CardContent"

const data = [
  "Apple pay",
  "Ethereum",
  "Google pay",
  "Moneygram",
  "Payoneer",
  "Paypal",
  "Skrill",
  "Western union",
]
const Withdraw = () => {
  return (
    <CardContent header="Withdraw">
      <Table bordered className="mb-0">
        <tbody>
          {data.map(item => (
            <tr key={item}>
              <td>{item}</td>
              <td>USD</td>
              <td>United States Dollar</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </CardContent>
  )
}

export default Withdraw
