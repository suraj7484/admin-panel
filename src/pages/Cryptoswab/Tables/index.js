import React, { useState } from "react"
import {
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  Table,
  TabPane,
  Button,
} from "reactstrap"
import classnames from "classnames"
import ActiveSwabs from "./ActiveSwabs/index"
import History from "./History/History"
import PriceAlert from "./PriceAlert/index"

const Tables = () => {
  const [activeTab, setActiveTab] = useState("1")

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <Card>
      <CardBody className="pb-0">
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1")
              }}
            >
              Active Swabs
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2")
              }}
            >
              History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3")
              }}
            >
              Price Alert
            </NavLink>
          </NavItem>
        </Nav>
        <div className="mt-4">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <ActiveSwabs />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="2">
              <History />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="3">
              <PriceAlert />
            </TabPane>
          </TabContent>
        </div>
      </CardBody>
    </Card>
  )
}

export default Tables
