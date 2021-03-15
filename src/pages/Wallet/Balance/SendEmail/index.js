import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"
import CardContent from "../CardContent"

const SendEmail = () => {
  return (
    <CardContent header="Send by Email" footer="Send">
      <Form>
        <FormGroup>
          <Label>Enter email</Label>
          <Input type="text" placeholder="Email" />
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

export default SendEmail
