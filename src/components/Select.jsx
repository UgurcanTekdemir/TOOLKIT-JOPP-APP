import React from "react";

const Select = ({ label, options }) => {
  return (
    <div>
      <label>{label}</label>
      <select>
        <option value="">Seçiniz</option>
        {options.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
