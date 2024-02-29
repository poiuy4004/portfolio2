import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Gugi from "./assets/fonts/Gugi.ttf";
import MarBoDan from "./assets/fonts/MarBoDan.ttf";
import Round from "./assets/fonts/Round.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Gugi";
    src: url(${Gugi}) format("truetype");
    unicode-range: U+0041-005A, U+0061-007A, U+0030-0039, U+0020-002F, U+003A-0040, U+005B-0060, U+007B-007E;
  }
  @font-face {
    font-family: "Round";
    src: url(${Round}) format("truetype");
    unicode-range: U+AC00-D7A3, U+1100-11FF, U+3130-318F, U+A960-A97F, U+AC00-D7A3, U+D7B0-D7FF;
  }
  @font-face {
    font-family: "MarBoDan";
    src: url(${MarBoDan}) format("truetype");
  }
  html{
    scroll-behavior: smooth;
    font-family: "Gugi", "Round", "MarBoDan";
    background-color: rgb(234, 234, 234);
  }
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  a{
    color: black;
    text-decoration: none;
    font-family: "Gugi";
  }
  button{
    border: none;
    font-family: "Gugi";
    background-color: transparent;
    cursor: pointer;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);
