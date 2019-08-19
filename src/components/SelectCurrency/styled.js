import styled from "styled-components";
import { colors } from "../../styled/";

const Button = styled.button`
  height: 35px;
  width: 60px;
  font-size: 13px;
  border: 1px solid ${colors.blue.base};
  border-radius: 2px;
  background-color: ${props =>
    props.className ? `${colors.blue.base}` : `${colors.blue.lighten}`};
  color: ${props =>
    props.className ? `${colors.white}` : `${colors.blue.base}`};
`;

export default {
  Button
};
