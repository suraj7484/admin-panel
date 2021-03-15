import React, { useState } from "react"
import {
  Button,
  Card,
  CardBody,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap"
import classnames from "classnames"
import Chart from "./Chart"

const CryptoCharts = () => {
  const [activeTab, setActiveTab] = useState("1")

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  return (
    <Card>
      <CardBody>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames(
                { active: activeTab === "1" },
                "d-flex align-items-center w-100"
              )}
              onClick={() => {
                toggle("1")
              }}
            >
              <i className="fa-2x fab fa-bitcoin mr-1"></i>
              Bitcoin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames(
                { active: activeTab === "2" },
                "d-flex align-items-center w-100"
              )}
              onClick={() => {
                toggle("2")
              }}
            >
              <i className="fa-2x fab fa-monero mr-1"></i>
              Monero
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames(
                { active: activeTab === "3" },
                "d-flex align-items-center w-100"
              )}
              onClick={() => {
                toggle("3")
              }}
            >
              <i className="fa-2x fab fa-ethereum mr-1"></i>
              Ethereum
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames(
                { active: activeTab === "4" },
                "d-flex align-items-center w-100"
              )}
              onClick={() => {
                toggle("4")
              }}
            >
              <i className="fa-2x fab fa-bitcoin mr-1"></i>
              Cardano
            </NavLink>
          </NavItem>
        </Nav>
        <div className="mt-4">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <Chart />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="2">
              <Chart />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="3">
              <Chart />
            </TabPane>
          </TabContent>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="4">
              <Chart />
            </TabPane>
          </TabContent>
        </div>
      </CardBody>
    </Card>
  )
}

export default CryptoCharts
