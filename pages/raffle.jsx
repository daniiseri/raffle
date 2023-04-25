import styled from 'styled-components';
import data from '../src/repositories';
import { useContext, useEffect, useState } from 'react';
import { upperCaseFirstLetter } from '../src/utils';
import { List } from '../src/components/List';
import { OpenContext } from '../src/context/Open';

const RafflePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;

  img{
    max-width: 240px;
    height: 240px;
  }

  button{
    padding: 4px;
    cursor: pointer;
  }
`;

export default function RafflePage() {
  const [raffle, setRaffle] = useState({});
  const [listRaffle, setListRafle] = useState([]);
  const {open, setOpen} = useContext(OpenContext);

  useEffect(()=>{
    setOpen(false);
  },[])

  useEffect(()=>{
    raffle?.food && setListRafle([...listRaffle , raffle]);
  },[raffle])

  function findLetter(){
    const index = Math.floor(Math.random() * data.letters.length);
    return data.letters[index];
  }

  function findFood(){
    const index = Math.floor(Math.random() * data.foods.length);
    return data.foods[index];
  }

  return (
    <RafflePageStyle>    
      {
        raffle.food
        && (
          <>
            <h1>{raffle.letter}</h1>
            <img src={raffle.food.url} />
            <small>{upperCaseFirstLetter(raffle.food.name)}</small>
          </>
        )
      }
      <button onClick={()=>{
        const letter = findLetter();
        const food = findFood();

        setRaffle({letter, food});
      }}>Sortear</button>

      {
        open
        &&
          <List listRaffle={listRaffle}/>
      }
    </RafflePageStyle>
  )
}