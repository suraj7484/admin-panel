import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
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
  Row,
  Table
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"

//data
import {bindings,headElements} from "../../common/data/bindings";

const Bindings = (props)=>{
  const [currencyElements,setCurrencyElements] = useState(bindings);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [inputData, setInputData] = useState({
    SERVICE:"Payoneer",
    ACCOUNT:""
  });

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const setElementValue = (action,e)=>{
    if (action==="input")
      setInputData(prev=>({...prev,ACCOUNT:e.target.value}));
    if (action==="dropdown")
      setInputData(prev=>({...prev,SERVICE:e.target.innerText}));
  }

  const addElement = (e)=>{
    e.preventDefault()
    if (inputData.ACCOUNT)
      setCurrencyElements([{...inputData,id:currencyElements.length},...currencyElements])
  }

  const removeElement = (id)=>{
    setCurrencyElements([...currencyElements.filter(el=>el.id!==id)]);
  }

  return(
  <React.Fragment>
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Skote" breadcrumbItem="Bindings" />
        <Card>
          <Form className="p-3" onSubmit={addElement}>
            <p className="lead m-0 p-2 text-left">
                Bindings
            </p>
            <FormGroup 
              className="m-0 flex-sm-row justify-content-center align-items-center
                flex-column"
            >
              <InputGroup>
                <Dropdown 
                  isOpen={dropdownOpen} 
                  toggle={toggle}
                >
                  <DropdownToggle 
                    className="
                      border border-secondary  
                      bg-transparent
                      d-flex
                      align-content-center
                      mr-3
                    "
                    caret
                  >
                    <p className="m-0 text-secondary">
                      {inputData.SERVICE}
                    </p>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Options</DropdownItem>
                    <DropdownItem 
                      onClick={e=>setElementValue("dropdown",e)}
                    >
                      Skrill
                    </DropdownItem>
                    <DropdownItem
                      onClick={e=>setElementValue("dropdown",e)}
                    >
                      Payoneer
                    </DropdownItem>
                    <DropdownItem
                      onClick={e=>setElementValue("dropdown",e)}
                    >
                      Paypal
                    </DropdownItem>
                    <DropdownItem
                      onClick={e=>setElementValue("dropdown",e)}
                    >
                      Alipay
                    </DropdownItem>
                    <DropdownItem
                      onClick={e=>setElementValue("dropdown",e)}
                    >
                     Neteller
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Input
                  value={inputData.ACCOUNT}
                  type="text"
                  className="form-control"
                  placeholder="Account info"
                  aria-label="Recipient's username"
                  onChange={e=>setElementValue("input",e)}
                />
              </InputGroup>
              <InputGroup 
                className="
                  d-flex justify-content-center 
                  mt-2 w-30
                "
              >
                  <Button 
                    style={{width:"30%"}}
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
                            <td style={{ textAlign: 'center' }}>{el.SERVICE}</td>
                            <td style={{ textAlign: 'center' }}>{el.ACCOUNT}
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

export default connect()(Bindings)