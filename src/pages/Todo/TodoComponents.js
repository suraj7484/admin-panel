import React,{Fragment,useState} from "react"
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
  Table,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Pagination,
  PaginationItem,
  PaginationLink
} from "reactstrap"

export const CustomDropdown = props=>{
	const {elements,title,icon,handlechange,value} = props;
	const [dropdownOpen,setDropdownOpen] = useState(false);

	const toggle = ()=>{
		setDropdownOpen(prev=>!prev);
	}

	return(
	  <Dropdown 
      isOpen={dropdownOpen} 
      toggle={toggle}
      {...props}
    >
      <DropdownToggle 
        className="
          border border-secondary 
          bg-transparent
          d-flex
          justify-content-around
          w-100
        "
        caret
      >
      <div className="
      	d-flex w-100 
      	text-secondary 
      	justify-content-center"
      >
    	  <i className={`d-flex align-items-center mr-3 ${icon}`}></i>
	      	{value}
	      <i className="mdi mdi-chevron-down"></i>
	    </div>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>{title}</DropdownItem>
        {
        	elements.map((el,i)=>(
        		<DropdownItem
              key={i} 
		          onClick={handlechange}
		        >
		          {el.text}
		        </DropdownItem>
        	))
        }
      </DropdownMenu>
    </Dropdown>
	);
}

export const TableHeadElement = props=>(
	<CustomFlex>
		<CustomFlex>
			{props.children}
		</CustomFlex>
		<CustomFlex column>
			<i className="fas fa-caret-up"></i>
			<i className="fas fa-caret-down"></i>
		</CustomFlex>
	</CustomFlex>
)

export const CustomFlex = styled.div`
	display:flex;
  ${props=>props.column && `flex-direction:column;`}
	align-items:center;
	align-content:center;
	& >*{
		padding:0;
		margin:0 5px;
	}
`

export const HoveredRow = styled.tr`
  &:hover{
    background:#F2F2F2; 
  }
  &:hover >*{
    background:#F2F2F2;
  }
`

export const CustomPagination = (props) => {
  return (
    <Pagination size="lg" aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
  );
}

export const headElements = [
  <p>#</p>,
  <i className="fas fa-credit-card"></i>,
  <i className="fas fa-history"></i>,
  <i className="fas fa-calendar"></i>,
  <p>Get</p>,
  <p>Give</p>,
  <Fragment>
    <i className="fas fa-caret-left"></i>
    <i className="fas fa-caret-right"></i>
  </Fragment>,
  <i className="fas fa-infinity"></i>,
  <p></p>,
  <p>Stage</p>,
  <p>Action</p>
]