import React from 'react'
import styled from 'styled-components';

const TotalScore = () => {
  return (
   <ScoreContainer>
    <h1>0</h1>
    <p>Total Score</p>
   </ScoreContainer>
  );
};

export default TotalScore

const ScoreContainer =styled.div`
    max-width: 150px;
    max-height: 151px;
    text-align: center;
    padding-bottom: 25px;

    h1{
        font-size: 100px;
        line-height: 100px;
        margin: 0;
    };
    p{  margin: 0;
        font-size: 24px;
        font-weight: 700;
    }
`