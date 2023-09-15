import { useState } from "react"
import styled  from "styled-components"

const RoleDice = ({roleDice,currDice}) => {

  return (
    <DiceContainer>
      <div className="dice"
      onClick={roleDice}>
        <img src={`/images/dice_${currDice}.png`} alt="dice" />
        <p>Click on the Dice to roll</p>
      </div>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer=styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

p{
  font-size: 24px;
}
.dice{
  cursor: pointer;
}
`;