import styled from '@emotion/styled';
import { CREAM, RED } from 'constants/color';
import useChangeHeaderBgColor from 'hooks/useChangeHeaderBgColor';
import { useRef } from 'react';

function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useChangeHeaderBgColor({ sectionRef, currentColor: CREAM, nextColor: RED });

  return <Section ref={sectionRef} />;
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${CREAM};
`;

export default HeroSection;
