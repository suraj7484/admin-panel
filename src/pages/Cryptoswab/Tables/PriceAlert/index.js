import React, { useEffect, useState } from "react"
import { Table, Button, FormGroup, Label, CustomInput, Alert } from "reactstrap"
import NewAlert from "./NewAlert"

const data = [
  {
    id: 1,
    crypto: "Bitcoin",
    compare: "Lower than",
    price: 17,
    checked: false,
  },
  {
    id: 2,
    crypto: "Bitcoin",
    compare: "Lower than",
    price: 16,
    checked: true,
  },
  {
    id: 3,
    crypto: "Bitcoin",
    compare: "Lower than",
    price: 18,
    checked: false,
  },
  {
    id: 4,
    crypto: "Bitcoin",
    compare: "Lower than",
    price: 19,
    checked: false,
  },
  {
    id: 5,
    crypto: "Bitcoin",
    compare: "Lower than",
    price: 20,
    checked: false,
  },
]
const PriceAlert = () => {
  const [state, setState] = useState([...data])
  const [modal, setModal] = useState(false)
  const [visible, setVisible] = useState(false)
  const [currentAlert, setCurrentAlert] = useState(0)

  const modalToggle = () => setModal(!modal)
  const onDismiss = () => setVisible(false)

  const handleAdd = newAlert => {
    // fake id
    const id = state[0].id - 1
    setState([{ ...newAlert, id }, ...state])
    modalToggle()
  }

  const handleRemove = id => {
    setState(state.filter(item => item.id !== id))
  }

  const handleVisible = () => {
    setVisible(true)
    setTimeout(() => {
      setVisible(false)
    }, 2000)
  }

  const handleChecked = (event, id) => {
    const index = state.findIndex(item => item.id === id)
    state[index].checked = event.target.checked
    setState([...state])
    setCurrentAlert(state[index])
  }
  return (
    <>
      <div className="text-center mb-4 ">
        <Button color="primary" onClick={modalToggle}>
          <i className="fas fa-plus align-middle mr-2"></i>New Alert
        </Button>
        <NewAlert
          modal={modal}
          modalToggle={modalToggle}
          handleAdd={handleAdd}
        />
      </div>
      <Table className="mb-0" size="sm">
        <tbody>
          {state.map(item => (
            <tr key={item.id}>
              <td>{item.crypto}</td>
              <td>{item.compare}</td>
              <td>{item.price} USD</td>
              <td>
                <FormGroup className="my-2">
                  {/* <Label for="exampleCheckbox" className="m-0 p-0" /> */}
                  <CustomInput
                    type="switch"
                    id={"customSwitch" + item.id}
                    htmlFor={"customSwitch" + item.id}
                    checked={item.checked}
                    onChange={event => {
                      handleVisible()
                      handleChecked(event, item.id)
                    }}
                  />
                </FormGroup>
              </td>
              <td>
                <Button close onClick={() => handleRemove(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Alert
        className="custom-alert"
        color="primary"
        isOpen={visible}
        toggle={onDismiss}
      >
        {`Price alert (${currentAlert.id}) ${
          currentAlert.checked ? "enabled" : "disalbed"
        }`}
      </Alert>
    </>
  )
}

export default PriceAlert
