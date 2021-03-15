import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { isEmpty, map } from "lodash"
import moment from "moment"
import {
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
  InputGroupAddon,
  Media,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
  UncontrolledTooltip
} from "reactstrap"
import classnames from "classnames"
import { Button } from '@material-ui/core';

//Import Scrollbar
import PerfectScrollbar from "react-perfect-scrollbar"
import "react-perfect-scrollbar/dist/css/styles.css"

//Import Breadcrumb
import Breadcrumbs from "components/Common/Breadcrumb"
import images from "assets/images"
import {
  addMessage,
  getChats,
  getContacts,
  getGroups,
  getMessages
} from "store/actions"
import { BsSearch } from "react-icons/bs";

import chat_data from "../../common/data/helpdesk"
import { MdReplyAll } from "react-icons/md";



const Help = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Skote" breadcrumbItem="Helpdesk" />

          <Row>
            <Col lg="12">
              <div className="d-lg-flex">
                <div className="w-100 user-chat">
                  <Card className="chatMarginBottom">
                    <div className="p-4 border-bottom help-desk-header">
                      <Row>
                        <Col md="1" xs="1">
                          <Link to="/help-desk"><i className="bx bx-chevron-left backIcon" /></Link>
                        </Col>
                        <Col md="3" xs="8">
                          <h5 className="font-size-35 mb-1 ">
                            Help
                          </h5>
                        </Col>
                      </Row>

                    </div>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
          <div className="savedItem">
            <p className="saved__names">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolore eius similique facilis consequuntur expedita numquam blanditiis quam inventore soluta minima voluptatibus provident laborum reprehenderit praesentium consequatur temporibus ab ipsa nulla, omnis eaque cum placeat repellendus est? Laborum ad distinctio praesentium officiis quaerat suscipit aliquam quidem inventore voluptatum fuga dignissimos asperiores soluta odio dolorum, fugit placeat vel incidunt quibusdam dicta error nesciunt excepturi? Ab ea vero recusandae earum id, modi eaque fugiat adipisci quam quidem impedit maxime soluta, molestias iusto nam rerum magnam. Distinctio, veniam eveniet! Dolorum fugit assumenda aliquam perferendis totam et enim pariatur earum consectetur? Cumque vitae eaque ducimus! Delectus ullam ab fuga rerum, corporis eius optio in quo pariatur similique voluptatum laborum repellat, rem aliquid repellendus facere impedit nesciunt animi quod, expedita facilis ducimus tempore. Illo eius inventore laborum aut. Excepturi, ratione eligendi laudantium cum illum aspernatur blanditiis iste et omnis, nulla reiciendis id doloremque atque veniam maxime dolor dolorem perspiciatis. Natus minus unde aut. Voluptas explicabo ad unde harum pariatur! Quae nostrum molestias ad, et rem modi sapiente. Provident eos molestiae cupiditate reprehenderit consequatur, illum officiis est accusamus? Incidunt cumque officia hic nam, vel aperiam, quidem molestiae ab vero qui dolore minima, atque porro vitae esse provident. Tempora ab doloremque maiores, error sed, blanditiis esse iure impedit unde modi tempore? Perferendis atque pariatur quos quia rem sint ab. Voluptatum veritatis voluptatibus consequatur consectetur dolor a dolores, incidunt quo placeat nihil hic nostrum quidem iure impedit corporis non voluptate voluptatem, animi odit ullam suscipit commodi. Consectetur, repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, aspernatur est a perferendis placeat quas consectetur omnis ducimus dignissimos. In aliquam veritatis explicabo quia rem nam nesciunt, esse quae nobis non deserunt porro magni eius ullam nulla itaque, maiores doloribus. Ad molestias laboriosam voluptates quidem suscipit illum beatae debitis a.
            </p>
          </div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Help;
