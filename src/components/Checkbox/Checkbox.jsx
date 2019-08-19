import React from "react";
import Styled from "./styled";

const CheckBox = ({ value, isChecked, onChange }) => {
  return (
    <Styled.CheckBoxWrapper>
      <input
        type="checkbox"
        onChange={onChange}
        defaultChecked={isChecked}
        value={value}
      />
      <label>
        {value === 1
          ? `${value} Пересадка`
          : value > 1
          ? `${value} Пересадки`
          : "Без пересадок"}
        <span className="tooltiptext">только</span>
      </label>
    </Styled.CheckBoxWrapper>
  );
};

export default CheckBox;
