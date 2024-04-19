import React,{useState} from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RollDice from './RollDice';
import styled from 'styled-components';
import { OutlineButton, Button } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] =useState(3);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false);

const generateRandomNumber = (min, max) =>{
  //console.log(Math.floor(Math.random()*(max-min)+min));
  return Math.floor(Math.random()*(max-min)+min);
}

const rollDice = () =>{

  //guard clause
  if(!selectedNumber) {
    setError("You have not selected any value");
    return
  };

  const randomNumber = generateRandomNumber(1,7);
  setCurrentDice((prev) => randomNumber);

  if (selectedNumber == randomNumber){
    setScore((prev) => prev + randomNumber)
  }else{
  setScore((prev) => prev -2);
  }
  setSelectedNumber(undefined);
};

  const reset = () =>{
    setScore(0);
  }

  const show_Rules = () =>{
    setShowRules((prev)=> !prev);
  }

  return (
    <MainContainer>
        <div className="top_section">
            <TotalScore score={score} />
            <NumberSelector 
            error = {error}
            setError = {setError}
            selectedNumber={selectedNumber} 
            setSelectedNumber={setSelectedNumber} 
            />
        </div>
        <RollDice 
        rollDice={rollDice}
        currentDice={currentDice}
        />
        <div className='btns'>
          <OutlineButton onClick={reset}>Reset</OutlineButton>
          <Button onClick={show_Rules}>{showRules? "Hide": "Show"} Show Rules</Button>
        </div>

        {showRules && <Rules />}
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
    };
    .btns{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-top: 40px;
      

    }
`