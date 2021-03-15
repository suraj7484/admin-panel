import React from "react"
import { Card, Col, Row, Table, Input, Button } from "reactstrap"
import { connect } from "react-redux"

const InitialData = [
  { COUNTRY: "Afghanistan",CODE: "AFN",CURRENCY: "Afghani afghani",id: 1,},
  { COUNTRY: "Germany", CODE: "EUR", CURRENCY: "Euro", id: 2 },
  { COUNTRY: "Albania", CODE: "ALL", CURRENCY: "Albanian lek", id: 3 },
  { COUNTRY: "Algeria", CODE: "DZD", CURRENCY: "Algerian dinar", id: 4 },
  { COUNTRY: "Angola", CODE: "AOA", CURRENCY: "Angola kwanza", id: 5 },
  { COUNTRY: "Argentina", CODE: "ARS", CURRENCY: "Argentine peso", id: 6 },
  { COUNTRY: "Brazil", CODE: "BRL", CURRENCY: "Brazilian real", id: 7 },
  {
    COUNTRY: "Bulgaria",
    CODE: "BGN",
    CURRENCY: "Bulgarian lev",
    id: 9,
  },
  { COUNTRY: "Canada", CODE: "CAD", CURRENCY: "Canadian dollar", id: 10 },
  { COUNTRY: "China", CODE: "CNY", CURRENCY: "Chinese Yuan", id: 11 },
  {
    COUNTRY: "Hong Kong",
    CODE: "HKD",
    CURRENCY: "Hong Kong dollar",
    id: 12,
  },
  { COUNTRY: "Jordan", CODE: "JOD", CURRENCY: "Jordanian dinar", id: 13 },
  { COUNTRY: "Mexico", CODE: "MXN", CURRENCY: "Mexican peso", id: 14 },
  {
    COUNTRY: "Qatar",
    CODE: "QAR",
    CURRENCY: "Qatari riyal",
    id: 15,
  },
  {
    COUNTRY: "Korea (Republic of)",
    CODE: "KRW",
    CURRENCY: "South Korean won",
    id: 16,
  },
  { COUNTRY: "Tunisia", CODE: "TND", CURRENCY: "Tunisian dinar", id: 17 },
  {
    COUNTRY: "GOOGLE PAY",
    CODE: "USD",
    CURRENCY: "United States Dollar",
    id: 18,
  },
  { COUNTRY: "Turkey", CODE: "TRY", CURRENCY: "Turkish lira", id: 19 },
  { COUNTRY: "United Kingdom of Great Britain", CODE: "GBP", CURRENCY: "British pound", id: 20 },
  { COUNTRY: "United States of America", CODE: "USD", CURRENCY: "United States Dollar", id: 21 },
  { COUNTRY: "Yemen", CODE: "YER", CURRENCY: "Yemeni rial", id: 22 },
]
const headElements = ["COUNTRY", "CURRENCY", "CODE"]

const Country = props => {
  const [elements, setElements] = React.useState(InitialData)
  const [shownElements, setShownElements] = React.useState(InitialData)
  
  const filterShownElements = value => {
    if (value) {
      let COUNTRY = value.toLowerCase()
      let newElements = elements.filter(element =>
        element.COUNTRY.toLowerCase().includes(COUNTRY)
      )
      setShownElements(newElements)
    } else {
      setShownElements(elements)
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
                          <td style={{ textAlign: "center",maxWidth:"10px" }}>{el.COUNTRY}</td>
                          <td style={{ textAlign: "center" }}>{el.CURRENCY}</td>
                          <td style={{ textAlign: "center" }}>{el.CODE}</td>
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

export default connect()(Country)
