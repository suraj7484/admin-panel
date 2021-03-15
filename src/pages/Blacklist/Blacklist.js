import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Row,
  Table
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//assets
import userImage from "../../assets/images/users/avatar-2.jpg"

import {InitialData,headElements} from "../../common/data/blacklist";

const UserLogo = styled.img`
  width:1.5em;
  height:1.5em;
`;

const Blacklist = (props)=>{
  const [userElements,setuserElements] = useState(InitialData);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inputData, setInputData] = useState({
    username:"",
    comments:""
  });

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const setElementValue = (action,e)=>{
    if (action==="username")
      setInputData(prev=>({...prev,username:e.target.value}));
    if (action==="comments")
      setInputData(prev=>({...prev,comments:e.target.value}));
  }

  const addElement = (e)=>{
    e.preventDefault()
    if (inputData.comments)
      setuserElements([{...inputData,id:userElements.length},...userElements])
  }

  const removeElement = (id)=>{
    setuserElements([...userElements.filter(el=>el.id!==id)]);
  }

  return(
  <React.Fragment>
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Skote" breadcrumbItem="Blacklist" />
        <Card>
          <Form className="p-3" onSubmit={addElement}>
            <FormGroup className="m-0">
              <p className="lead p-2 text-center">
                If you add users to the blacklist, they cannot exchange with you. All their offers will be hidded from you and vice versa. Your offers will not be seen by them
              </p>
              <InputGroup 
              className="
                d-flex flex-sm-row
                align-items-sm-center 
                flex-column align-items-left"
              >
                <label 
                  for="blacklist_username_input" 
                  className="mr-3 mt-1"
                >
                 Username 
                </label>
                <Input
                  value={inputData.username}
                  type="text"
                  className="form-control w-auto"
                  placeholder="Username"
                  aria-label="Recipient's username"
                  onChange={e=>setElementValue("username",e)}
                  id="blacklist_username_input"
                />
              </InputGroup>
              <InputGroup 
                className="
                d-flex flex-sm-row mt-2
                align-items-sm-center 
                flex-column align-items-left"
              >
                <label 
                  for="blacklist_username_comment" 
                  className="mr-3 mt-1"
                >
                 Comment 
                </label>
                <Input
                  value={inputData.comments}
                  type="text"
                  className="form-control w-auto"
                  placeholder="Comment"
                  aria-label="Recipient's comment"
                  onChange={e=>setElementValue("comments",e)}
                  id="blacklist_username_comment"
                />
              </InputGroup>
              <InputGroup className="mt-2 d-lg-flex justify-content-center">
                  <Button 
                    className="w-lg"
                    color="primary" 
                    type="submit"
                    onClick={addElement}
                  >
                    ADD
                    <i className="mdi mdi-plus ml-2" />
                  </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Card>

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
                              className="text-center"
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
                          userElements.map((el,id)=>
                          <tr key={id}>
                            <td className="text-center pt-3 pb-1">
                              <div className="d-flex ">
                                <UserLogo 
                                  src={userImage}
                                  className="mr-2 rounded-circle"
                                />
                                <p>{el.username}</p>
                              </div>
                            </td>
                            <td 
                              className="text-center word-wrap"
                            >{el.comments}
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

export default connect()(Blacklist)