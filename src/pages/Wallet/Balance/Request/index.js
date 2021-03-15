import React from "react"
import { Form, FormGroup, Label, Input, UncontrolledTooltip } from "reactstrap"
import CardContent from "../CardContent"

const Request = () => {
  return (
    <CardContent header="Request money" footer="Generate QR Code">
      <Form>
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
        <FormGroup className="mb-0">
          <Label>
            Payment note <span className="text-muted">(optional)</span>
          </Label>
          <Input type="textarea" />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" id="checkbox" /> Save as static QR Code
            <i className="fas fa-exclamation-circle ml-2" id="exclamation"></i>
          </Label>
          <UncontrolledTooltip placement="top" target="exclamation">
            A static QR Code will allow you to receive payments multiple times.
            Convenient to use on printing paper such as donations, pricetags,
            brochures, packaging, newspapers, magazines, etc.
          </UncontrolledTooltip>
        </FormGroup>
      </Form>
    </CardContent>
  )
}

export default Request
