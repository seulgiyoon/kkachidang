import styled from '@emotion/styled';
import { CREAM } from 'constants/color';

function HeroSection() {
  return <Section />;
}

const Section = styled.section`
  width: 100%;
  height: 100vh;
  background-color: ${CREAM};
`;

export default HeroSection;
