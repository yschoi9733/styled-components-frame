import { css } from 'styled-components';

const mixin = {
  // flex
  flexBox: ({
    direction = 'row',
    align,
    justify,
  }: Record<string, string>) => css`
    dilsplay: flex;
    fex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  inlineFlexBox: ({
    direction = 'row',
    align,
    justify,
  }: Record<string, string>) => css`
    display: inline-flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  flexCenter: ({ direction = 'column' }) => css`
    display: flex;
    flex-direction: ${direction};
    align-items: center;
    justify-content: center;
  `,
};

export default mixin;
