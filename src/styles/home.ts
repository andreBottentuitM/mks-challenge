import styled from "styled-components"


export const ContainerGrid = styled.div`
  display:grid;
  width:938px;
  margin:116px auto 170px;
  row-gap:32px;
  column-gap:20px;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));


  @media (max-width:1100px){
    row-gap:40px;
    column-gap:40px;
    margin:40px auto 0 auto 170px;
    grid-template-columns: repeat(3, 200px);
    width:700px;
  }

  @media (max-width:900px){
    grid-template-columns: repeat(1, 200px);
    margin:40px auto 0 auto 170px;
    width:250px;
  }
`

export const ContainerSkeleton = styled.div`
display:grid;
  width:938px;
  margin:0 auto;
  row-gap:32px;
  column-gap:20px;
  margin-top:116px;
  margin-bottom:170px;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

  @media (max-width:1100px){
    row-gap:40px;
    column-gap:40px;
    margin:40px auto 0 auto 170px;
    grid-template-columns: repeat(3, 200px);
    width:700px;
  }

  @media (max-width:900px){
    grid-template-columns: repeat(1, 220px);
    margin:40px auto 0 auto 170px;
    width:300px;
  }
`
