import { styled } from "styled-components";

export const Button =styled.button`
width: 220px;
padding: 10px 18px;
width: 220px;
border-radius: 5px;
background: #000; 
border: none;
color: white;
font-size: 16px;
border: 1px solid transparent;
transition: 0.3s background ease-in ;
cursor: pointer;

&:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in ;
}

`;

export const OutlineBtn =styled(Button)`
  background-color: #fff;
  color: black;
  border-color: black;
  &:hover{
    background-color: gray;
    border: 1px solid transparent;
    color: white;
}
`;