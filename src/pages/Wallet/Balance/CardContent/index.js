import { PropTypes } from "prop-types"
import { Button, Card, CardBody, CardFooter, CardHeader } from "reactstrap"

const CardContent = ({ header, footer, children, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader className="bg-white">
        <h5 className="mb-0">{header}</h5>
      </CardHeader>
      <CardBody className="border-top border-bottom">{children}</CardBody>
      {footer && (
        <CardFooter className="bg-white d-flex align-items-center justify-content-end">
          <Button color="primary">{footer}</Button>
        </CardFooter>
      )}
    </Card>
  )
}

CardContent.propTypes = {
  props: PropTypes.string,
  header: PropTypes.string,
  footer: PropTypes.string,
  children: PropTypes.node,
}

export default CardContent
