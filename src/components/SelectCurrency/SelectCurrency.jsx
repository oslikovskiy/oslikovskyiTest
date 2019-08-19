import React from "react";
import Styled from "./styled";

const SelectCurrency = ({ onChange, currencyItem, isSelected }) => {
  return (
    <Styled.Button
      className={isSelected ? "is-selected" : ""}
      onClick={() => onChange(currencyItem.code)}
    >
      {currencyItem.code}
    </Styled.Button>
  );
};

export default SelectCurrency;
