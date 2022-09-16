import { createGlobalStyle } from 'styled-components';
import { above } from 'utils/breakpoints.js';

const Global = createGlobalStyle`
  :root {
    --blue-300: #35357C;
    --blue-400: #1C1C61;
    --blue-500: #0B0B45;
    --blue-600: #04042C;
    --blue-700: #010115;
    --blue: var(--blue-500);

    --red-300: #C53333;
    --red-400: #A21616;
    --red-500: #800000;
    --red-600: #5A0000;
    --red-700: #330000;
    --red: var(--red-500);

    --green-300: #299D29;
    --green-400: #128112;
    --green-500: #006600;
    --green-600: #004800;
    --green-700: #002800;
    --green: var(--green-500);

    --light-blue: #7ACBF5;
    --pink: #EAACB8;

    --beige-300: #FFFEFC;
    --beige-400: #FFF9F0;
    --beige-500: #E8DCCA;
    --beige-600: #C5B399;
    --beige-700: #A68F6D;
    --beige: var(--beige-500);

    --white: #FFFFFF;
    --gray-300: #EAEBEC;
    --gray-500: #C2C7CC;
    --gray-700: #929DA9;
    --black: #000000;
    --gray: var(--gray-500);

    --serif: 'Noto Serif', serif;
    --sans: 'Noto Sans', sans-serif;
    --display: 'Open Sans', serif;

    /* @link https://utopia.fyi/type/calculator?c=320,21,1.414,1140,24,1.414,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */

    --fs--200: clamp(0.66rem, calc(0.62rem + 0.18vw), 0.75rem);
    --fs--100: clamp(0.93rem, calc(0.88rem + 0.26vw), 1.06rem);
    --fs-000: clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem);
    --fs-100: clamp(1.86rem, calc(1.75rem + 0.52vw), 2.12rem);
    --fs-200: clamp(2.62rem, calc(2.48rem + 0.73vw), 3.00rem);
    --fs-300: clamp(3.71rem, calc(3.50rem + 1.03vw), 4.24rem);
    --fs-400: clamp(5.25rem, calc(4.95rem + 1.46vw), 6.00rem);
    --fs-500: clamp(7.42rem, calc(7.01rem + 2.07vw), 8.48rem);
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

  /* https://csswizardry.com/2012/06/single-direction-margin-declarations/ */
  h1,h2,h3,h4,h5,h6,hgroup,
  ul,ol,dd,
  p,figure,
  pre,table,fieldset,hr {
    margin-bottom: 1.5rem;
  }

  h1 {
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
  }

  h1, h2, h3 {
    font-family: var(--serif);
  }
  
  h4, h5, h6 {
    font-family: var(--display);
  }

  p, span, li {
    font-family: var(--sans);
    font-size: var(--fs-000);
    /* https://www.aleksandrhovhannisyan.com/blog/dont-use-a-fixed-line-height/#solution-2-use-the-ex-unit */
    line-height: calc(4px + 3ex);
  }
`;

export default Global;
