import React from "react"
import { Form, FormGroup } from "reactstrap"
import PropTypes from "prop-types"
import PhoneInput from "react-phone-input-2"
import CardContent from "../CardContent"

const Convert = () => {
  return (
    <CardContent header="Convert" footer="Convert">
      <Form>
        <FormGroup>
          <PhoneInput inputClass="w-100" country="us" />
        </FormGroup>
        <ul>
          <li>Fee 1%</li>
          <li>0.0 converted</li>
          <li>0.9203 Conversion rate</li>
        </ul>
        <FormGroup>
          <PhoneInput
            inputClass="w-100"
            country="de"
            // value={phone}
            // onChange={handleChange}
          />
        </FormGroup>
      </Form>
    </CardContent>
  )
}

Convert.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

export default Convert
