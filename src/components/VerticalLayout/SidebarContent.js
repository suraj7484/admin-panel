import PropTypes from "prop-types"
import React, { useEffect, useRef } from "react"


// //Import Scrollbar
import SimpleBar from "simplebar-react"

// MetisMenu
import MetisMenu from "metismenujs"
import { withRouter } from "react-router-dom"
import { Link } from "react-router-dom"

//i18n
import { withTranslation } from "react-i18next"

const SidebarContent = props => {
  const ref = useRef()

  // Use ComponentDidMount and ComponentDidUpdate method symultaniously
  useEffect(() => {
    // const pathName = props.location.pathname

    // Don't take dynamic routes
    const pathName = "/" + props.location.pathname.split("/")[1]

    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem)
      }
    }
    initMenu()
  }, [props.location.pathname])

  useEffect(() => {
    ref.current.recalculate()
  })

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }
    if (parent) {
      parent.classList.add("mm-active")
      const parent2 = parent.parentElement

      if (parent2) {
        parent2.classList.add("mm-show") // ul tag

        const parent3 = parent2.parentElement // li tag

        if (parent3) {
          parent3.classList.add("mm-active") // li
          parent3.childNodes[0].classList.add("mm-active") //a
          const parent4 = parent3.parentElement // ul
          if (parent4) {
            parent4.classList.add("mm-show") // ul
            const parent5 = parent4.parentElement
            if (parent5) {
              parent5.classList.add("mm-show") // li
              parent5.childNodes[0].classList.add("mm-active") // a tag
            }
          }
        }
      }
      scrollElement(item)
      return false
    }
    scrollElement(item)
    return false
  }

  return (
    <React.Fragment>
      <SimpleBar ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li>
              {/* Home Tab */}
              <Link to="/#" className="waves-effect">
                <i className="bx bx-home-circle"></i>
                <span>{props.t("HOME")}</span>
              </Link>
            </li>
            {/* Exhanger Tab */}
            <li>
              <Link to="/exchanger" className="waves-effect">
                <i className="fas fa-exchange-alt"></i>
                <span>{props.t("EXCHANGER")}</span>
              </Link>

            </li>
            {/* Orders Tab */}
            <li>
              <Link to="/orders" className="has-arrow waves-effect">
                <i className="bx bx-cart"></i>
                <span>{props.t("ORDERS")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/todo">{props.t("Todo")}</Link>
                </li>
                <li>
                  <Link to="/ratings">{props.t("Ratings")}</Link>
                </li>
                <li>
                  <Link to="/favorite">{props.t("Favorite")}</Link>
                </li>
                <li>
                  <Link to="/bindings">{props.t("Bindings")}</Link>
                </li>
                <li>
                  <Link to="/alert">{props.t("Alert")}</Link>
                </li>
                <li>
                  <Link to="/blacklist">{props.t("Blacklist")}</Link>
                </li>
              </ul>
            </li>
            {/* Wallet Tab */}
            <li>
              <Link to="/#" className="has-arrow waves-effect">
                <i className="bx bx-wallet"></i>
                <span>{props.t("WALLET")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <Link to="/balances">{props.t("Balances")}</Link>
                </li>
              </ul>
            </li>
            {/* Cryptoswap Tab */}
            <li>
              <Link to="/cryptoswab" className="waves-effect">
                <i className="bx bx-bitcoin"></i>
                <span>{props.t("CRYTPOSWAB")}</span>
              </Link>
            </li>
            {/* Cash Station Tab */}
            <li>
              <Link to="/cash-station" className="waves-effect">
                <i className="bx bx-money"></i>
                <span>{props.t("CASH STATION")}</span>
              </Link>
            </li>
            {/* Invite Tab */}
            <li>
              <Link to="/invite" className="waves-effect">
                <i className="bx bxs-user-plus"></i>
                <span>{props.t("INVITE")}</span>
              </Link>
            </li>
            {/* Inbox Tab */}
            <li>
              <Link to="/inbox" className="waves-effect">
                <i className="bx bxs-inbox"></i>
                <span>{props.t("INBOX")}</span>
              </Link>
            </li>
            {/* Helpdesk Tab */}
            <li>
              <Link to="/help-desk" className="waves-effect">
                <i className="bx bx-help-circle"></i>
                <span>{props.t("HELPDESK")}</span>
              </Link>
            </li>
            {/* Merchant Tab */}
            <li>
              <Link to="/merchant" className="waves-effect">
                <i className="bx bx-store"></i>
                <span>{props.t("MERCHANT")}</span>
              </Link>
            </li>
            {/* Arbitration Tab */}
            <li>
              <Link to="/arbitration" className="waves-effect">
                <i className="fas fa-handshake"></i>
                <span>{props.t("ARBITRATION")}</span>
              </Link>
            </li>
            {/* Settings Tab */}
            <li>
              <Link to="/settings" className="waves-effect">
                <i className="fas fa-cog"></i>
                <span>{props.t("SETTINGS")}</span>
              </Link>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  )
}

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
}

export default withRouter(withTranslation()(SidebarContent))
