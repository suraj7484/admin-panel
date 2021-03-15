import React from "react"
import { Redirect } from "react-router-dom"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"
import UserProfile from "../pages/Authentication/user-profile"

// Dashboard
import Dashboard from "../pages/Dashboard/index"

// Sidebar Menu
import Exchanger from "../pages/SideMenu/Exchanger/index"
import Orders from "../pages/SideMenu/Orders/index"
import Wallet from "../pages/SideMenu/Wallet/index"
import Invite from "../pages/SideMenu/Invite/index"
import Merchant from "../pages/SideMenu/Merchant/index"
import Settings from "../pages/SideMenu/Settings/index"


// Pages
import PagesFaqs from "../pages/Utility/pages-faqs"
import Notififactions from "../pages/Utility/notifications"
import Balances from "../pages/Wallet/Balances"
import Balance from "../pages/Wallet/Balance"

//Orders Pages
import Todo from "../pages/Todo/Todo"
import Ratings from "../pages/Ratings/Ratings"
import Favorite from "../pages/Favorite/Favorite"
import Bindings from "../pages/Bindings/Bindings"
import Alert from "../pages/Alert/Alert"
import Blacklist from "../pages/Blacklist/Blacklist"
import Arbitration from "../pages/Arbitration/Arbitration"

// Pages Component
import HelpDesk from "../pages/Helpdesk/Helpdesk"
import Chat from "../pages/Chat/Chat"
import Cryptoswab from "../pages/Cryptoswab"
import CashStation from "../pages/CashStation"
import Saved from "pages/Helpdesk/Saved"
import Liked from "pages/Helpdesk/Liked"
import Mentions from "pages/Helpdesk/Mentions"
import Help from "pages/Helpdesk/Help"
import ChatStarred from "pages/Chat/ChatStarred"
import ChatAchieved from "pages/Chat/ChatAchieved"
import ChatBlock from "pages/Chat/ChatBlock"
import ChatUnread from "pages/Chat/ChatUnread"

const userRoutes = [
  // Dashboard
  { path: "/dashboard", component: Dashboard },

  // Sidebar Menu
  { path: "/exchanger", component: Exchanger },
  { path: "/orders", component: Orders },
  { path: "/wallet", component: Wallet },

  { path: "/cash-station", component: CashStation },
  { path: "/invite", component: Invite },
  { path: "/help-desk", component: HelpDesk },
  { path: "/merchant", component: Merchant },
  { path: "/settings", component: Settings },


  //Orders pages
  { path: "/todo", component: Todo },
  { path: "/ratings", component: Ratings },
  { path: "/favorite", component: Favorite },
  { path: "/bindings", component: Bindings },
  { path: "/alert", component: Alert },
  { path: "/blacklist", component: Blacklist },

  // Utility
  { path: "/pages-faqs", component: PagesFaqs },
  { path: "/notifications", component: Notififactions },

  // Profile
  { path: "/profile", component: UserProfile },

  // Help-desk
  { path: "/help-desk", component: HelpDesk },
  { path: "/help-desk/saved", component: Saved },
  { path: "/help-desk/liked", component: Liked },
  { path: "/help-desk/mentions", component: Mentions },
  { path: "/help-desk/help", component: Help },

  // Balances
  { path: "/balances/:currency", component: Balance },
  { path: "/balances", component: Balances },

  //Arbitration
  { path: "/arbitration", component: Arbitration },

  // Inbox
  { path: "/inbox", component: Chat },
  { path: "/inbox/unread", component: ChatUnread },
  { path: "/inbox/starred", component: ChatStarred },
  { path: "/inbox/achieved", component: ChatAchieved },
  { path: "/inbox/block", component: ChatBlock },

  // Cryptoswab
  { path: "/cryptoswab", component: Cryptoswab },

  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const authRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },

  { path: "/register", component: Register },
]

export { userRoutes, authRoutes }
