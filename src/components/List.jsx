import styled from "styled-components";
import { upperCaseFirstLetter } from "../utils";
import { useContext } from "react";
import { OpenContext } from "../context/Open";

const ListStyle = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, .5);
  z-index: 1;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  vertical-align: middle;
  
  table{
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    margin: auto;
    background-color: inherit;
    background-color: white;
    padding: 8px;
    max-width: 400px;
    gap: 16px;
  }

  tbody{
    display: flex;
    overflow: auto;
  }

  tr{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  td{
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img{
    width: 40px;
    height: 40px;
  }

  button{
    position: absolute;
    top: 16px;
    right: 16px;
  }

  .alert{
    color: white;  
  }

  @media (max-width: 600px){
    table{
      width: 100%;
    }
  }
`;

export function List({ listRaffle }) {
  const { setOpen } = useContext(OpenContext);

  return (
    <ListStyle>
      <button onClick={() => setOpen(false)}>X</button>
      {
        listRaffle.length > 0
        ? (<>
          <table>
            <thead>
              <tr>
                <th colSpan={2}><h1>Relatório do sorteio</h1></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Letra</td>
                <td>Alimento</td>
              </tr>
              {
                listRaffle.map((raffle, index) => {
                  return (
                    <tr key={index}>
                      <td>{raffle.letter}</td>
                      <td>
                        <img src={raffle.food.url} />
                        <small>{upperCaseFirstLetter(raffle.food.name)}</small>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </>)
        :
          <h1 className="alert">Não ocorreu nenhum sorteio!</h1>
      }

    </ListStyle>
  )
}