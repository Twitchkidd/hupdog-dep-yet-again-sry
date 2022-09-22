import { createGlobalStyle } from 'styled-components';
import { above } from 'utils/breakpoints.js';

const Global = createGlobalStyle`
  :root {
    --green-tint-100: #229029;
    --green-tint-200: #2ab233;
    --green-tint-300: #36d040;
    --green-tint-400: #57d860;
    --green-tint-500: #79e080;
    --green-tint-600: #9ae79f;
    --green-tint-700: #bcefbf;
    --green-tint-800: #ddf7df;
    --green-tint-900: #ffffff;

    --green-tone-100: #229029;
    --green-tone-200: #2e8e34;
    --green-tone-300: #3a8c3f;
    --green-tone-400: #458a4a;
    --green-tone-500: #518855;
    --green-tone-600: #5d865f;
    --green-tone-700: #69846a;
    --green-tone-800: #748275;
    --green-tone-900: #808080;

    --green-shade-100: #229029;
    --green-shade-200: #1e7f24;
    --green-shade-300: #196c1f;
    --green-shade-400: #155a1a;
    --green-shade-500: #114815;
    --green-shade-600: #0d360f;
    --green-shade-700: #08240a;
    --green-shade-800: #041205;
    --green-shade-900: #000000;

    --blue-tint-100: #6bfecf;
    --blue-tint-200: #7efed6;
    --blue-tint-300: #91fedc;
    --blue-tint-400: #a3ffe2;
    --blue-tint-500: #b5ffe7;
    --blue-tint-600: #c8ffed;
    --blue-tint-700: #dafff3;
    --blue-tint-800: #edfff9;
    --blue-tint-900: #ffffff;

    --blue-tone-100: #6bfecf;
    --blue-tone-200: #6eeec5;
    --blue-tone-300: #70dfbb;
    --blue-tone-400: #73cfb1;
    --blue-tone-500: #76bfa8;
    --blue-tone-600: #78af9e;
    --blue-tone-700: #7ba094;
    --blue-tone-800: #7d908a;
    --blue-tone-900: #808080;

    --blue-shade-100: #6bfecf;
    --blue-shade-200: #3ffec1;
    --blue-shade-300: #12feb3;
    --blue-shade-400: #01e19a;
    --blue-shade-500: #01b47b;
    --blue-shade-600: #01875d;
    --blue-shade-700: #005a3e;
    --blue-shade-800: #002d1f;
    --blue-shade-900: #000000;

    --pink-tint-100: #fe6b99;
    --pink-tint-200: #fe7ea7;
    --pink-tint-300: #fe91b3;
    --pink-tint-400: #ffa3c0;
    --pink-tint-500: #ffb5cd;
    --pink-tint-600: #ffc8d9;
    --pink-tint-700: #ffdae6;
    --pink-tint-800: #ffedf2;
    --pink-tint-900: #ffffff;

    --pink-tone-100: #fe6b99;
    --pink-tone-200: #ee6e96;
    --pink-tone-300: #df7093;
    --pink-tone-400: #cf7390;
    --pink-tone-500: #bf768d;
    --pink-tone-600: #af7889;
    --pink-tone-700: #a07b86;
    --pink-tone-800: #907d83;
    --pink-tone-900: #808080;

    --pink-shade-100: #fe6b99;
    --pink-shade-200: #fe3f7b;
    --pink-shade-300: #fe125d;
    --pink-shade-400: #e10148;
    --pink-shade-500: #b4013a;
    --pink-shade-600: #87012b;
    --pink-shade-700: #5a001d;
    --pink-shade-800: #2d000e;
    --pink-shade-900: #000000;

    --purple-tint-100: #902289;
    --purple-tint-200: #b22aa9;
    --purple-tint-300: #d036c5;
    --purple-tint-400: #d857cf;
    --purple-tint-500: #e079d9;
    --purple-tint-600: #e79ae2;
    --purple-tint-700: #efbcec;
    --purple-tint-800: #f7ddf5;
    --purple-tint-900: #ffffff;

    --purple-tone-100: #902289;
    --purple-tone-200: #8e2e88;
    --purple-tone-300: #8c3a87;
    --purple-tone-400: #8a4586;
    --purple-tone-500: #885185;
    --purple-tone-600: #865d83;
    --purple-tone-700: #846982;
    --purple-tone-800: #827481;
    --purple-tone-900: #808080;

    --purple-shade-100: #902289;
    --purple-shade-200: #7f1e78;
    --purple-shade-300: #6c1967;
    --purple-shade-400: #5a1556;
    --purple-shade-500: #481145;
    --purple-shade-600: #360d33;
    --purple-shade-700: #240822;
    --purple-shade-800: #120411;
    --purple-shade-900: #000000;

    --green: var(--green-tint-100);
    --blue: var(--blue-tint-100);
    --pink: var(--pink-tint-100);
    --purple: var(--purple-tint-100);
    --white: var(--green-tint-900);
    --gray: var(--green-tone-900);
    --black: var(--green-shade-900);

    --serif: 'Noto Serif', serif;
    --sans: 'Noto Sans', sans-serif;
    --display: 'Open Sans', serif;

    /* @link https://utopia.fyi/type/calculator?c=320,21,1.414,1140,24,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

    /* --fs--200: clamp(0.66rem, calc(0.62rem + 0.18vw), 0.75rem);
    --fs--100: clamp(0.93rem, calc(0.88rem + 0.26vw), 1.06rem);
    --fs-000: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem);
    --fs-100: clamp(1.86rem, calc(1.75rem + 0.52vw), 2.12rem);
    --fs-200: clamp(2.62rem, calc(2.48rem + 0.73vw), 3.00rem);
    --fs-300: clamp(3.71rem, calc(3.50rem + 1.03vw), 4.24rem);
    --fs-400: clamp(5.25rem, calc(4.95rem + 1.46vw), 6.00rem);
    --fs-500: clamp(7.42rem, calc(7.01rem + 2.07vw), 8.48rem); */
  }

  @font-face {
    font-family: 'Noto Serif';
    src: url('/fonts/NotoSerif-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Noto Sans';
    src: url('/fonts/NotoSans-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans-VariableFont_wdth,wght.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @keyframes slideOut {
    from {
      transform: translate3d(0);
    }

    to {
      transform: translate3d(-200vw, 0, 0)
    }
  }
  
  html {
    box-sizing: border-box;
  }
  
  *, *::before, *::after {
    box-sizing: inherit;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    height: 100vh;
  }

  html, body {
    overflow: hidden;
    background-color: hsl(240 18% 90%);
  }

  /* https://csswizardry.com/2012/06/single-direction-margin-declarations/ */
  h1,h2,h3,h4,h5,h6,hgroup,
  ul,ol,dd,
  p,figure,
  pre,table,fieldset,hr {
    margin-bottom: 1.5rem;
  }

  /* h1 {
    font-size: var(--fs-500);
  }

  h2 {
    font-size: var(--fs-400);
  }

  h3 {
    font-size: var(--fs-300);
  }

  h4 {
    font-size: var(--fs-200);
  }

  h5 {
    font-size: var(--fs-100);
  }

  h6 {
    font-size: var(--fs-000);
  } */

  h1, h2, h3 {
    font-family: var(--serif);
  }
  
  h4, h5, h6 {
    font-family: var(--display);
  }

  p, span, li {
    font-family: var(--sans);
    /* font-size: var(--fs-000); */
    /* https://www.aleksandrhovhannisyan.com/blog/dont-use-a-fixed-line-height/#solution-2-use-the-ex-unit */
    line-height: calc(4px + 3ex);
  }
`;

export default Global;
