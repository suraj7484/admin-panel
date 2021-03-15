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
	const {elements,title,icon,handleChange,value,...rest} = props;
	const [dropdownOpen,setDropdownOpen] = useState(false);

	const toggle = ()=>{
		setDropdownOpen(prev=>!prev);
	}

	return(
	  <Dropdown 
      isOpen={dropdownOpen} 
      toggle={toggle}
      {...rest}
    >
      <DropdownToggle 
        className="btn nav-btn" tag="i"
        caret
      >
        {value}
      </DropdownToggle>
      <DropdownMenu className="dropdown-menu-md" right>
        <DropdownItem header>{title}</DropdownItem>
        {
        	elements.map(el=>(
        		<DropdownItem 
		          onClick={handleChange}
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
	<CustomRow>
		<CustomRow>
			{props.children}
		</CustomRow>
		<Col>
			<i class="fas fa-caret-up"></i>
			<i class="fas fa-caret-down"></i>
		</Col>
	</CustomRow>
)

export const CustomRow = styled.div`
	display:flex;
	align-items:center;
	algn-content:center;
	& >*{
		padding:0;
		margin:0 5px;
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

export default CustomPagination;