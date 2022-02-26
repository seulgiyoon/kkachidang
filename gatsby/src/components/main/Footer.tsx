import styled from '@emotion/styled';
import { BLUE } from 'constants/color';
import { pxToRem } from 'utils/common';

function Footer() {
  return <Section />;
}

const Section = styled.footer`
  width: 100%;
  height: ${pxToRem(600)};
  background-color: ${BLUE};
`;

export default Footer;
