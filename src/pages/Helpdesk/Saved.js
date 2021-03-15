import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import { isEmpty, map } from "lodash"
import moment from "moment"
import {
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
  UncontrolledTooltip
} from "reactstrap"
import classnames from "classnames"
import { Button } from '@material-ui/core';

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import images from "assets/images"
import {
  addMessage,
  getChats,
  getContacts,
  getGroups,
  getMessages
} from "store/actions"
import { MdCancel } from "react-icons/md";

import chat_data from "../../common/data/helpdesk"
import { BsSearch } from "react-icons/bs";
import { MdReplyAll } from "react-icons/md";


const Saved = () => {
  const history = useHistory()
  const [messageBox, setMessageBox] = useState(null)
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Skote" breadcrumbItem="Helpdesk" />

          <Row>
            <Col lg="12">
              <div className="d-lg-flex">
                <div className="w-100 user-chat">
                  <Card className="chatMarginBottom">
                    <div className="p-4 border-bottom help-desk-header help-desk-header">
                      <Row>
                        <Col md="1" xs="1">
                          <Link to="/help-desk"><i className="bx bx-chevron-left backIcon" /></Link>
                        </Col>
                        <Col md="4" xs="4">
                          <h5 className="font-size-35 mb-3 ">
                            Saved
                          </h5>
                        </Col>
                        <Col md="7" xs="7">
                          <div className="chat-searchs ">
                            <Input className="chat-search__input" />
                            <Button variant="outlined" className="chat-search__btn">
                              <BsSearch className="chat-search__icon" />
                            </Button>
                          </div>
                        </Col>
                      </Row>

                    </div>
                    <div className="chat__mainSections">
                      <div className="chat__leftSections">
                        <div className="chat-conversation p-3">
                          <ul className="list-unstyled">
                            <PerfectScrollbar
                              className="chatInbox__Container chatInbox__Containers"
                              containerRef={ref => setMessageBox(ref)}
                            >
                              <li
                                className="chatInbox__li"
                              >
                                <div className="conversation-list chatInbox__list" >
                                  <div className="message-containers chatInbox__main">
                                    <div className="ctext-wraps chat__inbox chat__inboxs help-desk__inbox ctextWraps__left" style={{ cursor: "pointer" }} onClick={() => history.push("/help-desk/liked")}>
                                      <div className="chatInbox__left">
                                        <i className="bx bx-like font-size-20 mr-3 __i" />
                                      </div>
                                      <div className="chatInbox__right" style={{ marginBottom: "-7px" }}>
                                        <h5>Liked message</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="chatInbox__li"
                              >
                                <div className="conversation-list chatInbox__list">
                                  <div className="message-containers chatInbox__main">
                                    <div className="ctext-wraps chat__inbox chat__inboxs help-desk__inbox ctextWraps__left" style={{ cursor: "pointer" }} onClick={() => history.push("/help-desk/saved")}>
                                      <div className="chatInbox__left active">
                                        <i className="bx bx-save font-size-20 mr-3 __i" />
                                      </div>
                                      <div className="chatInbox__right active" style={{ marginBottom: "-7px" }}>
                                        <h5>Saved message</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="chatInbox__li"
                              >
                                <div className="conversation-list chatInbox__list">
                                  <div className="message-containers chatInbox__main">
                                    <div className="ctext-wraps chat__inbox chat__inboxs help-desk__inbox ctextWraps__left" style={{ cursor: "pointer" }} onClick={() => history.push("/help-desk/mentions")}>
                                      <div className="chatInbox__left">
                                        <i className="bx bx-at font-size-20 mr-3 __i" />
                                      </div>
                                      <div className="chatInbox__right" style={{ marginBottom: "-7px" }}>
                                        <h5>Mentions</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li
                                className="chatInbox__li"
                              >
                                <div className="conversation-list chatInbox__list">
                                  <div className="message-containers chatInbox__main" style={{ marginTop: "2rems" }}>
                                    <div className="ctext-wraps chat__inbox chat__inboxs help-desk__inbox ctextWraps__left" style={{ cursor: "pointer" }} onClick={() => history.push("/help-desk/help")}>
                                      <div className="chatInbox__left">
                                        <i className="bx bx-info-circle font-size-20 mr-3 __i" />
                                      </div>
                                      <div className="chatInbox__right" style={{ marginBottom: "-7px" }}>
                                        <h5>Info Sections</h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </PerfectScrollbar>
                          </ul>
                        </div>
                      </div>

                      <div className="chat__rightSections saved__section">
                        <div className="savedItems">
                          <p className="saved__name">Lorem ipsum dolor sit ame</p>
                          <MdCancel className="crossIcon" />
                        </div>
                        <div className="savedItems">
                          <p className="saved__name">Lorem ipsum dolor sit ame</p>
                          <MdCancel className="crossIcon" />
                        </div>
                        <div className="savedItems">
                          <p className="saved__name">Lorem ipsum dolor sit ame</p>
                          <MdCancel className="crossIcon" />
                        </div>
                        <div className="savedItems">
                          <p className="saved__name">Lorem ipsum dolor sit ame</p>
                          <MdCancel className="crossIcon" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Col>


          </Row>


        </Container>
      </div>
    </React.Fragment>
  )
}

export default Saved;
