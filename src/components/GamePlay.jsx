import { styled } from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from './RoleDice'
import { useState } from "react"
import { Button, OutlineBtn } from "../styled/Button"
import Rules from "./Rules"

function GamePlay() {

  const [score,setScore]=useState(0);

  const [selectedNum,setSelectedNum]=useState();
  const [currDice,setCurrDice]=useState(1);
  const [error, setError]=useState('');
  const [showRules,setShowRules]=useState(false);

  const generateRandomNum=(min,max)=>{
    // console.log(Math.floor(Math.random()*(max-min)+min));
    return Math.floor(Math.random()*(max-min)+min);
  };

  const roleDice=()=>{
    if(!selectedNum){
      setError("You have not selected any number");
      return;
    }
    const randomNum=generateRandomNum(1,7);
    setCurrDice((prev)=>randomNum);

    if(selectedNum===randomNum){
      setScore(prev=> prev+randomNum);
    }
    else{
      setScore(prev=>prev-2);
    }
    setSelectedNum(undefined);
  }

  const  resetScore=()=>{
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="topSection">
        <TotalScore score={score}/>
        <NumberSelector
         setError={setError} 
         error={error} 
         selectedNum={selectedNum}
          setSelectedNum={setSelectedNum}
        />
      </div>
      <RoleDice currDice={currDice}
      roleDice={roleDice}
      ></RoleDice>

      <div className="buttons">
        <OutlineBtn onClick={resetScore}>Reset</OutlineBtn>
        <Button
        onClick={()=>setShowRules(prev=>!prev)}
        >{showRules ? "Hide": "Show"} Rules</Button>
      </div>

      {showRules && <Rules/>}
    </MainContainer> 
  ) 
}

export default GamePlay

const MainContainer=styled.main`
.topSection{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons{
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
`;