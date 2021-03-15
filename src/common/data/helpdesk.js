const chats = [
  {
    id: 1,
    roomId: 1,
    status: "offline",
    image: "avatar2",
    name: "Steven Franklin",
    description: "Hey! there I'm available",
    time: "05 min",
    starred: false,
    archived: false
  },
  {
    id: 2,
    roomId: 2,
    status: "online",
    image: "avatar3",
    name: "Adam Miller",
    description: "I've finished it! See you so",
    time: "12 min",
    starred: true,
    archived: false
  },
  {
    id: 3,
    roomId: 3,
    status: "online",
    image: "avatar3",
    name: "Keith Gonzales",
    description: "This theme is awesome!",
    time: "24 min",
    starred: true,
    archived: false
  },
  {
    id: 4,
    roomId: 4,
    status: "intermediate",
    image: "avatar4",
    name: "Jose Vickery",
    description: "Nice to meet you",
    time: "1 hr",
    starred: false,
    archived: true
  },
  {
    id: 5,
    roomId: 5,
    status: "offline",
    image: "avatar4",
    name: "Mitchel Givens",
    description: "Hey! there I'm available",
    time: "3 hrs",
    starred: false,
    archived: true
  },
  {
    id: 6,
    roomId: 6,
    status: "online",
    image: "avatar6",
    name: "Stephen Hadley",
    description: "I've finished it! See you so",
    time: "5 hrs",
    starred: false,
    archived: true
  },
  {
    id: 7,
    roomId: 7,
    status: "online",
    image: "avatar6",
    name: "Keith Gonzales",
    description: "This theme is awesome!",
    time: "24 min",
    starred: false,
    archived: true
  },
]

const groups = [
  { id: 1, image: "G", name: "General" },
  { id: 2, image: "R", name: "Reporting" },
  { id: 3, image: "M", name: "Meeting" },
  { id: 4, image: "A", name: "Project A" },
  { id: 5, image: "B", name: "Project B" },
]

const contacts = [
  {
    category: "A",
    child: [
      { id: 1, name: "Adam Miller" },
      { id: 2, name: "Alfonso Fisher" },
    ],
  },
  {
    category: "B",
    child: [{ id: 1, name: "Bonnie Harney" }],
  },
  {
    category: "C",
    child: [
      { id: 1, name: "Charles Brown" },
      { id: 2, name: "Carmella Jones" },
      { id: 3, name: "Carrie Williams" },
    ],
  },
  {
    category: "D",
    child: [{ id: 4, name: "Dolores Minter" }],
  },
]

const messages = [
  {
    id: 1,
    roomId: 1,
    sender: "Henry Wells",
    message: "Hello!",
    selected: false,
    createdAt: "2020-04-02T17:00:21.529Z",
  },
  {
    id: 2,
    roomId: 1,
    sender: "Henry Wells",
    message: "How are you ?Tell about other things. Tell about other",
    selected: false,
    createdAt: "2020-04-02T17:01:21.529Z",
  },
  {
    id: 3,
    roomId: 1,
    sender: "Steven Franklin",
    message: "I am fine, What about you ?  Tell about other things. Tell about other things Tell about other things. Tell about other things Tell about other things. Tell about other things",
    selected: false,
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 4,
    roomId: 2,
    sender: "Adam Miller",
    message: "Hello!",
    selected: false,
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 5,
    roomId: 3,
    sender: "Keith Gonzales",
    message: "Hello!",
    selected: false,
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 6,
    roomId: 4,
    sender: "Jose Vickery",
    message: "Hello!",
    selected: false,
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 7,
    roomId: 5,
    sender: "Mitchel Givens",
    message: "Hello!",
    selected: false,
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 8,
    roomId: 6,
    sender: "Stephen Hadley",
    message: "Hello!",
    selected: false,
    createdAt: "2020-04-02T17:07:21.529Z",
  },
  {
    id: 9,
    roomId: 7,
    sender: "Keith Gonzales",
    message: "Hello! Bro, Who are You? Nice to see you",
    selected: false,
    createdAt: "2020-04-02T17:07:21.529Z",
  },
]

export default { chats, messages, contacts, groups }
