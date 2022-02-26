import styled from '@emotion/styled';
import { CREAM, YELLOW } from 'constants/color';
import useChangeHeaderBgColor from 'hooks/useChangeHeaderBgColor';
import { useRef } from 'react';
import { pxToRem } from 'utils/common';

function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useChangeHeaderBgColor({ sectionRef, currentColor: YELLOW, nextColor: CREAM });

  return <Section ref={sectionRef} />;
}

const Section = styled.section`
  width: 100%;
  height: ${pxToRem(600)};
  background-color: ${YELLOW};
`;

export default WorkSection;
