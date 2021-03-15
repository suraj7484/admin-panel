import PropTypes from "prop-types"
import React, { useState } from "react"

import { connect } from "react-redux"
import { Row, Col } from "reactstrap"

import { Link } from "react-router-dom"

// Reactstrap
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  TabContent,
  TabPane
} from "reactstrap"

// Import menuDropdown
import LanguageDropdown from "../CommonForBoth/TopbarDropdown/LanguageDropdown"
import NotificationDropdown from "../CommonForBoth/TopbarDropdown/NotificationDropdown"
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu"

import Accordian from "../../components/Accordian"
import megamenuImg from "../../assets/images/megamenu-img.png"
import logo from "../../assets/images/logo.svg"
import logoLightPng from "../../assets/images/logo-light.png"
import logoLightSvg from "../../assets/images/logo-light.svg"
import logoDark from "../../assets/images/logo-dark.png"

// import images
import github from "../../assets/images/brands/github.png"
import bitbucket from "../../assets/images/brands/bitbucket.png"
import dribbble from "../../assets/images/brands/dribbble.png"
import dropbox from "../../assets/images/brands/dropbox.png"
import mail_chimp from "../../assets/images/brands/mail_chimp.png"
import slack from "../../assets/images/brands/slack.png"

//i18n
import { withTranslation } from "react-i18next"

// Redux Store
import {
  showRightSidebarAction,
  toggleLeftmenu,
  changeSidebarType
} from "../../store/actions"

