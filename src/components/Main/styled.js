import styled from "styled-components";
import { colors } from "../../styled/";
import imagelogo from "../../img/plain.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 900px;
  height: auto;
  margin: 0 auto;
`;

const Filter = styled.div`
  height: 280px;
  margin-top: 23px;
  padding: 20px;
  border: 1px solid ${colors.gray.lighten};
  border-radius: 5px;
  box-shadow: 8px 10px 14px -10px rgba(110, 97, 110, 0.65);
  background: ${colors.white};
`;

const Logo = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: center;
  background-size: cover;
  height: 80px;
  width: 80px;
  background-image: url(${imagelogo});
`;

export default {
  Wrapper,
  Filter,
  Logo
};
