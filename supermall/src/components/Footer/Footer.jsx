import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;

  text-align: center;
`;

function Footer() {
  return <StyledFooter>Footer</StyledFooter>;
}

export default Footer;