const Header = props => {
  const [search, setsearch] = useState(false)
  const [megaMenu, setmegaMenu] = useState(false)
  const [socialDrp, setsocialDrp] = useState(false)

  const [quickTask, setQuickTask] = useState(false)
  const [favorite, setFavorite] = useState(false)
  const [faq, setFaq] = useState(false)
  const [balances, setBalances] = useState(false)
  const [activeTab, setactiveTab] = useState("1")

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  function toggleFullscreen() {
    if (
      !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
      !document.webkitFullscreenElement
    ) {
      // current working methods
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen()
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen()
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(
          Element.ALLOW_KEYBOARD_INPUT
        )
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen()
      }
    }
  }

  function tToggle() {
    props.toggleLeftmenu(!props.leftMenu)
    if (props.leftSideBarType === "default") {
      props.changeSidebarType("condensed", isMobile)
    } else if (props.leftSideBarType === "condensed") {
      props.changeSidebarType("default", isMobile)
    }
  }
  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <div className="navbar-brand-box">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logo} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm">
                  <img src={logoLightSvg} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoLightPng} alt="" height="19" />
                </span>
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-16 header-item waves-effect"
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            {/* Calculator Header */}
            <Dropdown
              className="dropdown-mega d-none d-lg-block ml-2"
              isOpen={megaMenu}
              toggle={() => {
                setmegaMenu(!megaMenu)
              }}
            >
              <DropdownToggle
                className="btn header-item waves-effect"
                caret
                tag="button"
              >
                {" "}
                <i className="bx bx-calculator"></i> {props.t("Calculator")}
              </DropdownToggle>
            </Dropdown>

            {/* Quick Task Header */}
            <Dropdown
              className="d-inline-block"
              isOpen={quickTask}
              toggle={() => {
                setQuickTask(!quickTask)
              }}
            >
              <DropdownToggle
                className="btn header-item waves-effect"
                caret
                tag="button"
              >
                {" "}
                <i className="bx bx-task" /> {props.t("Quick Task")}{" "}
                <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-lg">
                <div>
                  <Row>
                    <Col className="pr-0">
                      <ul className="list-unstyled megamenu-list paddingLink">
                        <li>
                          <Link className="" to="/">
                            {props.t("Alerts")}
                          </Link>
                        </li>
                        <li>
                          <Link to="/">{props.t("Buttons")}</Link>
                        </li>
                        <li>
                          <Link to="/">{props.t("Cards")}</Link>
                        </li>
                        <li>
                          <Link to="/">{props.t("Dropdowns")}</Link>
                        </li>
                        <li>
                          <Link to="/">{props.t("Lightbox")}</Link>
                        </li>
                        <li>
                          <Link to="/">{props.t("Modals")}</Link>
                        </li>
                        <li>
                          <Link to="/">{props.t("Range Slider")}</Link>
                        </li>
                      </ul>
                    </Col>
                    <Col className="pl-0">
                      <ul className="list-unstyled megamenu-list paddingLink">
                        <li>
                          <Link to="#">{props.t("Progress Bar")}</Link>
                        </li>
                        <li>
                          <Link to="#">{props.t("Sweet-Alert")}</Link>
                        </li>
                        <li>
                          <Link to="#">{props.t("Tabs & Accordions")}</Link>
                        </li>
                        <li>
                          <Link to="#">{props.t("Typography")}</Link>
                        </li>
                        <li>
                          <Link to="#">{props.t("General")}</Link>
                        </li>
                        <li>
                          <Link to="#">{props.t("Rating")}</Link>
                        </li>
                        <li>
                          <Link to="#">{props.t("Notification")}</Link>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </Dropdown>

            {/* FAQ */}
            <Dropdown
              className="dropdown-mega d-none d-lg-block ml-2"
              isOpen={faq}
              toggle={() => {
                setFaq(!faq)
              }}
            >
              <DropdownToggle
                className="btn header-item waves-effect"
                caret
                tag="button"
              >
                <i className="bx bx-question" /> {props.t("FAQ")}
                <i className="mdi mdi-chevron-down" />
              </DropdownToggle>

              <DropdownMenu className="dropdown-megamenu dropdownMarginLeft">
                <Row>
                  <Card className="minWidthFaq">
                    <CardBody>
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                          <CardTitle className="mb-2">
                            <div className="faq-icon mr-3">
                              <form className="d-none d-lg-block">
                                <div className="text-center w-50 mx-auto">
                                  <input
                                    type="text"
                                    className="form-control rounded-sm"
                                    placeholder="Search..."
                                  />
                                </div>
                              </form>
                              <i className="fas fa-question-circle font-size-20 text-primary mr-3" />
                              <span>{props.t("General Questions")}</span>
                            </div>
                          </CardTitle>
                          <Accordian
                            question1="What is Lorem Ipsum ?"
                            answer1="Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words."
                            question2="Why do we use it ?"
                            answer2="If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages."
                            question3="Where does it come from ?"
                            answer3="It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental."
                          />
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Row>
              </DropdownMenu>
            </Dropdown>

            {/* Favorite */}
            <Dropdown
              className="d-inline-block"
              isOpen={favorite}
              toggle={() => {
                setFavorite(!favorite)
              }}
            >
              <DropdownToggle
                className="btn header-item waves-effect"
                caret
                tag="button"
              >
                {" "}
                <i className="bx bx-heart"></i> {props.t("Favorite")}{" "}
                <i className="mdi mdi-chevron-down" />
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <span className="align-middle">{props.t("Favorite 1")}</span>
                </DropdownItem>
                <DropdownItem>
                  <span className="align-middle">{props.t("Favorite 2")}</span>
                </DropdownItem>
                <DropdownItem>
                  <span className="align-middle">{props.t("Favorite 3")}</span>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ml-2">
              <button
                onClick={() => {
                  setsearch(!search)
                }}
                type="button"
                className="btn header-item noti-icon waves-effect"
                id="page-header-search-dropdown"
              >
                <i className="mdi mdi-magnify" />
              </button>
              <div
                className={
                  search
                    ? "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 show"
                    : "dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
                }
                aria-labelledby="page-header-search-dropdown"
              >
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search ..."
                        aria-label="Recipient's username"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                          <i className="mdi mdi-magnify" />
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Balances Header */}
            <Dropdown
              className="dropdown-mega d-none d-lg-block ml-2"
              isOpen={balances}
              toggle={() => {
                setBalances(!balances)
              }}
            >
              <DropdownToggle
                className="btn header-item waves-effect"
                caret
                tag="button"
              >
                {" "}
                <i className="bx bx-dollar-circle"></i> {props.t("Balances")}
              </DropdownToggle>
              <DropdownMenu className="dropdown-megamenu dropdownMarginLeft">
                <Row>
                  <Col lg={4}>
                    <Card body>
                      <CardTitle className="mt-0">Balances 1</CardTitle>
                      <CardText>
                        Data information will be available here.
                      </CardText>
                      <Link
                        to="/balances"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        View Balance
                      </Link>
                    </Card>
                  </Col>

                  <Col lg={4}>
                    <Card body className="text-center">
                      <CardTitle className="mt-0">Balances 2</CardTitle>
                      <CardText>
                        Data information will be available here.
                      </CardText>
                      <Link
                        to="/balances"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        View Balance
                      </Link>
                    </Card>
                  </Col>

                  <Col lg={4}>
                    <Card body className="text-right">
                      <CardTitle className="mt-0">Balances 3</CardTitle>
                      <CardText>
                        Data information will be available here.
                      </CardText>
                      <Link
                        to="/balances"
                        className="btn btn-primary waves-effect waves-light"
                      >
                        View Balance
                      </Link>
                    </Card>
                  </Col>
                </Row>
              </DropdownMenu>
            </Dropdown>

            {/* Notificaition Header */}
            <NotificationDropdown />

            {/* Language Header */}
            <LanguageDropdown />

            {/* Profile Header */}
            <ProfileMenu />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func
}

const mapStatetoProps = state => {
  const {
    layoutType,
    showRightSidebar,
    leftMenu,
    leftSideBarType
  } = state.Layout
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType }
}

export default connect(
  mapStatetoProps,
  {
    showRightSidebarAction,
    toggleLeftmenu,
    changeSidebarType
  }
)(withTranslation()(Header))
