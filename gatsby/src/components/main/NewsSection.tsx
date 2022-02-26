import styled from '@emotion/styled';
import { CREAM } from 'constants/color';
import { pxToRem } from 'utils/common';

function NewsSection() {
  return <Section />;
}

const Section = styled.section`
  width: 100%;
  height: ${pxToRem(600)};
  background-color: ${CREAM};
`;

export default NewsSection;
