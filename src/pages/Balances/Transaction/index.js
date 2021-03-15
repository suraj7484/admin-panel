import React from "react"
import { Container, Table } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"

const data = [
  {
    date: "12/02/2020",
    data: [
      { status: 2, details: "Deposit USD Debit card", amount: 10 },
      { status: 1, details: "Deposit fees", amount: 10 },
      { status: 2, details: "Withdraw USD Bank wire", amount: -50 },
      { status: 1, details: "Withdraw fees", amount: 10 },
      {
        status: 2,
        details:
          "Received USD mobile id +123456778 on monday 18 2019 via salary account",
        amount: 50000.25,
      },
      { status: 1, details: "Send USD mobile id +123456778", amount: -200 },
      { status: 3, details: "Send money fees", amount: -1 },
      { status: 3, details: "Convert CNY - USD", amount: 100 },
      { status: 2, details: "Convert CNY - EUR", amount: -500 },
      { status: 1, details: "Exchange USD PayPal Sell id#1234", amount: -25 },
      { status: 2, details: "Exchange USD Skrill buy id#1234", amount: -15 },
      { status: 1, details: "Exchange insurance buy id#1234", amount: -2 },
      { status: 2, details: "Exchange insurance id#1234 refund", amount: 2 },
    ],
  },
]

const Transaction = () => {
  return (
    <div className="page-content">
      <Container fluid>
        <Breadcrumbs title="Transaction" breadcrumbItem="Transaction" />
        <div>
          {data.map(item => (
            <React.Fragment key={item.date}>
              <h5>{item.date}</h5>
              <Table>
                <thead>
                  <tr>
                    <th className="fit">Status</th>
                    <th>Details</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                {item.data.map(transaction => (
                  <tbody key={transaction.details + transaction.amount}>
                    <tr>
                      <td className="text-center">
                        <i
                          className={
                            transaction.status === 1
                              ? "fas fa-arrow-up"
                              : transaction.status === 2
                              ? "fas fa-arrow-down"
                              : "fas fa-sync"
                          }
                        ></i>
                      </td>
                      <td>{transaction.details}</td>
                      <td
                        className={
                          transaction.amount > 0
                            ? "text-success"
                            : "text-danger"
                        }
                      >
                        {transaction.amount > 0 && "+"}
                        {transaction.amount}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </React.Fragment>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default connect()(Transaction)
