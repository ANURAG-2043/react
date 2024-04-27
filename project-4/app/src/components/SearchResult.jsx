import React from 'react'
import styled from 'styled-components';

const SearchResult = ({data:foods}) => {
  
    <FoodCardsContainer>
    <FoodCards>
        {foods?.map((food)=><FoodCard key={food.name}>{food.text}</FoodCard>)}
    </FoodCards>
  </FoodCardsContainer>
  
}

export default SearchResult
const FoodCardsContainer = styled.section`
  height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const FoodCards = styled.div`
  
`;

const FoodCard = styled.div`
    
`;