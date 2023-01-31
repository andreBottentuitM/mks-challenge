import styled from "styled-components"

export const ContainerSideBar = styled.div`
height:100%;
display:flex;
flex-direction:column;
`

export const HeaderSidebar = styled.div<{theme:string}>`
margin: 30px auto;
display:flex;
align-items:start;
justify-content: start;
width:100%;
gap:170px;

.closedIcon{
   
color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
background-color:${props => props.theme === 'light' ? 'white': '#1a1a1a'};
width:38px;
height:38px;
padding:5px;
border-radius:50%;
cursor:pointer
}
`

export const TitleSidebar = styled.div`
font-size:27px;
width:180px;
color:#ffffff;
font-weight:bold;
margin-left:30px;
`

export const ContainerProducts = styled.div`
display:flex;
flex-direction:column;
gap:25px;
justify-content:start;
margin:0 0 50px 30px;
`

export const ContainerBottom = styled.div`
margin-top:auto
`

export const ContainerPrice = styled.div`
display:flex;
justify-content: start;
margin-left:30px;
font-weight:bold;

span {
font-size:28px;
color:#ffffff;
width:100%;
display:flex;
justify-content:end;
margin-right:30px;
}
`

export const Total = styled.div`
font-size:28px;
color:#ffffff;
`

export const ButtonPurchase = styled.button<{theme:string}>`
background-color:${props => props.theme === 'light' ? '#2EE59D': '#1a1a1a'};
color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
font-weight:bold;
width:100%;
font-size:28px;
padding:27px 0;
margin-top:30px;
border:none;
cursor:pointer;
`

/*============================ STYLED MOBILE ==============================*/

export const ContainerSideBarMobile = styled.div`
height:100%;
display:flex;
flex-direction:column;
`

export const HeaderSidebarMobile = styled.div<{theme:string}>`
margin: 30px auto;
display:flex;
align-items:start;
justify-content: start;
width:100%;
gap:50px;

.closedIconMobile{
    color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
    background-color:${props => props.theme === 'light' ? 'white': '#1a1a1a'};
width:38px;
height:38px;
padding:5px;
border-radius:50%;
cursor:pointer;
}
`

export const TitleSidebarMobile = styled.div`
font-size:27px;
width:180px;
color:#ffffff;
font-weight:bold;
margin-left:30px;
`

export const ContainerProductsMobile = styled.div`
display:flex;
flex-direction:column;
gap:15px;
justify-content:start;
margin:0 0 50px 30px;
`

export const ContainerBottomMobile = styled.div`
margin-top:auto
`

export const ContainerPriceMobile = styled.div`
display:flex;
justify-content: start;
margin-left:30px;
font-weight:bold;

span {
font-size:28px;
color:#ffffff;
width:100%;
display:flex;
justify-content:end;
margin-right:25px
}
`

export const TotalMobile = styled.div`
font-size:28px;
color:#ffffff;
`

export const ButtonPurchaseMobile = styled.button`
background-color:${props => props.theme === 'light' ? '#2EE59D': '#1a1a1a'};
color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
font-weight:bold;
width:100%;
font-size:28px;
padding:27px 0;
margin-top:30px;
bordeR:none;
`