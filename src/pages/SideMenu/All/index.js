import React from "react";
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import classnames from "classnames"
import {
  Card,
  Col,
  Container,
  Row,
  Table,
  Nav,
  NavItem,
  NavLink
} from "reactstrap"

const InitialData = [
  {PLATFORM:"APPLE PAY",CURRENCY:"USD",NAME:"United States Dollar",id:1},
  {PLATFORM:"SKRILL",CURRENCY:"GBP",NAME:"United States Dollar",id:2},
  {PLATFORM:"GOOGLE PAY",CURRENCY:"CNY",NAME:"China Yuan",id:3},
  {PLATFORM:"NETTELER",CURRENCY:"EUR",NAME:"European Union Euro",id:4},
  {PLATFORM:"Paypal",CURRENCY:"GBP",NAME:"United States Dollar",id:5},
  {PLATFORM:"Skrill",CURRENCY:"EUR",NAME:"European Union Euro",id:6},
  {PLATFORM:"NETTELER",CURRENCY:"CNY",NAME:"China Yuan",id:7},
  {PLATFORM:"Payooner",CURRENCY:"USD",NAME:"United States Dollar",id:9},
  {PLATFORM:"AliPay",CURRENCY:"CNY",NAME:"China Yuan",id:10},
  {PLATFORM:"GOOGLE PAY",CURRENCY:"CNY",NAME:"China Yuan",id:11},
  {PLATFORM:"Payooner",CURRENCY:"USD",NAME:"United States Dollar",id:12},
  {PLATFORM:"Paypal",CURRENCY:"GBP",NAME:"United States Dollar",id:13},
  {PLATFORM:"NETTELER",CURRENCY:"CNY",NAME:"China Yuan",id:14},
  {PLATFORM:"Payooner",CURRENCY:"EUR",NAME:"European Union Euro",id:15},
  {PLATFORM:"Payooner",CURRENCY:"USD",NAME:"United States Dollar",id:16},
  {PLATFORM:"AliPay",CURRENCY:"GBP",NAME:"United States Dollar",id:17},
  {PLATFORM:"GOOGLE PAY",CURRENCY:"USD",NAME:"United States Dollar",id:18},
  {PLATFORM:"Paypal",CURRENCY:"EUR",NAME:"European Union Euro",id:19},
  {PLATFORM:"AliPay",CURRENCY:"GBP",NAME:"United States Dollar",id:20},
  {PLATFORM:"Skrill",CURRENCY:"EUR",NAME:"European Union Euro",id:21},
  {PLATFORM:"AliPay",CURRENCY:"GBP",NAME:"United States Dollar",id:22},
]
const headElements = ["PLATFORM","CURRENCY","NAME"];
const Alfabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","All"]

const All = props => {
  const [currencyElements, setCurrencyElements] = React.useState(InitialData)
  const [shownElements, setShownElements] = React.useState(InitialData)
  const [activeLetter, setActiveLetter] = React.useState("All")
  const toggleTab = letter => {
    if (activeLetter !== letter) {
      setActiveLetter(letter)
      showElementsWithLetter(letter)
    }
  }
  const showElementsWithLetter = letter => {
    if (letter == "All") {
      setShownElements(currencyElements)
    } else {
      let newElements = []
      currencyElements.forEach(element => {
        if (element.PLATFORM[0].toUpperCase() == letter) {
          newElements.push(element)
        }
      })
      setShownElements(newElements)
    }
  }
  return (
    <React.Fragment>
      <Nav className="bg-white rounded" pills justified>
        {Alfabets.map((al, id) => (
          <NavItem style={{ width: "40px" }} id={id}>
            <NavLink
              className={classnames({
                active: activeLetter === al,
              })}
              onClick={() => {
                toggleTab(al)
              }}
            >
              <span className="d-none d-sm-block">{al}</span>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <div className="w-100 rounded pb-1"></div>
      <Row>
        <Col lg="12">
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

export default connect()(All)
