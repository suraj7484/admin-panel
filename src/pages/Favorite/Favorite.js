import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

import {InitialData,headElements} from "../../common/data/favorite";

const Favorite = (props)=>{
  const [currencyElements,setCurrencyElements] = React.useState(InitialData);

  const removeElement = (id)=>{
    setCurrencyElements([...currencyElements.filter(el=>el.id!==id)]);
    console.log([...currencyElements.filter(el=>el.id===id)])
  }

  return(
  <React.Fragment>
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Skote" breadcrumbItem="Favorite" />

        <Row>
          <Col lg="12">
              <div className="w-100 user-chat">
                <Card className="chatMarginBottom">
                  <div className="p-4 border-bottom overflow-auto">
                    <Row>
                      <Table>
                        <thead>
                          <tr>
                          {
                            headElements.map((el,id)=>
                            <th 
                              style={{ textAlign: 'center' }}
                              key={id}
                            >
                            {el}
                            </th>
                            )
                          }
                          </tr>
                        </thead>
                        <tbody>
                        {
                          currencyElements.map((el,id)=>
                          <tr key={id}>
                            <td style={{ textAlign: 'center' }}>{el.PAYMENT}</td>
                            <td style={{ textAlign: 'center' }}>{el.CURRENCY}</td>
                            <td style={{ textAlign: 'center' }}>
                              {el.NAME+"         "}
                            </td>
                            <td>
                              <Button
                                color="link"
                                size="sm"
                                onClick={e=>removeElement(el.id)}
                              >
                                <i class='bx bxs-trash'></i>
                              </Button>
                            </td>
                          </tr>
                          )
                        }
                        </tbody>
                      </Table>
                    </Row>
                  </div>
                </Card>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
  );
}

export default connect()(Favorite)