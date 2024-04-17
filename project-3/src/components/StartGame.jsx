import React from 'react'
import styled from 'styled-components';

const StartGame = ({toggle}) => {
  return (
    <Container>
        <img src='/images/dices 1.png' alt='dices_home'/>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;


.content {
    h1{
        font-size:96px;
        white-space: nowrap;
    }
}
`;
const Button = styled.button`
    color: white;
    padding: 10px 18px;
    background-color: black;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.3s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        color: black;
        border: 1px solid black;
        transition: 0.3s background ease-in;
        cursor: pointer;
    }

`
