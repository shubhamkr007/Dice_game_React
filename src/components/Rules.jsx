import { Styled, styled } from "styled-components"


const Rules = () => {
  return (
    <RulesCotainer>
        <h2>How to Play Dice Game</h2>
        <p>Select any number <br />
            Click on dice image <br />
            After that Click on Dice. If selected number is equal to dice number you will set same points as dice if you get wrong guess then 2 points will be dedcuted. </p>
    </RulesCotainer>
  )
}

export default Rules

const RulesCotainer=styled.div`
border-radius: 10px;

background: #fbf1f1;
padding: 20px;
max-width: 800px;
margin: 0 auto;
margin-top: 20px;
h2{
    font-size: 24px;
}
p{
    font-size: 24px;
    margin-top: 24px ;
}
`;