import React, { useEffect, useState, Fragment } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import moment from "moment"
import {map} from "lodash"
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
  UncontrolledDropdown,
} from "reactstrap"

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import images from "assets/images"
import {
  getMessages
} from "store/actions"

import {CustomDropdown} from "./ArbitrationComponents";
import {initialMessages,participants} from "../../common/data/arbitration"

const Arbitration = props => {
  const [messages, setMessages] = useState(initialMessages);
  const [currentUser, setCurrentUser] = useState({
    name: "Henry Wells",
    isActive: true
  });
  const [seeAllparticipants,setSeeAllParticipants] = useState(false)

  const toggleMessageIcons = (index, value) => {
    let newmessages = [...messages]; 
    newmessages[index].selected = value;
    setMessages(newmessages); 
  } 

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Skote" breadcrumbItem="Arbitration" />

          <Row>
            <Col lg="12">
              <div className="d-lg-flex">
                <div className="w-100 user-chat">
                  <Card className="chatMarginBottom">
                    <div className="pt-4 pr-4 pl-4 pb-0 border-bottom">
                      <Row>
                        <Col md="4" xs="9">
                          <h5 className="font-size-15 mb-1">
                            Arbitration
                          </h5>

                          <p className="text-muted mb-0">
                            <i
                              className={
                                
                                  "mdi mdi-circle text-success align-middle mr-1"
                                  
                              }
                            />
                            online
                          </p>
                        </Col>
                        <Col md="8" xs="3">
                          <ul className="list-inline user-chat-nav text-right mb-0">
                            <li className="list-inline-item">
                              <div className="
                                btn nav-btn dropdown" 
                                tag="i"
                              >
                                <i className="fas fa-history" />
                              </div>
                            </li>
                            <li className="list-inline-item">
                              <CustomDropdown 
                                elements={[]}
                                value={ 
                                  <i className="bx bx-dots-horizontal-rounded" />
                                }
                                title="Options"
                              />
                            </li>
                            <li className="list-inline-item  d-none d-sm-inline-block">
                              <CustomDropdown
                                elements={[]}
                                value={
                                  <i className="bx bx-cog" />
                                }
                                title="Configuration"
                              />
                            </li>
                          </ul>
                        </Col>
                      </Row>
                      <Row className="mt-3" >
                        <Col xs="12">
                          <Card style={{padding:"0px"}}>
                            <CardHeader>
                              <Row className="
                                d-flex justify-content-around
                              "
                              >
                                <p className="m-0"
                                >SELL SECTION</p>
                                <p className="m-0"
                                >OFFER ID #12345678</p>
                              </Row>
                            </CardHeader>
                            <CardBody>
                              <Row>
                                <CardTitle tag="h6">
                                  Participants:
                                </CardTitle>
                                <CardText>
                                  <Row>
                                  {map(participants, (name,index) => {
                                    if (index>3 && !seeAllparticipants)
                                      return <Fragment></Fragment>

                                    return <p 
                                      key={index}
                                      className="ml-4"
                                    >
                                      {name+(index+1!==participants.length && ",")}
                                    </p>
                                  })}
                                    <Button 
                                      style={{transform:"translateY(-7px)"}}
                                      size="sm"
                                      color="link"
                                      className="ml-4 "
                                      onClick={()=>
                                        setSeeAllParticipants(prev=>!prev)}
                                    > 
                                        {seeAllparticipants?"see less":"see all..."}
                                    </Button>
                                  </Row>
                                </CardText>
                              </Row>
                              <Row>
                                <CardTitle tag="h6">
                                  Arbitrate started:
                                </CardTitle>
                                <CardText>
                                  16/04/2020
                                </CardText>
                              </Row>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </div>

                    <div>
                      <div className="chat-conversation p-3">
                        <ul className="list-unstyled">
                          <PerfectScrollbar
                            style={{ height: "410px" }}
                          >
                            <li>
                              <div className="chat-day-title">
                                <span className="title">Today</span>
                              </div>
                            </li>
                              {messages &&
                              map(messages, (message,index) => (
                                <li
                                  key={"test_k" + message.id}
                                  style={{maxWidth:"500px"}}
                                >
                                  <div className="conversation-list" onMouseEnter={() => toggleMessageIcons(index,true)} onMouseLeave={() => toggleMessageIcons(index,false)}>
                                    {
                                      message.selected
                                        ? <UncontrolledDropdown>
                                            <div className={"position-absolute d-flex flex-row"}>
                                              <div className="p-1 btn nav-btn"><i className="bx bx-like" /></div>
                                              <div className="p-1 btn nav-btn"><i className="bx bxs-flag-checkered" /></div>
                                              <div className="p-1 btn nav-btn"><i className="bx bx-flag" /></div>
                                            </div>
                                            {/* <DropdownToggle
                                              href="#"
                                              className="p-1 btn nav-btn"
                                              tag="i"
                                            >
                                              <i className="bx bx-dots-vertical-rounded" />
                                            </DropdownToggle>
                                            <DropdownMenu direction="right">
                                              <DropdownItem href="#">
                                                Remove
                                              </DropdownItem>
                                              <DropdownItem href="#">
                                                Forward
                                              </DropdownItem>
                                            </DropdownMenu> */}
                                          </UncontrolledDropdown>
                                        : ""
                                    }
                                    <div className="ctext-wrap">
                                      <div className="conversation-name">
                                        {message.sender}
                                      </div>
                                      <p>{message.message}</p>
                                      <p className="chat-time mb-0">
                                        <i className="bx bx-time-five align-middle mr-1" />
                                        {moment(message.createdAt).format(
                                          "DD-MM-YY hh:mm"
                                        )}
                                      </p>
                                      <div style={{position: "absolute", right: -4, bottom: -8}} className="pl-2 pr-2 pt-1 bg-white rounded align-items-center"><i className="bx bxs-like bx-xsm text-primary mr-2" />1</div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </PerfectScrollbar>
                        </ul>
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

Arbitration.propTypes = {
  messages: PropTypes.array,
  roomId: PropTypes.string,
  onGetMessages: PropTypes.func,
}

const mapStateToProps = ({chat})=>({
  messages:chat.messages
});

const mapDispatchToProps = dispatch => ({
  onGetMessages: roomId=>dispatch(getMessages(roomId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Arbitration)
