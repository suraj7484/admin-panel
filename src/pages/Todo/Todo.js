import React,{useState,Fragment} from 'react';
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components";
import moment from "moment"
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
  Table,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb";

import {
	CustomDropdown,
	TableHeadElement,
	CustomPagination,
  headElements,
  HoveredRow
} from "./TodoComponents";

import {dropDownElements,currencyElements,colors} from "../../common/data/todo";

const Todo = (props) => {
	const [dropdownOpen,setDropdownOpen] = useState([false,false,false]);
	const [filterData,setFilterData] = useState({
		currency:"ALL",state:"Active",published:"Publish"
	})
  const [currencyData,setCurrencyData] = useState(currencyElements()) 

	const setFormValue = (name,value)=>{
		setFilterData(prev=>({...prev,[name]:value}))
	}

  const filterTable = ()=>{
    const newCurrencyData = currencyData.filter(el=>{ 
      if (el.currency===filterData.currency || filterData.currency==="ALL")
        return true;
      return false
    })
    console.log(newCurrencyData)
    setCurrencyData(newCurrencyData)
  }

  return (
    <div className="page-content">
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Skote" breadcrumbItem="Todo" />
        <Card>
          <Form className="p-3" >
            <p className="lead m-0 p-2 text-left">
                Todo
            </p>
            <FormGroup 
              className="m-0 flex-sm-row justify-content-center align-items-center
                flex-column"
            >
              <InputGroup 
              	className="
              		d-flex justify-content-around
              ">
                <CustomDropdown 
                	className="d-flex justify-content-center"
                	style={{width:"20%"}}
                	title="Currency"
                	icon="fas fa-money-bill-wave"
                	elements={dropDownElements[0]}
                	value={filterData.currency}
                	handlechange = {
                		e=>setFormValue("currency",e.target.innerText)
                	}
                />
                <CustomDropdown 
                	className="d-flex justify-content-center"
                	style={{width:"30%"}}
                	title="State"
                	icon="fas fa-question"
                	elements={dropDownElements[1]}
                	value={filterData.state}
                	handlechange = {
                		e=>setFormValue("state",e.target.innerText)
                	}
                />
                <Button 
                  style={{width:"20%"}}
                  color="primary" 
                  type="submit"
                  onClick={e=>{
                    e.preventDefault()
                    filterTable()
                  }}
                  >
                  FILTER
                </Button>
              </InputGroup>
              <InputGroup className="
              		d-flex justify-content-around mt-3
              ">
                <CustomDropdown 
                	style={{width:"50%"}}
                	title="Publish state"
                	icon="fas fa-people-arrows"
                	elements={dropDownElements[2]}
                	value={filterData.published}
                	handlechange = {
                		e=>setFormValue("published",e.target.innerText)
                	}
                />
                <Button 
                  style={{width:"20%"}}
                  color="primary" 
                  type="submit"
                  onClick={e=>e.preventDefault()}
                >
                  APPLY
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
                      <Table bordered>
                        <thead>
                          <tr>
                          	<th>
                          		<Input addon type="checkbox" aria-label="Checkbox for following text input" />
                          	</th>
                          {
                            headElements.map((el,id)=>
                            <th 
                              style={{ textAlign: 'center' }}
                              key={id}
                            >
	                            <TableHeadElement>
	                            	{el}
	                            </TableHeadElement>
                            </th>
                            )
                          }
                          </tr>
                        </thead>
                        <tbody>
                        {
                          currencyData.map((el,key)=>{
                          	const {
                          		id,
                          		currency,
                          		type,
                          		date,
                          		get,
                          		give,
                          		payment,
                          		percentage,
                          		publish,
                          		stage,
                          		action
                          	} = el

                            let stageColor = "grey";
                            let textColor="white"
                            if (stage<100) stageColor = colors.green
                            if (stage<50) stageColor = colors.yellow
                            if (stage<25) stageColor = colors.red
                            if (stage<10) stageColor = "lightgrey"

                            if (stageColor===colors.yellow)
                              textColor="grey"
                              
                          return (
                          	<HoveredRow key={key}>
                          		<td style={{ textAlign: 'center' }}>
                          			<Input addon type="checkbox" aria-label="Checkbox for following text input" />
                          		</td>
	                            <td style={{ textAlign: 'center' }}>{id}</td>
	                            <td style={{ textAlign: 'center' }}>{currency}
	                            </td>
	                            <td style={{ textAlign: 'center' }}>{type}
	                            </td>
	                            <td style={{ textAlign: 'center' }}>{moment(date)
                                  .format("DD-MM-YY")}
	                            </td>
	                            <td style={{ textAlign: 'center' }}>{get}
	                            </td>
	                            <td style={{ textAlign: 'center' }}>{give}
	                            </td>
	                            <td style={{ textAlign: 'center' }}>{payment}
	                            </td>
	                            <td style={{color:"red", textAlign: 'center' }}>{percentage}
	                            </td>
	                            <td style={{ textAlign: 'center' }}>{publish}
	                            </td>
	                            <td style={{ textAlign: 'center' }}>
                                <button 
                                  style={{
                                    background:stageColor,
                                    border:"none",
                                    color:textColor,
                                    outline:"none",
                                    borderRadius:"20px"
                                  }}
                                >
                                {stage}%
                                </button>
	                            </td>
	                            <td style={{ textAlign: 'center' }}>
	                            	<i className="fas fa-eye"></i>
	                            	<i className="fas fa-pencil"></i>
	                            </td>
	                          </HoveredRow>
	                        );
                          })
                        }
                        </tbody>
                      </Table>
                    </Row>
                  </div>
                  <div className="
                    	d-flex 
                    	justify-content-center 
                    	w-100
                    	m-4
                  ">
                   	<CustomPagination/>
                  </div>
                </Card>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default connect()(Todo)
