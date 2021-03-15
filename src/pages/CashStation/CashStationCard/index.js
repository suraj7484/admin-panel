import React, { useState } from "react"
import {
  ButtonDropdown,
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  Col,
} from "reactstrap"
import { wallet } from "common/data"
import avatar1 from "assets/images/users/avatar-1.jpg"
import StarRatings from "react-star-ratings"

const CashStationCard = ({ handleClick }) => {
  return (
    <a href="#" className="text-secondary" onClick={handleClick}>
      <Card>
        <CardBody className="p-2">
          <Row className="media">
            <Col xs={4} md={3} className="text-center px-3 mr-3">
              <img
                className="avatar-md rounded-circle img-thumbnail"
                src={avatar1}
              />
              <h5>{wallet.userName}</h5>
            </Col>
            <Col xs={3} md={4} className="media-body">
              <p>
                <i className="fas fa-map-marker-alt mr-2"></i>
                Lahore
              </p>
              <p>
                <i className="far fa-comment-alt mr-2"></i>3
              </p>
              <p className="mb-0">
                <i className="fas fa-exchange-alt mr-2"></i>1
              </p>
            </Col>
            <Col xs={5} md={6}>
              <p>
                <i className="fas fa-external-link-square-alt mr-2"></i>
                12 KM
              </p>
              <p>
                <i className="fas fa-percent mr-2"></i>
                20 %
              </p>
              <p className="mb-0">
                <i className="fas fa-money-bill mr-2"></i>
                Deposit WithdrawDeposit Withdraw
              </p>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between">
            <Col xs={4} md={3} className="text-center">
              <p className="mb-0">
                <i className="fas fa-money-bill mr-2"></i>USD
              </p>
              <div className="mb-1">
                <StarRatings
                  className="text-left"
                  rating={5}
                  starRatedColor="#F1B44C"
                  starEmptyColor="#2D363F"
                  numberOfStars={5}
                  name="rating"
                  starDimension="14px"
                  starSpacing="3px"
                />
              </div>
              <p className="mb-0">(10 Reviews)</p>
            </Col>
            <Col xs={8} md={9} className="d-flex align-self-end">
              <div className="w-100"></div>
              <p className="px-2 bg-primary text-light rounded mr-3">Open</p>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </a>
  )
}

export default CashStationCard
