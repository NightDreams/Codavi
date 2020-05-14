import styled from "styled-components";
export const Div = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  box-sizing: border-box;
  height: 364px;
  width: 406px;
  border: solid 1px;
  border-radius: 10px;
  margin: 20px 20px;
  padding: 20px 30px;
  grid-gap: 10px 0;
`;

export const Rows = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 30px 60px;
  font-family: "Raleway", sans-serif;
  font-size: 19px;
  font-weight: 500;
`;
export const Name = styled.p`
  grid-template-columns: repeat(3, 1fr);
  font-family: "Raleway", sans-serif;
  justify-self: center;
  font-size: 26px;
  font-weight: 600;
`;
export const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
`; 
export const Total = styled.div`
  font-size: 16px;
  color: #AAAAAA;
`;
export const Flag = styled.div`
  width:50px;
  height:50px;
  background-color: #FFEDED;
  border-radius: 50%;
`;
export const Menu = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  align-items: center;
  border-bottom: 2px solid #DEDEDE;

`;
export const General = styled.div`
  display: grid; 
  grid-template-rows: repeat(2,1fr);
  justify-content: left;
`;
export const Icono = styled.div`
  display: grid; 
  justify-items: right;
`;
export const Pais = styled.div`
  display: grid; 
  grid-template-columns: repeat(2, 1fr);
  justify-items: left;
  width: 190px; 
  grid-template-columns: 50px 130px;
  grid-column-gap: 10px;
`;
export const Filtros = styled.div`
  font-weight:600;
`;