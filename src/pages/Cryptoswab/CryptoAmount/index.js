import { Card, CardBody, Button, Input } from "reactstrap"

const CryptoAmount = () => {
  return (
    <Card>
      <CardBody>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="card-title mb-0">Crypto Amount</h4>
          <Input
            type="text"
            name="cryptoamount"
            placeholder="Crypto Amount"
            className="w-50"
          />
        </div>
        <div>
          <p>
            Market price: <span className="float-right">12 USD</span>
          </p>
          <p>
            Estimated fees: <span className="float-right">12 USD</span>
          </p>
          <p>
            Estimated balance: <span className="float-right">12.0 USD</span>
          </p>
        </div>
        <div>
          <Button color="primary" block>
            Swab Balance
          </Button>
        </div>
      </CardBody>
    </Card>
  )
}

export default CryptoAmount
