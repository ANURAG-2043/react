import React,{useState} from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import styled from 'styled-components';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] =useState(3);


const generateRandomNumber = (min, max) =>{
  //console.log(Math.floor(Math.random()*(max-min)+min));
  return Math.floor(Math.random()*(max-min)+min);
}

const rollDice = () =>{
  const randomNumber = generateRandomNumber(1,7);
  setCurrentDice((prev) => randomNumber);
}

//if(selectedNumber == randomNumber){
//   setScore ((prev) => prev + randomNumber);
// }else {
//   setScore ((prev)=> prev -2);
//}


  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score} />
            <NumberSelector 
            selectedNumber={selectedNumber} 
            setSelectedNumber={setSelectedNumber} 
            />
        </div>
        <RollDice 
        rollDice={rollDice}
        currentDice={currentDice}
        />
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main `
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`