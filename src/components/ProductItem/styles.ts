import styled from "styled-components"


export const Container = styled.div<{theme:string}>`
border-radius:8px;
box-shadow: ${props => props.theme === 'light' ?'3px 3px 12px 1px #2EE59D' : '3px 3px 12px 1px rgb(234, 231, 231)'};  
display:grid; 
background-color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
width:220px;
grid-template-rows: 245px 40px 0px ;
transition: all 0.5s ease 0s;
cursor:pointer;


@media (max-width:900px){
    grid-template-rows: 288px 40px 0px ;
width:250px;
}

&:hover{
    box-shadow: ${props => props.theme === 'light' ?'3px 3px 12px 1px #2EE59D' : '3px 3px 12px 1px rgb(234, 231, 231)'};  
}
`

export const ContainerModal = styled.div`
display:grid;
grid-template-rows: 162px 37px;

@media(max-width:900px){
    grid-template-rows: 190px 45px ;
    pointer-events: none
}
`

export const ContainerName = styled.div`
display:flex;
justify-content: space-between;
align-items:start;
`

export const NameProduct = styled.div`
width:120px;
font-size:16px;
margin-left:10px;
color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'};    
font-weight:400;
`

export const PriceProduct = styled.p`
font-size:15px;
background-color: ${props => props.theme === 'light' ? '#2EE59D': '#373737'};   
color:${props => props.theme === 'light' ? '#2C2C2C': 'white'};   
font-weight:bold;
padding:7px 10px 7px 7px;
margin-right:10px;
border-radius:5px;
`

export const Description = styled.div`
 width:192px;
 margin-left:10px;
 color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'}; 
 font-weight:300;
 font-size:10px;
 margin-top:10px
`

export const ContainerButton = styled.button`
background-color: ${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
display:flex;
justify-content:center;
padding:9px 0;
gap:10px;
border-radius: 0 0 8px 8px;
align-items:center;
cursor:pointer; 
border:none;
transition: all 0.3s ease 0s;

&:hover{
    background-color: ${props => props.theme === 'light' ? '#6ee5b6': '#396dba'}; ;
}

span{
border:none;
color:  ${props => props.theme === 'light' ? '#2C2C2C': '#ffffff'};   #ffffff;
font-size:14px;
background-color:none;
font-weight: 600;
font-family:'Montserrat', sans-serif;
cursor:pointer;
}

.shoppingIcon{
    color:${props => props.theme === 'light' ? '#2C2C2C': '#ffffff'};   #ffffff;
    font-size:18px
}
`

export const ContainerImage = styled.div<{hover:boolean, theme:string}>`
    font-size:30px;
    width:25px;
    position:relative;
    bottom:235px;
    left:185px;
    padding:4px;
    color:${props => props.theme === 'light' ? '#72f098': '#396dba'};
    opacity:${props => props.hover ? '1': '0'};
    border-radius:50%;
    transition: all 0.3s ease 0s;
   
    @media(max-width:900px){
        font-size:37px;
        bottom:275px;
    left:215px;
    opacity:0
    }

`