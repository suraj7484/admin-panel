import React from "react"
import { Card, Table } from "reactstrap"

const data = [
  {
    date: "14/02/2020",
    data: [
      {
        status: 1,
        details: "Deposit fees",
        amount: -10,
      },
      {
        status: 1,
        details: "Withdraw USD Bank wire",
        amount: -50,
      },
      {
        status: 1,
        details: "Withdraw fees",
        amount: -10,
      },
      {
        status: 3,
        details:
          "Received USD mobile id +123456778 on monday 18 2019 via salary account",
        amount: 50,
      },
      {
        status: 1,
        details: "Sent USD mobile id +123456778",
        amount: -200,
      },
    ],
  },
  {
    date: "13/02/2020",
    data: [
      {
        status: 2,
        details: "Sent money fees",
        amount: -1,
      },
      {
        status: 3,
        details: "Convert CNY - USD",
        amount: 100,
      },
      {
        status: 1,
        details: "Convert CNY - EUR",
        amount: -500,
      },
      {
        status: 2,
        details:
          "Exchange USD PayPal Sell id#1234 on monday 18 2019 via salary account",
        amount: -25,
      },
      {
        status: 2,
        details: "Exchange USD Skrill buy id#1234",
        amount: -15,
      },
      {
        status: 1,
        details:
          "Exchange insurance buy id#1234 on monday 18 2019 via salary account",
        amount: -2,
      },
      {
        status: 3,
        details: "Exchange insurance id#1234 refund",
        amount: 2,
      },
    ],
  },
  {
    date: "12/02/2020",
    data: [
      {
        status: 1,
        details: "Deposit fees",
        amount: -10,
      },
      {
        status: 1,
        details: "Withdraw USD Bank wire",
        amount: -50,
      },
      {
        status: 1,
        details: "Withdraw fees",
        amount: -10,
      },
      {
        status: 3,
        details:
          "Received USD mobile id +123456778 on monday 18 2019 via salary account",
        amount: 50,
      },
      {
        status: 1,
        details: "Sent USD mobile id +123456778",
        amount: -200,
      },
    ],
  },
  {
    date: "11/02/2020",
    data: [
      {
        status: 2,
        details: "Sent money fees",
        amount: -1,
      },
      {
        status: 3,
        details: "Convert CNY - USD",
        amount: 100,
      },
      {
        status: 1,
        details: "Convert CNY - EUR",
        amount: -500,
      },
      {
        status: 2,
        details:
          "Exchange USD PayPal Sell id#1234 on monday 18 2019 via salary account",
        amount: -25,
      },
      {
        status: 2,
        details: "Exchange USD Skrill buy id#1234",
        amount: -15,
      },
      {
        status: 1,
        details:
          "Exchange insurance buy id#1234 on monday 18 2019 via salary account",
        amount: -2,
      },
      {
        status: 3,
        details: "Exchange insurance id#1234 refund",
        amount: 2,
      },
    ],
  },
]

const Transaction = () => {
  return (
    <Card body className="transaction">
      {data.map((item, index) => (
        <React.Fragment key={item.date}>
          <h5 className={index !== 0 ? "mt-3" : ""}>{item.date}</h5>
          <Table bordered>
            <thead>
              <tr>
                <th className="fit">Status</th>
                <th>Details</th>
                <th>Amount</th>
              </tr>
            </thead>
            {item.data.map(activity => (
              <tbody key={activity.details + activity.amount}>
                <tr>
                  <td className="text-center">
                    <i
                      className={
                        activity.status === 1
                          ? "fas fa-arrow-up"
                          : activity.status === 2
                          ? "fas fa-arrow-down"
                          : "fas fa-sync"
                      }
                    ></i>
                  </td>
                  <td>{activity.details}</td>
                  <td
                    className={
                      activity.amount > 0 ? "text-success" : "text-danger"
                    }
                  >
                    {activity.amount > 0 && "+"}
                    {activity.amount}
                  </td>
                </tr>
              </tbody>
            ))}
          </Table>
        </React.Fragment>
      ))}
    </Card>
  )
}
export default Transaction
