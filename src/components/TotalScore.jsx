import styled from 'styled-components'


const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
        <h1>{score}</h1>
        <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer=styled.div`
max-width: 200px;
text-align: center;
padding: 30px;
h1{
    font-size: 100px;
    margin: 0 auto;
    line-height: 100px;
}
p{
    font-size: 24px;
    font-weight: 500;
    margin: 0 auto;
}
`;