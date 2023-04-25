import Link from "next/link";
import { useContext } from "react";
import styled from "styled-components";
import { OpenContext } from "../context/Open";

const HeaderStyle = styled.header`
  a{
    color: black;
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
`;

export function Header() {
  const { setOpen } = useContext(OpenContext);

  return (
    <HeaderStyle>
      <nav>
        <Link href='/raffle'>Sorteio</Link>
        <button onClick={()=>setOpen(true)}>Relatório</button>
      </nav>
    </HeaderStyle>
  )
}