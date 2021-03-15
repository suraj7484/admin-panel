import PropTypes from "prop-types"
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap"

const ModalCreate = ({ isOpen, toggle }) => {
  return (
    <Modal className="modal-dialog-centered" isOpen={isOpen} toggle={toggle}>
      <ModalHeader
        toggle={toggle}
        close={
          <button className="close" onClick={toggle}>
            &times;
          </button>
        }
      >
        Create new balance
      </ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label>Choose currency</Label>
            <Input type="text" placeholder="..." />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="primary" onClick={toggle}>
          Create
        </Button>
      </ModalFooter>
    </Modal>
  )
}

ModalCreate.propTypes = {
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
}

export default ModalCreate
