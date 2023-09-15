import { useState } from "react";
import Styled, { styled }  from "styled-components"

const NumberSelector = ({ setError,error, selectedNum,setSelectedNum}) => {
  const arrNum=[1,2,3,4,5,6];

  const numSelectorHandler=(value)=>{
    setSelectedNum(value);
    setError("");
  }

  // console.log(selectedNum);

  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
      {arrNum.map((value,i)=>(
          <Box 
          isSelected={value===selectedNum}
          onClick={()=>numSelectorHandler(value)}
          key={i}> {value} </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector

const NumberSelectorContainer=styled.div`

display: flex;
flex-direction: column;
align-items: end;
padding: 30px;
.flex{
  display: flex;
  gap: 24px;
}
p{
  font-size: 24px;
  font-weight: 700px;
}
.error{
  color: red;
}

`;

const Box=styled.div`
width: 72px;
height: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
background-color: ${(props)=>(props.isSelected ? 'black' : 'white')};
color: ${(props)=>(props.isSelected ? 'white' : 'black')};
`;