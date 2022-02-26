import styled from '@emotion/styled';
import { RED, YELLOW } from 'constants/color';
import useChangeHeaderBgColor from 'hooks/useChangeHeaderBgColor';
import { useRef } from 'react';
import { pxToRem } from 'utils/common';

export function CalloutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useChangeHeaderBgColor({ sectionRef, currentColor: RED, nextColor: YELLOW });

  return <Section ref={sectionRef} />;
}

const Section = styled.section`
  width: 100%;
  height: ${pxToRem(600)};
  background-color: ${RED};
`;

export default CalloutSection;
