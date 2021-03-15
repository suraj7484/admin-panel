import React from "react"
import { Button, Card } from "reactstrap"

import CardContent from "../CardContent"

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

const Statement = () => {
  return (
    <CardContent header="Choose your monthly statement">
      {data.map((item, index) => (
        <div key={item.year} className={index < data.length - 1 ? "mb-4" : ""}>
          <h6>{item.year}</h6>
          {item.months.map(month => (
            <Card
              key={month}
              className="flex-row align-items-center justify-content-between px-3 py-1 border mb-2"
            >
              <p className="mb-0">{month}</p>
              <Button className="btn-circle" size="sm" color="primary">
                <i className="fas fa-download"></i>
              </Button>
            </Card>
          ))}
        </div>
      ))}
    </CardContent>
  )
}

export default Statement
