import styled from "styled-components"

export const Header = styled.header<{scroll:boolean,theme:string}>`
  background-color: ${props => props.theme ==='dark' ? '#0F52BA': '#000000'};
  padding:28px 65px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  transition: all 0.3s ease 0s;
  width:${props => props.scroll ? '100vw': '100%'};

  @media(max-width:900px){
    padding:5px 20px;
  }
`

export const Logo = styled.div`

color:#ffffff;
font-size:40px;
font-weight:600;
width:200px;
cursor:pointer;


span{
    font-size:20px;
    font-weight: 300;
}

@media(max-width:900px){
  font-size:32px;

  span{
    font-size:16px;
  }
}
`

export const Cart = styled.div<{theme:string}>`
color:white;
background-color:white;
width:90px;
padding: 12px 0;
border-radius:8px;
display:flex;
justify-content:center;
gap:10px;
cursor:pointer;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
transition: all 0.3s ease 0s;

  &:hover{
    background-color:${props => props.theme ==='dark' ? '#abc9f5': '#2EE59D;'};         
  box-shadow: ${props => props.theme ==='dark' ? '0px 15px 20px rgba(207,226,255,0.2);': '0px 15px 20px rgba(46, 229, 157, 0.4)'};    
  transform: translateY(-7px);
  }

.cart-icon{
    color:black;
    font-size:20px;
    }
}

.badge{
    color:black;
    font-size:18px;
    font-weight:bold;
    width:10px;
}

@media(max-width:900px){
  font-size:32px;
  width:50px;
  padding: 8px 0;

  .cart-icon{
    font-size:14px;
  }

  .badge{
    font-size:12px;
  }
}
`

export const ContainerNav = styled.div`
display:flex;
align-items:center;
gap:20px
`

export const ThemeMode = styled.div<{theme:string}>`
  .darkIcon{
    font-size:40px;
    color:black;
    cursor: pointer;
    background-color:white;
    padding:8px;
    border-radius: 4px;
    display:${props => props.theme === 'light' ? 'none': 'block'}
  }

  .lightMode{
    font-size:40px;
    color:black;
    padding:8px;
    border-radius: 4px;
    background-color:white;
    cursor: pointer;
    display:${props => props.theme === 'light' ? 'block': 'none'}
  }

  @media(max-width:900px){
    .darkIcon, .lightMode{
      font-size:28px;
      padding:5px;
      
    }  
    
  }
`

export const Main = styled.main<{theme:string, modal:boolean}>`
    min-height:100vh;
    z-index:-1;
    width: ${props => props.modal ? '100vw': '100%'};
    padding:1px 0;
    transition: all 0.3s ease 0s;
    background-color:  ${props => props.theme === 'light' ? '#1a1a1a': 'white'};
`

export const Footer = styled.footer`
text-align:center;
background-color:${props => props.theme === 'light' ? '#1a1a1a': '#eeeeee'};
font-size:12px;
padding:12px 0;
font-weight:400;
margin-top:auto;
color:${props => props.theme === 'light' ? '#EEEEEE': '#1a1a1a'};
`