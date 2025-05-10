import { css } from 'styled-components';

import mixin from './mixin';

export const FONT = {
  FAMILY: {
    KOREAN: "'AppleSDGothicNeo', 'Noto Sans KR', sans-serif",
    ENGLISH: "'Open Sans', sans-serif",
  },
  STYLE: {
    BASE: 'normal',
    ITALIC: 'italic',
  },
  WEIGHT: {
    REGULAR: '400',
    BOLD: '700',
  },
  SIZE: {
    // html {font-size: 10px}
    BASE: '1.6rem',
    MEDIUM: '2.4rem',
    MEDIUM_LARGE: '3rem',
    LARGE: '3.6rem',
    X_LARGE: '4.8rem',
    TX_LARGE: '6.4rem',
  },
  HEIGHT: {
    // html {line-height: 10px}
    BASE: '1.6rem',
    MEDIUM: '2.4rem',
    LARGE: '3.2rem',
    LARGE_X_LARGE: '3.5rem',
    X_LARGE: '4rem',
    X_LARGE_TX_LARGE: '4.8rem',
    TX_LARGE: '6.5rem',
    TTX_LARGE: '7.5rem',
  },
};

const COLORS = {
  BLUE: {
    900: '#036EFF',
    700: '#81B7FF',
    100: '#e6f1ff',
  },
  YELLOW: {
    900: '#FFBC39',
    700: '#FFD175',
    200: '#FFDE9C',
  },
  RED: {
    600: '#ED3049',
    400: '#F54F62',
    200: '#F09AA4',
  },
  GRAY: {
    fff: '#ffffff',
    200: '#F8F8F8',
    300: '#F0F0F0',
    400: '#DEDEDE',
    500: '#c2c2c2',
    600: '#979797',
    700: '#818181',
    800: '#606060',
    900: '#3C3C3C',
    1000: '#000000',
  },
};

const fonts = {
  korean: {
    title: css`
      font-family: ${FONT.FAMILY.KOREAN};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.X_LARGE};
      line-height: ${FONT.HEIGHT.LARGE};
    `,
    subTitle: css`
      font-family: ${FONT.FAMILY.KOREAN};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.REGULAR};
      font-size: ${FONT.SIZE.MEDIUM};
      line-height: ${FONT.HEIGHT.LARGE};
    `,
    emphasis: css`
      font-family: ${FONT.FAMILY.KOREAN};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.BASE};
      line-height: ${FONT.HEIGHT.MEDIUM};
    `,
    default: css`
      font-family: ${FONT.FAMILY.KOREAN};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.REGULAR};
      font-size: ${FONT.SIZE.BASE};
      line-height: ${FONT.HEIGHT.MEDIUM};
    `,
  },
  english: {
    main: css`
      font-family: ${FONT.FAMILY.ENGLISH};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.TX_LARGE};
      line-height: ${FONT.HEIGHT.TTX_LARGE};
    `,
    title: css`
      font-family: ${FONT.FAMILY.ENGLISH};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.MEDIUM};
      line-height: ${FONT.HEIGHT.LARGE};
    `,
    emphasis: css`
      font-family: ${FONT.FAMILY.ENGLISH};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.BASE};
      line-height: ${FONT.HEIGHT.LARGE};
    `,
    default: css`
      font-family: ${FONT.FAMILY.ENGLISH};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.BASE};
      line-height: ${FONT.HEIGHT.MEDIUM};
    `,
    default_no_bold: css`
      font-family: ${FONT.FAMILY.ENGLISH};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.REGULAR};
      font-size: ${FONT.SIZE.BASE};
      line-height: ${FONT.HEIGHT.MEDIUM};
    `,
  },
  main: {
    title: css`
      font-family: ${FONT.FAMILY.KOREAN};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.TX_LARGE};
      line-height: ${FONT.HEIGHT.TTX_LARGE};
    `,
    subTitle: css`
      font-family: ${FONT.FAMILY.KOREAN};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.X_LARGE};
      line-height: ${FONT.HEIGHT.TX_LARGE};
    `,
    emphasis: css`
      font-family: ${FONT.FAMILY.ENGLISH};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.MEDIUM_LARGE};
      line-height: ${FONT.HEIGHT.X_LARGE};
    `,
    default: css`
      font-family: ${FONT.FAMILY.ENGLISH};
      font-style: ${FONT.STYLE.BASE};
      font-weight: ${FONT.WEIGHT.BOLD};
      font-size: ${FONT.SIZE.MEDIUM};
      line-height: ${FONT.HEIGHT.LARGE_X_LARGE};
    `,
  },
};

export const zIndex = {
  gnbLevel: 100,
  dropModalLevel: 200,
  modalLayout: 900,
  modalLevel: 950,
  modalContent: 999,
};

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  pc: '1024px',
};

export const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  pc: `screen and (max-width: ${deviceSizes.pc})`,
};

const theme = { fonts, COLORS, device, zIndex, mixin };

export default theme;
