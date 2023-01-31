import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle<{theme:string}>`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size:62.5%
  }
  
  & body{
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
`

export default GlobalStyles