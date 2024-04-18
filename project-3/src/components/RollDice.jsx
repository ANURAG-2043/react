import React from 'react'
import styled from 'styled-components';

const RollDice = ({rollDice, currentDice}) => {



  return (
    <DiceContainer>
      <div className='Dice' onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png `} alt=''/>
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
