import styled from 'styled-components';
import data from '../src/repositories';
import { useContext, useEffect, useState } from 'react';
import { upperCaseFirstLetter } from '../src/utils';
import { List } from '../src/components/List';
import { OpenContext } from '../src/context/Open';
import { useCount } from '../src/hooks/useCount';

const RafflePageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 48px;

  img{
    max-width: 240px;
    height: 240px;
  }

  button{
    padding: 16px;
    cursor: pointer;
    border-radius: 50%;
    font-size: 24px;
  }

  h1{
    font-size: 84px;
  }
`;

export default function RafflePage() {
  const [raffle, setRaffle] = useState({});
  const [listRaffle, setListRafle] = useState([]);
  const { count, increment } = useCount();
  const { open, setOpen } = useContext(OpenContext);

  useEffect(() => {
    setOpen(false);
  }, [])

  useEffect(() => {
    raffle?.food && setListRafle([...listRaffle, raffle]);
  }, [raffle])

  function findLetter() {
    const index = Math.floor(Math.random() * data.letters.length);
    return data.letters[index];
  }

  function checkLetter() {
    if (count > 0 && count <= 20) {
      let letter;

      do {
        letter = findLetter();
      } while (listRaffle[listRaffle.length - 1].letter === letter)

      return letter;

    } else if (count > 20 && count <= 30) {
      let letter;

      do {
        letter = findLetter();
      } while (listRaffle[listRaffle.length - 2].letter === letter)

      return letter;

    } else return findLetter();


  }

  function findFood() {
    const index = Math.floor(Math.random() * data.foods.length);
    return data.foods[index];
  }

  function checkList(letter, food) {
    return listRaffle.filter(item => item.letter === letter && item.food === food);
  }

  function run() {
    let letter;
    let food;

    do {
      letter = checkLetter();
      food = findFood();
    } while (checkList(letter, food).length > 0)

    return { letter, food };
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
      <button onClick={() => {
        setRaffle(run());
        increment();
      }}>Sortear</button>

      {
        open
        &&
        <List listRaffle={listRaffle} />
      }
      <Carousel/>
    </RafflePageStyle>
  )
}

const CarouselStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @keyframes scroll {
    0% {transform: translateX(0)}
    100% {transform: translateX(-2500px)}
  }

  div{
    display: flex;
    animation: scroll 10s linear infinite;
  }

  img{
    width: 80px;
    height: 80px;
  }

  @media (max-width: 600px) {
    width: 100%;
    overflow: hidden;
  }
`;

function Carousel(){
  return (
    <CarouselStyle>
      <div>
        {
          data.foods.map(item => {
             return <img src={item.url} alt='imagem'/>
          })
        }
      </div>
    </CarouselStyle>
  )
}