import { Card, Button } from "reactstrap"
import PropTypes from "prop-types"

const DownloadCard = ({ label, handleClick }) => {
  return (
    <Card className="flex-row align-items-center justify-content-between px-3 py-1 border mb-2">
      <p className="mb-0">{label}</p>
      <Button
        className="btn-circle"
        size="sm"
        color="primary"
        // onClick={handleClick}
      >
        <i className="fas fa-download"></i>
      </Button>
    </Card>
  )
}

DownloadCard.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
}

export default DownloadCard
