import styled from "styled-components"

export const Container = styled.div<{theme:string}>`
background-color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
width:375px;
border-radius:8px;
display:flex;
align-items:center;
padding:20px 10px;


.quantityDescription{
    position:relative;
    bottom:20px;
    left:20px;
    color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'};
}

.closedButton{
    position:relative;
    bottom:42px;
    left:25px;
    font-size:18px;
    background-color:black;
    color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
    background-color:${props => props.theme === 'light' ? 'white': '#1a1a1a'};
    padding:3px;
    border-radius:50%;
    cursor:pointer;
}
`

export const NameProduct = styled.p<{theme:string}>`
width:100px;
font-size:13px;
font-weight:400;
margin-left:10px;
color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'};  
`
export const ContainerQuantitaty = styled.div<{theme:string}>`
border:1px solid #bfbfbf;
display:flex;
justify-content:space-evenly;
width:60px;
font-size:10px;
align-items:center;
border-radius:4px;
color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'};  

.align{
    display:flex;
    justify-content:center;
}
.quantity{
    font-size:12px;
    padding:0 2px;
    width:20px;
    text-align:center;
}

`

export const Minus = styled.button<{theme:string}>`
background-color:white;
border:none;
font-size:14px;
width:19px;
height:18px;
cursor:pointer;
border-radius:4px 0px 0px 4px;
transition: all 0.3s ease 0s;

&:hover{
    background-color:${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
    color:${props => props.theme === 'light' ? '#000000': '#ffffff'}; 
}
`

export const Plus = styled.button<{theme:string}>`
background-color:white;
border:none;
font-size:13px;
height:18px;
width:19px;
border-radius:0px 4px 4px 0;
transition: all 0.3s ease 0s;
cursor:pointer;

&:hover{
    background-color:${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
    color:${props => props.theme === 'light' ? '#000000': '#ffffff'}; 
}
`

export const Value = styled.span<{theme:string}>`
font-weight:bold;
font-size:14px;
margin-left:25px;
width:60px;
color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'}; 
`

/*========================= MOBILE ===========================*/

export const ContainerMobile = styled.div<{theme:string}>`
background-color:${props => props.theme === 'light' ? '#1a1a1a': 'white'};
width:250px;
border-radius:8px;
display:grid;
grid-template-rows: 110px 45px 20px 32px;


.closedButtonMobile{
    font-size:30px;
    position:relative;
    bottom:170px;
    left:210px;
    cursor:pointer;
    color:${props => props.theme === 'light' ? 'white': '#1a1a1a'};
   
}

.imageContainer{
  margin:15px 0px 0px 75px;
}
`

export const NameProductMobile = styled.p<{theme:string}>`
font-size:16px;
margin-left:-10px;
text-align:center;
color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'};  
`

export const ContainerQuantitatyMobile = styled.div<{theme:string}>`
border:1px solid #bfbfbf;
display:flex;
justify-content:space-evenly;
width:97px;
font-size:10px;
align-items:center;
border-radius:4px;
margin:0 0 0 15px;


.align{
    display:flex;
    justify-content:center;
}
.quantity{
    font-size:20px;
    padding:0 2px;
    width:30px;
    text-align:center;
    color:${props => props.theme === 'light' ? '#f0ffffde': '#2C2C2C'};   
}
`

export const MinusMobile = styled.button<{theme:string}>`
background-color:white;
border:none;
width:37px;
font-size:24px;
cursor:pointer;
border-radius:4px 0px 0px 4px;
transition: all 0.3s ease 0s;

&:hover{
    background-color:${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
    color:${props => props.theme === 'light' ? '#000000': '#ffffff'}; 
}
`

export const PlusMobile = styled.button<{theme:string}>`
background-color:white;
border:none;
font-size:24px;
width:37px;
border-radius:0px 4px 4px 0;
transition: all 0.3s ease 0s;
cursor:pointer;

&:hover{
    background-color:${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
    color:${props => props.theme === 'light' ? '#000000': '#ffffff'}; 
}
`

export const ContainerValue = styled.div`
display:flex;
align-items:center;

`

export const ValueMobile = styled.span<{theme:string}>`
font-weight:bold;
font-size:15px;
margin-left:25px;
width:85px;
background-color:${props => props.theme === 'light' ? '#2EE59D': '#2C2C2C'}; 
text-align:center;
color:${props => props.theme === 'light' ? '#2C2C2C': '#ffffff'}; 
padding: 10px 14px;
border-radius:5px;

`
