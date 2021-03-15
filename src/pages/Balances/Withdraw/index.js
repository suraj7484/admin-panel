import { Container, Table } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

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
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Withdraw" breadcrumbItem="Withdraw" />
        <div>
          <p>Select a platform to deposit</p>
          <Table>
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
        </div>
      </Container>
    </div>
  )
}

export default connect()(Withdraw)
