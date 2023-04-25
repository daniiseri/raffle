import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { OpenContext } from "../context/Open";
import data from '../repositories/index';

const HeaderStyle = styled.header`
  padding: 16px;
  background-image: linear-gradient(to bottom left, white, green);
  height: 80px;
  display: flex;
  align-items: center;

  button, a{
    color: white;
    font-size: 32px;
  }

  nav{
    display: flex;
    gap: 16px;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  margin: 0 auto;
`;

export function Header() {
  const { setOpen } = useContext(OpenContext);

  return (
    <HeaderStyle>
      <nav>
        <Link href='/raffle'>Sorteio</Link>
        <button onClick={() => setOpen(true)}>Relatório</button>
      </nav>
    </HeaderStyle>
  )
}

const BannerStyle = styled.div`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-100px * ${data.foods.length}))}
  }

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
  width: 900px;

  .carousel{
    display: flex;
    animation: scroll calc(2s * ${data.foods.length}) linear infinite;
    border-radius: 5px;
  }

  img{
    display: block;
    width: 100px;
    object-fit: cover;
  }
`;