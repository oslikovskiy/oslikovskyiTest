import styled from "styled-components";
import { colors } from "../../styled/";
import imagelogo from "../../img/01.jpg";
// import { media } from "../../styled/mediaTemplates";

const Button = styled("button")`
  height: 50px;
  width: 130px;
  color: ${colors.white};
  font-size: 13px;
  line-height: 1.2;
  background-color: ${colors.orange.dark};
  border: 1px solid ${colors.orange.base};
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  box-shadow: 1px 1px 1px 0px rgba(199, 185, 199, 1);
`;

const Logo = styled.div`
  background-size: cover;
  height: 50px;
  width: 130px;
  background-image: url(${imagelogo});
`;

const BtnGroup = styled.div``;

const Content = styled.div`
  border: 1px solid ${colors.gray.lighten};
  height: 160px;
  width: 630px;
  margin: 23px auto;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  list-style-type: none;
  align-items: center;
  border-radius: 5px;
  box-shadow: 8px 10px 14px -10px rgba(110, 97, 110, 0.65);
  background: white;

  p {
    font-size: 13px;
    margin: 11px 0 0 0;
  }

  h2 {
    font-weight: 400;
    margin: 0;
  }
`;

const Departure = styled.div``;

export default {
  Button,
  Logo,
  BtnGroup,
  Content,
  Departure
};
