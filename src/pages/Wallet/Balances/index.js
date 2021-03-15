import React, { useState } from "react"
import "../styles.scss"
import { Col, Container, Row, Button } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import CardBalance from "./CardBalance"
import ModalCreate from "./ModalCreate"
import USD_Image from "../../../assets/images/flags/us.jpg"
import CNY_Image from "../../../assets/images/flags/cny.jpg"
import EUR_Image from "../../../assets/images/flags/euro.jpg"
import FR_Image from "../../../assets/images/flags/french.jpg"
import GE_Image from "../../../assets/images/flags/germany.jpg"
import IT_Image from "../../../assets/images/flags/italy.jpg"

const data = [
  {
    currency: "US",
    label: "United States dollar",
    amount: "USD 100.00",
    image: USD_Image,
  },
  {
    currency: "GB",
    label: "British pound",
    amount: "GBP 100.00",
    image: CNY_Image,
  },
  {
    currency: "AU",
    label: "Euro",
    amount: "EUR 100.00",
    image: EUR_Image,
  },
  {
    currency: "RU",
    label: "Russia Ruble",
    amount: "RUB 100.00",
    image: FR_Image,
  },
  {
    currency: "AU",
    label: "Euro",
    amount: "EUR 100.00",
    image: GE_Image,
  },
  {
    currency: "AU",
    label: "Euro",
    amount: "EUR 100.00",
    image: IT_Image,
  },
]

const Balances = props => {
  const [modalCreate, setModalCreate] = useState(false)
  const createToggle = () => setModalCreate(!modalCreate)
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Balances" breadcrumbItem="Balances" />
          <Row>
            {data.map(item => (
              <Col xs={4} key={item.currency}>
                <CardBalance
                  currency={item.currency}
                  label={item.label}
                  amount={item.amount}
                  url={`/balances/${item.currency}`}
                  image={item.image}
                />
              </Col>
            ))}
          </Row>
          <div className="text-center">
            <Button color="primary" onClick={createToggle}>
              Open new balance
            </Button>
          </div>
          <ModalCreate isOpen={modalCreate} toggle={createToggle} />
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(Balances)
