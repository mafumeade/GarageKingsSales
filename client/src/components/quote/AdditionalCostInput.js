import React from "react";
import CheckboxToggle from "../common/CheckboxToggle";

export default function AdditionalCostInput({ costObj, onChange, onDelPress }) {
  const { name, isPerSqft, price, id } = costObj;
  return (
    <div className=".additionalCostInput mb-4">
      <div className="row">
        <div className="col-md-4 mb-sm-4 mb-md-0 order-1">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={e => onChange(id, "name", e.target.value)}
          />
        </div>
        <div className="col-md-4 mb-sm-4 mb-md-0 order-sm-3 order-md-2">
          <CheckboxToggle
            name=""
            value={isPerSqft}
            trueLabel="Per Sqft"
            falseLabel="Flat Price"
            onChange={value => onChange(id, "isPerSqft", value)}
          />

          <div className="d-sm-block d-md-none text-center mt-3">
            <div className="btn btn-primary" onClick={() => onDelPress(id)}>
              Delete
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-sm-4 mb-md-0 order-sm-2 order-md-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={e => onChange(id, "price", e.target.value)}
          />
        </div>

        <div className="col-md-1 d-sm-none d-md-block order-4">
          <div className="btn btn-primary" onClick={() => onDelPress(id)}>
            x
          </div>
        </div>
      </div>
    </div>
  );
}
