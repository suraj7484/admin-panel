import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {
  Button,
  Card,
  Col,
  Container,
  Row,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

const Ratings = (props)=>{
  

  return(
  <React.Fragment>
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Skote" breadcrumbItem="Ratings" />

        <Row>
          <Col lg="12">
            <div className="d-lg-flex">
              <div className="w-100 user-chat">
                <Card className="chatMarginBottom">
                  <div className="p-4 border-bottom ">
                    <Row>
                      <Col md="8" xs="3">
                        <h5 className="font-size-15 mb-2">
                          Ratings
                        </h5>
                        <p>The exchanger ratings allows each user to evaluate the quality level of business activities of the offer publisher before starting the exchange</p>
                        <p>The offer publisher information displayed is:</p>
                        <ul>
                          <li>
                            The number of successful exchanges
                          </li>
                          <li>
                            Average exchange duration
                          </li>
                          <li>
                            Duration of work in the exchanger
                          </li>
                          <li>
                            Exchange activity ratings
                          </li>
                        </ul>
                        <p>Exchange activity ratings is calculated from the number of successful exchanges and the amount of funds exchanged. A 0 rating is given to users who have not yet completed a single successful exchange. The higher the rating, the more active the users.</p>
                        <p>
                          When a user does not make a liability stage in the exchange process, the user is given a penalty points that are taken into account  in the final rating.
                        </p>
                        <p>
                        The color of ratings reflects the average time of fulfilment of obligation by users. It has 5 meanings, indicated by color.
                        </p>
                        <ul>
                          <li>Gray: newcomer not a single completed transaction</li>
                          <li>Red: more than a day</li>
                          <li>Orange:6-24 hours</li>
                          <li>Green:1-6 hours</li>
                          <li>Blue:in less than 1 hour</li>
                        </ul>
                        <p>User limit of active offers:</p>
                        <ul>
                          <li>Anonymous user with 0 exchange</li>
                          <li>3 successful exchange or below: 3</li>
                          <li>4 to 10 successful exchange or below: 3</li>
                          <li>above 10 successful exchange: 1000</li>
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default connect()(Ratings)