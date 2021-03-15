import React, { useEffect, useRef, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link, useHistory } from "react-router-dom"
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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

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
import { BsSearch, BsThreeDotsVertical } from "react-icons/bs";

import chat_data from "../../common/data/chat"
import { AiFillLike, AiOutlineStar, AiFillStar, AiFillWarning } from "react-icons/ai"
import { IoFilterSharp } from "react-icons/io"
import { RiSendPlaneFill } from "react-icons/ri"
import { ImCross } from "react-icons/im"
import { BiCheckDouble } from "react-icons/bi"
import ButtonS from '@material-ui/core/Button';
import ButtonGroupS from '@material-ui/core/ButtonGroup'
import { FaCamera } from "react-icons/fa"
import { GrAttachment } from "react-icons/gr"
import { RiArrowDropDownLine } from "react-icons/ri"
import copy from 'copy-to-clipboard';

const ChatAchieved = () => {
    const history = useHistory()
    const imageInput = useRef(null)

    const [chats, setChats] = useState(chat_data.chats)
    const [groups, setGroups] = useState(chat_data.groups)
    const [contacts, setContacts] = useState(chat_data.contacts)
    const [messages, setMessages] = useState(chat_data.messages)
    const [messagesInbox, setMessagesInbox] = useState(chat_data.messages)
    const [currentmessages, setCurrentmessages] = useState([])
    const [messageBox, setMessageBox] = useState(null)
    // const Chat_Box_Username2 = "Henry Wells"
    const [currentRoomId, setCurrentRoomId] = useState(1)
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrentUser] = useState({
        name: "Henry Wells",
        isActive: true
    })
    const [notification_Menu, setnotification_Menu] = useState(false)
    const [search_Menu, setsearch_Menu] = useState(false)
    const [settings_Menu, setsettings_Menu] = useState(false)
    const [other_Menu, setother_Menu] = useState(false)
    const [activeTab, setactiveTab] = useState("1")
    const [Chat_Box_Username, setChat_Box_Username] = useState("Admin")
    // eslint-disable-next-line no-unused-vars
    const [Chat_Box_User_Status, setChat_Box_User_Status] = useState("online")
    const [curMessage, setcurMessage] = useState("")
    const [curFilter, setCurFilter] = useState([])
    const [star, setStar] = useState(false)
    const [drop, setDrop] = useState(false)
    const [messageIcons, setMessageIcons] = useState(false);
    const [searchOp, setSearchOp] = useState(true);
    const [dotDrop, setDotDrop] = useState(false);
    const [drawer, setDrawer] = useState(false);
    const [searchItem, setSearchItem] = useState("")

    const filterchat = value => {
        let newchats = chats.filter(chat => chat.name.includes(value));
        setCurFilter(newchats);
    }

    const checkUnreadMessages = (chat) => {
        let number_of_unread = 0;
        messages.filter(message => message.roomId === chat.roomId).forEach(message => {
            if (message.readstatus === false) {
                number_of_unread = number_of_unread + 1;
            }
        })
        return number_of_unread
    }

    const toggleNotification = () => {
        setnotification_Menu(!notification_Menu)
    }

    //Toggle Chat Box Menus
    const toggleSearch = () => {
        setsearch_Menu(!search_Menu)
    }

    const toggleSettings = () => {
        setsettings_Menu(!settings_Menu)
    }

    const toggleOther = () => {
        setother_Menu(!other_Menu)
    }

    const toggleTab = tab => {
        if (activeTab !== tab) {
            setactiveTab(tab)
        }
    }

    const toggleStarred = chat => {
        let newchats = [];
        chats.forEach(newchat => {
            if (newchat.id === chat.id) {
                newchat.starred = !newchat.starred;
            }
            newchats.push(newchat);
        });
        setChats(newchats);
    }

    const archiveChat = () => {
        let newchats = [];
        chats.forEach(newchat => {
            if (newchat.roomId === currentRoomId) {
                newchat.archived = !newchat.archived;
            }
            newchats.push(newchat);
        });
        setChats(newchats);
    }

    //Use For Chat Box
    const userChatOpen = (id, name, status, roomId) => {
        let newcurrentmessages = messages.filter(message => message.roomId === roomId);
        let newmessages = [];
        messages.forEach(message => {
            if (message.roomId === roomId) {
                message.readstatus = true;
            }
            newmessages.push(message);
        })
        setCurrentmessages(newcurrentmessages);
        setChat_Box_Username(name);
        setCurrentRoomId(roomId);
        setChat_Box_User_Status(status);
        setMessages(newmessages);
    }

    const addMessage = (roomId, sender) => {
        if (curMessage !== "") {
            let newmessages = [...messages];
            newmessages.push({
                id: newmessages.length + 1,
                roomId: roomId,
                sender: sender,
                message: curMessage,
                readstatus: true,
                createdAt: "2020-04-02T17:00:21.529Z",
            })
            let newcurrentmessages = newmessages.filter(message => message.roomId === currentRoomId);
            setMessages(newmessages);
            setCurrentmessages(newcurrentmessages);
            setcurMessage("");
        }
    }

    const scrollToBottom = () => {
        if (messageBox) {
            let newmessageBox = messageBox;
            newmessageBox.scrollTop = newmessageBox.scrollHeight + 1000;
            setMessageBox(newmessageBox);
        }
    }

    const onKeyPress = e => {
        const { key } = e;
        if (key === "Enter") {
            if (curMessage !== "") {
                let newmessages = [...messages];
                newmessages.push({
                    id: newmessages.length + 1,
                    roomId: currentRoomId,
                    sender: currentUser.name,
                    message: curMessage,
                    readstatus: true,
                    createdAt: "2020-04-02T17:00:21.529Z",
                })
                let newcurrentmessages = newmessages.filter(message => message.roomId === currentRoomId);
                setMessages(newmessages);
                setCurrentmessages(newcurrentmessages);
                setcurMessage("");
            }
        }
    }

    const toggleMessageIcons = (index, value) => {
        let newmessages = [...messages];
        newmessages[index].selected = value;
        setMessages(newmessages);
    }

    useEffect(() => {
        let newcurrentmessages = messages.filter(message => message.roomId === currentRoomId);
        let newChat_Box_Username = currentUser.name;
        let newmessages = [];
        messages.forEach(message => {
            if (message.roomId === currentRoomId) {
                message.readstatus = true;
            }
            newmessages.push(message);
        })
        setCurrentmessages(newcurrentmessages);
        setChat_Box_Username(newChat_Box_Username);
        setMessages(newmessages);
        setCurFilter(chats);
    }, [])

    useEffect(() => {
        if (curFilter.length !== 0) {
            let newcurfilter = [];
            chats.forEach(chat => {
                curFilter.forEach(curfilt => {
                    if (chat.id === curfilt.id) {
                        newcurfilter.push(chat);
                    }
                })
            })
            setCurFilter(newcurfilter);
        }
    }, [chats])

    const onImageClick = () => {
        imageInput.current.click()
    }

    const imageChange = (e) => {
        console.log(e)
        const file = e.target.files[0]
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            // set New Message here with image URL
            addMessage(currentRoomId, currentUser.name, event.target.result)
            scrollToBottom()
            e.target.value = ''
        });
        reader.readAsDataURL(file);
    }

    useEffect(() => {
        scrollToBottom();
    }, [currentmessages])

    const openModal = (el) => {
        const element = document.getElementById(el)
        if (element.classList.contains("dropdown__menu__active")) {
            document.getElementById(el).classList.remove("dropdown__menu__active")
        } else {
            document.getElementById(el).classList.add("dropdown__menu__active")
        }
    }
    const searchFunction = (e) => {
        setSearchItem(e.target.value)
        const search = e.target.value
        messagesInbox && setMessagesInbox(messages.filter((message) => {
            if (search == "") {
                return message
            } else if (
                message.sender.toLowerCase()
                    .includes(search.toLowerCase())) {
                return message
            }
        }))
    }


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    {/* Render Breadcrumb */}
                    <Breadcrumbs title="Skote" breadcrumbItem="Inbox" />

                    <Row>
                        <Col lg="12">
                            <div className="d-lg-flex">
                                <div className="w-100 user-chat">
                                    <Card className="chatMarginBottom">
                                        <div className="p-4 border-bottom help-desk-header">
                                            <Row>

                                                <Col md="12" xs="12">
                                                    <h5 className="font-size-35 mb-1 ">
                                                        ACHIEVED
                                                    </h5>
                                                </Col>
                                            </Row>
                                        </div>

                                        <div className="chat__mainSection">
                                            <div className="chat__leftSection">
                                                <div className="chat-search chat-nonEmpty">
                                                    <div className="chat-search__inputs">
                                                        <Input className="searchInput" value={searchItem} onChange={(e) => searchFunction(e)} />
                                                        <BsSearch
                                                            className="chat-search__icon"
                                                        /></div>
                                                </div>
                                                <div className="chat__filters">
                                                    <ButtonGroupS variant="contained" color="primary" aria-label="contained primary button group" className="buttons__groups">
                                                        <ButtonS className="buttons__group" onClick={() => history.push("/inbox")}>All</ButtonS>
                                                        <ButtonS className="buttons__group" onClick={() => history.push("/inbox/unread")}>Unread</ButtonS>
                                                        <ButtonS className="buttons__group" onClick={() => history.push("/inbox/starred")}>Starred</ButtonS>
                                                        <ButtonS className="buttons__group active" onClick={() => history.push("/inbox/achieved")}>Achieved</ButtonS>
                                                        <ButtonS className="buttons__group" onClick={() => history.push("/inbox/block")}>Blocked</ButtonS>
                                                    </ButtonGroupS>
                                                </div>
                                                <div className="chat-conversation p-3">
                                                    <ul className="list-unstyled">

                                                        <PerfectScrollbar
                                                            className="chatInbox__Container chatInbox__Containers"
                                                            containerRef={ref => setMessageBox(ref)}
                                                        >
                                                            {messagesInbox &&
                                                                map(messagesInbox, (message, index) => (
                                                                    <li
                                                                        key={"test_k" + message.id}
                                                                        className="chatInbox__li"
                                                                    >
                                                                        <div className="conversation-list chatInbox__list" onMouseEnter={() => toggleMessageIcons(index, true)} onMouseLeave={() => toggleMessageIcons(index, false)}>
                                                                            <div className="message-containers chatInbox__main">
                                                                                <div className="ctext-wraps chat__inbox chat__inbox__container">
                                                                                    <div className="chatInbox__left">
                                                                                        <img src="https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg" alt="Avatar" className="avatar chatInbox__avatar" onClick={() => setDrawer(true)}></img>
                                                                                    </div>
                                                                                    <div className="chatInbox__right">
                                                                                        <div className="chatInbox__rightTop">
                                                                                            <div className="conversation-name">
                                                                                                {message.sender}
                                                                                            </div>
                                                                                            <div className="time">
                                                                                                {moment(message.createdAt).format(
                                                                                                    "hh:mm"
                                                                                                )}
                                                                                            </div>
                                                                                        </div>
                                                                                        <p className="conversation__mainRight chatInbox__message">{message.message}</p>
                                                                                        <p className="chat-time mb-0 bottomStar">
                                                                                            {index == 1 || index == 3 ? <AiFillStar style={{ fontSize: "1.2rem", color: "yellow" }} /> : <AiOutlineStar />}
                                                                                        </p>
                                                                                    </div>
                                                                                    {/* <div style={{ position: "absolute", right: -4, bottom: -8 }} className="pl-2 pr-2 pt-1 bg-white rounded align-items-center"><i className="bx bxs-like bx-xsm text-primary mr-2" />1</div> */}
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                        </PerfectScrollbar>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="chat__rightSection">
                                                <div className="rightSection__header">
                                                    {
                                                        searchOp ? <><div className="rightSection__left">
                                                            <img src="https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg" alt="Avatar" className="avatar chatInbox__avatar" onClick={() => setDrawer(true)}></img>
                                                            <p className="rightSection__name" onClick={() => setDrawer(true)}>John Doe</p>
                                                        </div>
                                                            <div className="rightSection__right">
                                                                <BsSearch
                                                                    className="chat-search__icons"
                                                                    onClick={() => setSearchOp(false)}

                                                                />
                                                                <BsThreeDotsVertical
                                                                    className="chat-search__icons"
                                                                    onClick={() => { dotDrop ? setDotDrop(false) : setDotDrop(true) }}

                                                                />
                                                            </div> </> : <><div className="rightSection__left">
                                                                <BsSearch
                                                                    className="chat-search__icons"
                                                                />
                                                                <Input className="searchInput" placeholder="search" />
                                                            </div>
                                                            <div className="rightSection__right">

                                                                <ImCross
                                                                    className="chat-search__icons"
                                                                    onClick={() => setSearchOp(true)}
                                                                />
                                                                <BsThreeDotsVertical
                                                                    className="chat-search__icons"
                                                                    onClick={() => { dotDrop ? setDotDrop(false) : setDotDrop(true) }}

                                                                />

                                                            </div></>
                                                    }
                                                    {dotDrop ? <> <div className="dotDropdown">
                                                        <div className="dropdownElement" onClick={() => {
                                                            setDotDrop(false)
                                                        }}>
                                                            Mark Unread
                                                        </div>
                                                        <div className="dropdownElement" onClick={() => {
                                                            setDotDrop(false)
                                                        }}>
                                                            Star
                                                        </div>
                                                        <div className="dropdownElement" onClick={() => {
                                                            setDotDrop(false)
                                                        }}>
                                                            Achieve
                                                        </div>
                                                        <div className="dropdownElement" onClick={() => {
                                                            setDotDrop(false)
                                                        }}>
                                                            Block
                                                        </div>
                                                        <div className="dropdownElement blocked" onClick={() => setDotDrop(false)} >
                                                            Delete
                                                        </div>
                                                    </div> </> : ""}





                                                </div>
                                                <div className="chat-conversation p-3">
                                                    <ul className="list-unstyled">
                                                        <PerfectScrollbar
                                                            style={{ height: "410px" }}
                                                            containerRef={ref => setMessageBox(ref)}
                                                        >
                                                            <li>
                                                                <div className="chat-day-title">
                                                                    <h5><span className="title">Today</span></h5>
                                                                </div>
                                                            </li>
                                                            {messages &&
                                                                map(messages, (message, index) => (
                                                                    <li
                                                                        key={"test_k" + message.id}
                                                                        className={
                                                                            message.sender === currentUser.name
                                                                                ? "right"
                                                                                : ""
                                                                        }
                                                                    >
                                                                        {
                                                                            message.sender === currentUser.name ? (

                                                                                <div className="conversation-list" onMouseEnter={() => toggleMessageIcons(index, true)} onMouseLeave={() => toggleMessageIcons(index, false)}>
                                                                                    <div className="message-container">
                                                                                        <div className="message__row1 message__me">

                                                                                            <div className="conversation-name">
                                                                                                Me
                                                                                            </div>
                                                                                            <img src="https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg" alt="Avatar" className="avatar avatar-right"></img>
                                                                                        </div>
                                                                                        <div className="ctext-wrap">
                                                                                            <RiArrowDropDownLine className="dropArrow dropArrowright"
                                                                                                onClick={() => openModal(`right${message.id}`)}

                                                                                            />
                                                                                            <div className="dropModal dropModalRight"
                                                                                                id={`right${message.id}`}
                                                                                            >
                                                                                                <div className="dropModal__button button__1" onClick={() => {
                                                                                                    setcurMessage(`"${message.message}"`)
                                                                                                    openModal(`right${message.id}`)
                                                                                                }}>
                                                                                                    Quote
                                                </div>
                                                                                                <div className="dropModal__button button__2" onClick={() => {
                                                                                                    copy(message.message)
                                                                                                    openModal(`right${message.id}`)
                                                                                                }}>
                                                                                                    Copy
                                                </div>
                                                                                            </div>
                                                                                            <p className="conversation__mainRight">{message.message}</p>
                                                                                            <p className="chat-time mb-0">
                                                                                                <div className="bottomRow">
                                                                                                    <div className="bottomIcons">
                                                                                                    </div>
                                                                                                    <div className="time">
                                                                                                        {moment(message.createdAt).format(
                                                                                                            "hh:mm"
                                                                                                        )}
                                                                                                        <BiCheckDouble style={{ color: "gray", fontSize: "1.2rem", marginLeft: "6px" }} />
                                                                                                    </div>
                                                                                                </div>
                                                                                            </p>
                                                                                            {/* <div style={{ position: "absolute", right: -4, bottom: -8 }} className="pl-2 pr-2 pt-1 bg-white rounded align-items-center"><i className="bx bxs-like bx-xsm text-primary mr-2" />1</div> */}
                                                                                        </div>

                                                                                    </div>
                                                                                </div>
                                                                            ) : (
                                                                                <div className="message-container">

                                                                                    <div className="conversation-list" onMouseEnter={() => toggleMessageIcons(index, true)} onMouseLeave={() => toggleMessageIcons(index, false)}>
                                                                                        <div className="message__row1">
                                                                                            <img src="https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg" alt="Avatar" className="avatar avatar-left"></img>
                                                                                            <div className="conversation-name">
                                                                                                {message.sender}
                                                                                            </div>
                                                                                        </div>

                                                                                        <div className="ctext-wrap">
                                                                                            <RiArrowDropDownLine className="dropArrow dropArrowleft"
                                                                                                onClick={() => openModal(`left${message.id}`)}
                                                                                            />
                                                                                            <div className="dropModal dropModalLeft"
                                                                                                id={`left${message.id}`}
                                                                                            >
                                                                                                <div className="dropModal__button button__1" onClick={() => {
                                                                                                    setcurMessage(`"${message.message}"`)
                                                                                                    openModal(`left${message.id}`)
                                                                                                }}>
                                                                                                    Quote
                                                </div>
                                                                                                <div className="dropModal__button button__2" onClick={() => {
                                                                                                    copy(message.message)
                                                                                                    openModal(`left${message.id}`)
                                                                                                }}>
                                                                                                    Copy
                                                </div>
                                                                                            </div>
                                                                                            <p className="conversation__mainLeft">{message.message}</p>
                                                                                            <p className="chat-time mb-0">
                                                                                                <div className="bottomRow">
                                                                                                    <div className="bottomIcons">
                                                                                                    </div>
                                                                                                    <div className="time">
                                                                                                        {moment(message.createdAt).format(
                                                                                                            "hh:mm"
                                                                                                        )}
                                                                                                    </div>
                                                                                                </div>
                                                                                            </p>
                                                                                            {/* <div style={{ position: "absolute", right: -4, bottom: -8 }} className="pl-2 pr-2 pt-1 bg-white rounded align-items-center"><i className="bx bxs-like bx-xsm text-primary mr-2" />1</div> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            )
                                                                        }
                                                                    </li>
                                                                ))}
                                                        </PerfectScrollbar>
                                                    </ul>
                                                </div>
                                                <div className="p-3 chat-input-section">
                                                    <Row>
                                                        <Col>
                                                            <div className="position-relative" >

                                                                <input
                                                                    type="text"
                                                                    value={curMessage}
                                                                    onKeyPress={onKeyPress}
                                                                    onChange={e => setcurMessage(e.target.value)}
                                                                    className="form-control chat-input"
                                                                    placeholder="Enter Message..."
                                                                />

                                                                <div className="chat-input-links">
                                                                    <ul className="list-inline mb-0">
                                                                        <li className="list-inline-item">
                                                                            <input
                                                                                ref={imageInput}
                                                                                type="file"
                                                                                id="selectedImage"
                                                                                className="d-none"
                                                                                accept="image/*"
                                                                                onChange={imageChange}
                                                                            />

                                                                        </li>
                                                                        <li className="list-inline-item">
                                                                            <Link onClick={onImageClick}>

                                                                                <GrAttachment className="mdi mdi-file-document-outline attachments" id="Filetooltip" />
                                                                                {/* className="mdi mdi-file-document-outline"
                                          id="Filetooltip"
                                        /> */}
                                                                                <UncontrolledTooltip
                                                                                    placement="top"
                                                                                    target="Filetooltip"
                                                                                >
                                                                                    Add Files
                                        </UncontrolledTooltip>
                                                                            </Link>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </Col>
                                                        <Col className="col-auto">
                                                            <Button
                                                                type="button"
                                                                color="primary"
                                                                onClick={() =>
                                                                    addMessage(currentRoomId, currentUser.name)
                                                                }
                                                                className="btn-rounded chat-send w-md waves-effect waves-light"
                                                            >
                                                                {/* <span className="d-none d-sm-inline-block mr-2">
                                  Send
                                </span>{" "} */}
                                                                <RiSendPlaneFill className="sendIcon" />
                                                            </Button>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>

                                            <SwipeableDrawer
                                                anchor={"right"}
                                                open={drawer}
                                                className="drawer"
                                                onClose={false}
                                                onOpen={false}
                                                containerStyle={{ height: '50%', bottom: 0 }}
                                            >

                                                <div className="userProfile">
                                                    <div className="userProfile__header">
                                                        <div className="userProfile__headerMain">
                                                            <img src="https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg" alt="Avatar" className="avatar avatar-left"></img>
                                                            <div className="conversation-name">
                                                                John Doe
                                                        </div>
                                                        </div>
                                                        <div className="userProfile__crossIcon">
                                                            <ImCross
                                                                className="chat-search__icons"
                                                                onClick={() => setDrawer(false)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="userProfile__body">
                                                        <div className="userProfile__rating">
                                                            <h3 className="rating__name">Rating: <span className="rating__number">142</span></h3>
                                                        </div>
                                                        <div className="userProfile__rows">
                                                            <div className="userProfile__name">Formal Certificate</div>
                                                            <img src="https://st3.depositphotos.com/1007566/13129/v/1600/depositphotos_131295836-stock-illustration-businessman-character-avatar-icon.jpg" alt="Avatar" className="avatar avatar-left"></img>
                                                        </div>
                                                        <div className="userProfile__rows">
                                                            <div className="userProfile__name">Exchange activity rating</div>
                                                            <div className="userProfile__number">142</div>
                                                        </div>
                                                        <div className="userProfile__rows">
                                                            <div className="userProfile__name">Successful deals</div>
                                                            <div className="userProfile__number">84</div>
                                                        </div>
                                                        <div className="userProfile__rows">
                                                            <div className="userProfile__name">Successful deals with you</div>
                                                            <div className="userProfile__number">0</div>
                                                        </div>
                                                        <div className="userProfile__rows">
                                                            <div className="userProfile__name">Work on the exchange (months)</div>
                                                            <div className="userProfile__number">58</div>
                                                        </div>
                                                        <div className="userProfile__rows">
                                                            <div className="userProfile__name">Average transfer sending time (min)</div>
                                                            <div className="userProfile__number">9</div>
                                                        </div>
                                                        <div className="userProfile__rows">
                                                            <div className="userProfile__name">Average transfer confirmation time (min)</div>
                                                            <div className="userProfile__number">12</div>
                                                        </div>
                                                    </div>
                                                    <div className="userProfile__footer">
                                                        <div className="footerDiv">
                                                            <AiFillWarning
                                                                className="chat-search__icons"
                                                            />
                                                            <p className="footerDiv__name">Blocklisted by you</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </SwipeableDrawer>

                                        </div>

                                    </Card>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default ChatAchieved;
