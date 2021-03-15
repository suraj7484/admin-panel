import React from "react"
import { Card, Col, Row, Table, Input, Button } from "reactstrap"
import { connect } from "react-redux"

const InitialData = [
  {
    PLATFORM: "APPLE PAY",
    CURRENCY: "USD",
    NAME: "United States Dollar",
    id: 1,
  },
  { PLATFORM: "SKRILL", CURRENCY: "GBP", NAME: "United States Dollar", id: 2 },
  { PLATFORM: "GOOGLE PAY", CURRENCY: "CNY", NAME: "China Yuan", id: 3 },
  { PLATFORM: "NETTELER", CURRENCY: "EUR", NAME: "European Union Euro", id: 4 },
  { PLATFORM: "Paypal", CURRENCY: "GBP", NAME: "United States Dollar", id: 5 },
  { PLATFORM: "Skrill", CURRENCY: "EUR", NAME: "European Union Euro", id: 6 },
  { PLATFORM: "NETTELER", CURRENCY: "CNY", NAME: "China Yuan", id: 7 },
  {
    PLATFORM: "Payooner",
    CURRENCY: "USD",
    NAME: "United States Dollar",
    id: 9,
  },
  { PLATFORM: "AliPay", CURRENCY: "CNY", NAME: "China Yuan", id: 10 },
  { PLATFORM: "GOOGLE PAY", CURRENCY: "CNY", NAME: "China Yuan", id: 11 },
  {
    PLATFORM: "Payooner",
    CURRENCY: "USD",
    NAME: "United States Dollar",
    id: 12,
  },
  { PLATFORM: "Paypal", CURRENCY: "GBP", NAME: "United States Dollar", id: 13 },
  { PLATFORM: "NETTELER", CURRENCY: "CNY", NAME: "China Yuan", id: 14 },
  {
    PLATFORM: "Payooner",
    CURRENCY: "EUR",
    NAME: "European Union Euro",
    id: 15,
  },
  {
    PLATFORM: "Payooner",
    CURRENCY: "USD",
    NAME: "United States Dollar",
    id: 16,
  },
  { PLATFORM: "AliPay", CURRENCY: "GBP", NAME: "United States Dollar", id: 17 },
  {
    PLATFORM: "GOOGLE PAY",
    CURRENCY: "USD",
    NAME: "United States Dollar",
    id: 18,
  },
  { PLATFORM: "Paypal", CURRENCY: "EUR", NAME: "European Union Euro", id: 19 },
  { PLATFORM: "AliPay", CURRENCY: "GBP", NAME: "United States Dollar", id: 20 },
  { PLATFORM: "Skrill", CURRENCY: "EUR", NAME: "European Union Euro", id: 21 },
  { PLATFORM: "AliPay", CURRENCY: "GBP", NAME: "United States Dollar", id: 22 },
]
const headElements = ["PLATFORM", "CURRENCY", "NAME"]

const USD = props => {
  const [currencyElements, setCurrencyElements] = React.useState(InitialData)
  const [shownElements, setShownElements] = React.useState(InitialData)
  React.useEffect(() => {
    let newElements = []
    currencyElements.forEach(el => {
      if (el.CURRENCY == "USD") {
        newElements.push(el)
      }
    })
    setCurrencyElements(newElements)
    setShownElements(newElements)
  }, [])
  const filterShownElements = value => {
    if (value) {
      let platform = value.toLowerCase()
      let newElements = currencyElements.filter(element =>
        element.PLATFORM.toLowerCase().includes(platform)
      )
      setShownElements(newElements)
    } else {
      setShownElements(currencyElements)
    }
  }
  return (
    <React.Fragment>
      <Row className="w-100">
        <Col lg="10">
          <div className="search-box chat-search-box pb-2">
            <div className="position-relative">
              <Input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={e => filterShownElements(e.target.value)}
              />
              <i className="bx bx-search-alt search-icon" />
            </div>
          </div>
        </Col>
        <Col lg="2">
          <Button
            outline
            onClick={() => {
              filterShownElements("")
            }}
          >
            Show All
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="w-100">
            <Card>
              <div className="pr-4 pl-4 border-bottom overflow-auto">
                <Row>
                  <Table>
                    <thead>
                      <tr>
                        {headElements.map((el, id) => (
                          <th style={{ textAlign: "center" }} key={id}>
                            {el}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {shownElements.map((el, id) => (
                        <tr key={id}>
                          <td style={{ textAlign: "center" }}>{el.PLATFORM}</td>
                          <td style={{ textAlign: "center" }}>{el.CURRENCY}</td>
                          <td style={{ textAlign: "center" }}>{el.NAME}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect()(USD)
