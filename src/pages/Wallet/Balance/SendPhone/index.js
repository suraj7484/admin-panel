import React, { useState } from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"
import PhoneInput from "react-phone-input-2"
import CardContent from "../CardContent"

const SendPhone = () => {
  const [phone, setPhone] = useState("")

  const handleChange = value => setPhone(value)

  return (
    <CardContent header="Send by phone number" footer="Send">
      <Form>
        <FormGroup>
          <Label>Enter phone number</Label>
          <PhoneInput
            inputClass="w-100"
            country="us"
            value={phone}
            onChange={handleChange}
            placeholder="Phone number"
          />
        </FormGroup>
        <FormGroup>
          <Label>Choose currency</Label>
          <Input type="select" defaultValue="default">
            <option value="default" disabled hidden>
              Select your option
            </option>
            <option>USD United States Dollar</option>
            <option>EUR European Euro</option>
            <option>CNY Chinese Yuan</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>Payment amount</Label>
          <Input type="number" />
        </FormGroup>
        <FormGroup>
          <Label>
            Payment note <span className="text-muted">(optional)</span>
          </Label>
          <Input type="textarea" />
        </FormGroup>
      </Form>
    </CardContent>
  )
}

export default SendPhone
