import styled from '@emotion/styled';
import { YELLOW } from 'constants/color';
import { pxToRem } from 'utils/common';

function WorkSection() {
  return <Section />;
}

const Section = styled.section`
  width: 100%;
  height: ${pxToRem(600)};
  background-color: ${YELLOW};
`;

export default WorkSection;
