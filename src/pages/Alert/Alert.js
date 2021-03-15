import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { isEmpty, map } from "lodash"
import moment from "moment"
import styled from "styled-components";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Media,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
  UncontrolledTooltip,
  Table
} from "reactstrap"
import classnames from "classnames"

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
/*import images from "assets/images"*/
/*import {
  addMessage,
  getChats,
  getContacts,
  getGroups,
  getMessages
} from "store/actions"*/

import {tableData,headElements} from "../../common/data/alert";

const Alert = (props)=>{
  const [currencyElements,setCurrencyElements] = React.useState(tableData);

  const removeElement = (id)=>{
    setCurrencyElements([...currencyElements.filter(el=>el.id!==id)]);
    console.log([...currencyElements.filter(el=>el.id===id)])
  }

  return(
  <React.Fragment>
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Skote" breadcrumbItem="Alert" />

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
                            <td className="text-center">{el.PAYMENT}</td>
                            <td className="text-center">{el.CURRENCY}</td>
                            <td className="text-center">
                              {el.NAME+"         "}
                            </td>
                            <td className="text-center">
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

export default connect()(Alert)