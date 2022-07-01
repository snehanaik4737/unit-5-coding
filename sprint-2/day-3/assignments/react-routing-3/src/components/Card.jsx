import styled from "styled-components";

export const GridBox = styled.div`
  
  ${'' /* border: 1px solid red; */}
  margin: auto auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5%;
 
  padding: 2%;
`;

export const Card = styled.div`
  display: grid;
  height:400px;
  /* grid-template-rows: 250px 100px; */
  text-align: center;
   ${'' /* background-color: rgba(235, 124, 124, 0.658); 
  border-radius: 5%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */}
  /* @div{width:100%,height:100%} 
  @div img{
    height:100%;
  } */
  border: 1px solid green;
`;