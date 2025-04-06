import React from "react";
import PropTypes from "prop-types";

const SkipCard = ({ skip, isSelected, onSelect }) => {
  const {
    size,
    hire_period_days,
    price_before_vat,
    vat,
    allowed_on_road,
    allows_heavy_waste
  } = skip;

  const totalPrice = price_before_vat
    ? (price_before_vat * (1 + vat / 100)).toFixed(2)
    : "—";

  return (
    <div
      className={`border rounded-2xl p-4 shadow-md cursor-pointer transition-transform transform hover:scale-105 ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-300 bg-white"
      }`}
      onClick={onSelect}
    >
      <h3 className="text-xl font-semibold mb-2">Skip size: {size} yd³</h3>
      <p>Hire period: {hire_period_days} days</p>
      <p>Price (incl. VAT): <strong>£{totalPrice}</strong></p>
      <p className="text-sm text-gray-500 mt-2">
        {allowed_on_road ? "✅ Allowed on road" : "❌ Not allowed on road"}<br />
        {allows_heavy_waste ? "✅ Suitable for heavy waste" : "❌ No heavy waste"}
      </p>
    </div>
  );
};

SkipCard.propTypes = {
  skip: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default SkipCard;
