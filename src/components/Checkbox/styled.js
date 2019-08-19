import styled from "styled-components";
import { colors } from "../../styled";

const CheckBoxWrapper = styled.div`
  label {
    padding-left: 10px;
    cursor: pointer;
    font-size: 13px;

    .tooltiptext {
      visibility: hidden;
      width: 120px;
      text-align: center;
      padding: 5px 0;
      padding-left: 25px;
      color: ${colors.blue.base};
    }

    &:hover {
      .tooltiptext {
        visibility: visible;
      }
    }
  }
`;

export default {
  CheckBoxWrapper
};
