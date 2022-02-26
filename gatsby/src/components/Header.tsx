import styled from '@emotion/styled';
import { StaticImage } from 'gatsby-plugin-image';
import { HEADER_HEIGHT } from 'constants/layout';
import { URLS } from 'constants/url';
import { pxToRem } from 'utils/common';
import { css } from '@emotion/react';
import { useGetHeaderBgColor } from './providers/HeaderBgColorProvider';

function Header() {
  const bgColor = useGetHeaderBgColor();
  return (
    <Wrapper bgColor={bgColor}>
      <a href={URLS.Home}>
        <StaticImage
          src="../assets/images/logo_text.png"
          alt="메인 페이지로"
          placeholder="none"
          layout="fixed"
          width={123}
          height={29}
        />
      </a>
      <nav>
        <NavUl>
          <li>
            <a href="/">소개</a>
          </li>
          <li>
            <a href="/">작업</a>
          </li>
        </NavUl>
      </nav>
    </Wrapper>
  );
}

const Wrapper = styled.header<{ bgColor: string }>`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${pxToRem(HEADER_HEIGHT)};
  padding: 0 60px;
  ${({ bgColor }) => css`
    background-color: ${bgColor};
  `}
  transition: background-color 300ms linear;
`;

const NavUl = styled.ul`
  display: flex;
  font-size: 1rem;
  font-weight: 900;
  li + li {
    margin-left: ${pxToRem(37)};
  }
`;

export default Header;
