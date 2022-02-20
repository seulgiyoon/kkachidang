import { css } from '@emotion/react';

// import font from '../assets/fonts/SourceHanSerifK.woff2';
import regularEot from '../assets/fonts/noto-serif-kr-v17-latin_korean-regular.eot';
import regularSvg from '../assets/fonts/noto-serif-kr-v17-latin_korean-regular.svg';
import regularWoff from '../assets/fonts/noto-serif-kr-v17-latin_korean-regular.woff';
import regularWoff2 from '../assets/fonts/noto-serif-kr-v17-latin_korean-regular.woff2';
import blackEot from '../assets/fonts/noto-serif-kr-v17-latin_korean-900.eot';
import blackSvg from '../assets/fonts/noto-serif-kr-v17-latin_korean-900.svg';
import blackWoff from '../assets/fonts/noto-serif-kr-v17-latin_korean-900.woff';
import blackWoff2 from '../assets/fonts/noto-serif-kr-v17-latin_korean-900.woff2';

export const GlobalStyle = css`
  /* noto-serif-kr-regular - latin_korean */
  @font-face {
    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 400;
    src: url(${regularEot});
    src: local(''), url(${regularWoff2}) format('woff2'), url(${regularWoff}) format('woff'),
      url(${regularSvg}) format('svg');
  }
  /* noto-serif-kr-900 - latin_korean */
  @font-face {
    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 900;
    src: url(${blackEot});
    src: local(''), url(${blackWoff2}) format('woff2'), url(${blackWoff}) format('woff'),
      url(${blackSvg}) format('svg');
  }

  * {
    font-family: 'Noto Serif KR', 'AppleMyungjo', -apple-system, Georgia, 'Times New Roman', Times,
      serif;
    font-weight: 400;
  }
`;
