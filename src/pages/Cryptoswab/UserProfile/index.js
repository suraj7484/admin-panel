import React, { useState } from "react"
import {
  ButtonDropdown,
  Card,
  CardBody,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap"
import { wallet } from "common/data"
import avatar1 from "assets/images/users/avatar-1.jpg"

const UserProfile = () => {
  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)
  return (
    <Card>
      <CardBody>
        <div className="media">
          <div className="mr-3">
            <img
              className="avatar-md rounded-circle img-thumbnail"
              src={avatar1}
            />
          </div>
          <div className="align-self-center media-body">
            <h5>{wallet.userName}</h5>
            <p className="mb-1">{wallet.email}</p>
            <p className="mb-0">Id no: {wallet.id}</p>
          </div>
          <ButtonDropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            // direction="down"
          >
            <DropdownToggle caret color="light">
              <i className="mdi mdi-wallet mr-1"></i>Wallet Balance{" "}
              <i className="mdi mdi-chevron-down"></i>
            </DropdownToggle>
            <DropdownMenu right className="dropdown-menu-md mt-1">
              <DropdownItem text>Available Balance</DropdownItem>
              <DropdownItem text className="mb-0">
                {wallet.availableBalance}
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="d-flex justify-content-between">
                BTC: <span>1.02356</span>
              </DropdownItem>
              <DropdownItem className="d-flex justify-content-between">
                ETH: <span>0.04121</span>
              </DropdownItem>
              <DropdownItem className="d-flex justify-content-between">
                LTC: <span>0.00356</span>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="text-primary text-center">
                Learn more
              </DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </CardBody>
    </Card>
  )
}

export default UserProfile
