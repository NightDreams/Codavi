import styled from "styled-components";
export const Div = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  box-sizing: border-box;
  height: 450px;
  width: 388px;
  border: solid 1px;
  border-radius: 10px;
  margin: 20px 20px;
  padding: 60px 40px;
`;

export const Rows = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 30px 60px;
  font-family: "Raleway", sans-serif;
  font-size: 19px;
  font-weight: 500;
`;
export const Pais = styled.p`
  grid-template-columns: repeat(3, 1fr);
  font-family: "Raleway", sans-serif;
  justify-self: center;
  font-size: 45px;
  font-weight: 600;
  text-decoration: underline;
`;
export const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
`;
export const Total = styled.div`
  text-decoration: underline;
`;
