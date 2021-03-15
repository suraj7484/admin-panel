import React, {useState} from "react";
import { Link } from "react-router-dom"
import { Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Input,
  Media, 
  TabContent,
  TabPane,
  Col,
  Row} from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import USD_Image from "../../../assets/images/flags/us.jpg"
import CNY_Image from "../../../assets/images/flags/cny.jpg"
import EUR_Image from "../../../assets/images/flags/euro.jpg"
import All from "../All/index"
import USD from "../USD/index"
import EUR from "../EUR/index"
import CNY from "../CNY/index"
import Country from "../Country/index"
import Cash from "../Cash/index"
import Crypto from "../Crypto/index"
import Card from "../Card/index"

const Exchanger = props => {
  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  const [activeTab,setActiveTab] = useState("All")

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Exchanger" breadcrumbItem={activeTab} />
          <Row>
            <Col sm="2">
              <div className="mail-list rounded bg-white">
                <Link
                  onClick={() => toggleTab("All")}
                  className={activeTab == "All" ? "active" : "border"}
                >
                  <i
                    style={{ paddingRight: "20px" }}
                    className="mdi mdi-folder-open-outline font-size-20 "
                  ></i>
                  All
                </Link>
                <Link
                  onClick={() => toggleTab("USD")}
                  className={activeTab == "USD" ? "active" : "border"}
                >
                  <img
                    src={USD_Image}
                    style={{ width: "20px", marginRight: "20px" }}
                  ></img>{" "}
                  USD
                </Link>
                <Link
                  onClick={() => toggleTab("EUR")}
                  className={activeTab == "EUR" ? "active" : "border"}
                >
                  <img
                    src={EUR_Image}
                    style={{ width: "20px", marginRight: "20px" }}
                  ></img>{" "}
                  EUR
                </Link>
                <Link
                  onClick={() => toggleTab("CNY")}
                  className={activeTab == "CNY" ? "active" : "border"}
                >
                  <img
                    src={CNY_Image}
                    style={{ width: "20px", marginRight: "20px" }}
                  ></img>{" "}
                  CNY
                </Link>
                <Link
                  onClick={() => toggleTab("Country")}
                  className={activeTab == "Country" ? "active" : "border"}
                >
                  <i
                    style={{ paddingRight: "20px" }}
                    className="mdi mdi-earth font-size-20"
                  ></i>{" "}
                  Country
                </Link>
                <Link
                  onClick={() => toggleTab("Cash")}
                  className={activeTab == "Cash" ? "active" : "border"}
                >
                  <i
                    style={{ paddingRight: "20px" }}
                    className="mdi mdi-cash-multiple font-size-20"
                  ></i>{" "}
                  Cash
                </Link>
                <Link
                  onClick={() => toggleTab("Crypto")}
                  className={activeTab == "Crypto" ? "active" : "border"}
                >
                  <i
                    style={{ paddingRight: "20px" }}
                    className="mdi mdi-currency-btc font-size-20"
                  ></i>{" "}
                  Crypto
                </Link>
                <Link
                  onClick={() => toggleTab("Card")}
                  className={activeTab == "Card" ? "active" : "border"}
                >
                  <i
                    style={{ paddingRight: "20px" }}
                    className="mdi mdi-card-account-details-outline font-size-20"
                  ></i>
                  Card
                </Link>
              </div>
            </Col>
            <Col sm="10">
              <TabContent activeTab={activeTab}>
                <TabPane tabId="All">
                  <All />
                </TabPane>
                <TabPane tabId="USD">
                  <USD />
                </TabPane>
                <TabPane tabId="EUR">
                  <EUR />
                </TabPane>
                <TabPane tabId="CNY">
                  <CNY />
                </TabPane>
                <TabPane tabId="Country">
                  <Country />
                </TabPane>
                <TabPane tabId="Cash">
                  <Cash />
                </TabPane>
                <TabPane tabId="Crypto">
                  <Crypto />
                </TabPane>
                <TabPane tabId="Card">
                  <Card />
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(Exchanger)
