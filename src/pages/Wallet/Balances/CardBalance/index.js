import React from "react"
import PropTypes from "prop-types"
import { Card } from "reactstrap"
import { Link } from "react-router-dom"

const CardBalance = ({ currency, label, amount, url, image }) => {
  return (
    <Link to={url} className="text-secondary">
      <Card className="flex-row align-items-center">
        {/* <ReactcurrencyFlag
          currencyCode={currency}
          svg
          className="currency"
          title={currency}
        /> */}
        <img className="flags" title={currency} src={image} alt={currency} />
        <div className="ml-3">
          <h4>{label}</h4>
          <p className="mb-0">{amount}</p>
        </div>
      </Card>
    </Link>
  )
}

CardBalance.propTypes = {
  currency: PropTypes.string,
  label: PropTypes.string,
  amount: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

export default CardBalance
