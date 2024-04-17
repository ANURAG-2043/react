import React, {useState} from 'react'
import styled from 'styled-components';

const RollDice = () => {

const [currentDice, setCurrentDice] =useState();

const generateRandomNumber = (min, max) =>{
  // console.log(Math.floor(Math.random()*(max-min)+min));
  return Math.floor(Math.random()*(max-min)+min);
}


  return (
    <DiceContainer>
      <div className='Dice' onClick={()=>generateRandomNumber(1,7)}>
        <img src='/images/dice_1.png' alt=''/>
      </div>
      <p>click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 48px;
  align-items: center;

  p{
    font-size: 24px;
  }
  .Dice{
    cursor: pointer;
  }
`;
