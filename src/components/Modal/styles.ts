import styled from "styled-components"

export const Container = styled.div<{theme:string}>`
display:flex;
align-items:center;
border:none;

.closeIcon{
    color:${props => props.theme === 'light' ? '#f0ffffde': '#000000'};
    font-size:50px;
    position:relative;
    left:440px;
    bottom:25px;
    cursor:pointer;
    display:flex;
    justify-content:end;
}
`
export const ContainerImage = styled.div`
flex:1;
display:flex;
justify-content:start
`

export const ContainerContent = styled.div`
flex:1;
display:grid;
grid-template-rows: 50px 80px 50px 60px 10px ;
`

export const NameProduct = styled.p<{theme:string}>`
color: ${props => props.theme === 'light' ? '#f0ffffde': '#000000'};
font-size:30px;
font-weight:bolder;
`

export const Information = styled.h2<{theme:string}>`
font-size:13px;
text-align:justify;
display:inline-block;
font-weight:400;
color:${props => props.theme === 'light' ? '#f0ffffde': '#000000'};


span{
    margin-top:2px;
    font-size:18px;
    display:block;
   
}
`
export const Brand = styled.p<{theme:string}>`
font-size:20px;
font-weight:bolder;
color:${props => props.theme === 'light' ? '#f0ffffde': '#000000'};

span{
    font-weight:400;
    font-size:18px;
}
`

export const Price = styled.span<{theme:string}>`
background-color:${props => props.theme === 'light' ? '#2EE59D': '#373737'}; 
color:${props => props.theme === 'light' ? '#2C2C2C': 'white'};   
padding:10px;
border-radius: 8px;
margin-left:10px;
font-weight: bold;
`

export const PriceContainer = styled.p`
font-size:20px;
font-weight:bold;
color:${props => props.theme === 'light' ? '#f0ffffde': '#000000'};

span{
    font-weight:400;
    font-size:18px;
}
`

export const ContainerPurchase = styled.div`
display:flex;
justify-content:space-between;

`

export const Purchase = styled.button<{theme:string}>`
background-color:${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
color:${props => props.theme === 'light' ? '#2C2C2C': '#ffffff'};
border:none;
padding: 10px 90px;
border-radius:8px;
font-weight:bolder;
transition: all 0.5s ease 0s;
cursor:pointer;

&:hover{
    background-color:${props => props.theme === 'light' ? '#6ee5b6': '#396dba'};
}
`

export const ContainerQuantity = styled.div`
display:flex;
gap:5px
`

export const Plus = styled.button<{theme:string}>`
padding:10px 17px;
border:none;
border-radius:4px;
font-size:20px;
transition: all 0.3s ease 0s;
cursor:pointer;

&:hover{
    background-color:${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
    color:${props => props.theme === 'light' ? '#000000': '#ffffff'}; 
}
`


export const Quantity = styled.span`
font-size:18px;
width:40px;
text-align:center;
padding:10px 10px;
background-color:#efefef;
border-radius:4px
`

export const Minus = styled.button<{theme:string}>`
padding:10px 19px;
font-size:20px;
border:none;
border-radius:4px;
transition: all 0.3s ease 0s;
cursor:pointer;

&:hover{
    background-color:${props => props.theme === 'light' ? '#2EE59D': '#0F52BA'}; 
    color:${props => props.theme === 'light' ? '#000000': '#ffffff'}; 
}
`
