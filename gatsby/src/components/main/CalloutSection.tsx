import styled from '@emotion/styled';
import { RED } from 'constants/color';
import { pxToRem } from 'utils/common';

export function CalloutSection() {
  return <Section />;
}

const Section = styled.section`
  width: 100%;
  height: ${pxToRem(600)};
  background-color: ${RED};
`;

export default CalloutSection;
