import React, { useState } from "react"
import { connect } from "react-redux"
import { Card, CardBody, Button } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

const EditProfileElements = () => {
  const [email, setemail] = useState("")
  const [name, setname] = useState("")
  const [idx, setidx] = useState(1)

  return (
    <>
      <h4 className="card-title mb-4">Change Email</h4>

      <Card>
        <CardBody>
          <AvForm
            className="form-horizontal"
            onValidSubmit={(e, v) => {
              handleValidSubmit(e, v)
            }}
          >
            <div className="form-group">
              <AvField
                name="email"
                label="email"
                value={email ? email : "user@email.com"}
                className="form-control"
                placeholder="Enter Email"
                type="text"
                required
              />
              <AvField name="idx" value={idx} type="hidden" />
            </div>
            <div className="text-center mt-4">
              <Button type="submit" color="danger">
                Edit Email
              </Button>
            </div>
          </AvForm>
        </CardBody>
      </Card>

      <h4 className="card-title mb-4">Change Photo</h4>

      <Card>
        <CardBody>
          <AvForm
            className="form-horizontal"
            onValidSubmit={(e, v) => {
              handleValidSubmit(e, v)
            }}
          >
            <div className="text-center">
              <label for="exampleFormControlFile1">Upload Photo</label>
              <input
                type="file"
                className="form-control-file uploadPhotoWidth"
              />
            </div>
          </AvForm>
        </CardBody>
      </Card>
    </>
  )
}

export default connect()(EditProfileElements)
