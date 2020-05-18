import styled from "styled-components";
export const Card = styled.div`
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  grid-gap: 6px 0;
  background: #fff;
  box-shadow: rgba(2, 8, 20, 0.1) 0px 0.175em 0.5em,
    rgba(2, 8, 20, 0.08) 0px 0.085em;
`;
export const Grid = styled.div`
  display: grid;
`;
export const Rows = styled.ul`
  grid-gap: 30px 60px;
  font-family: "Poppins", sans-serif;
  font-size: 13px;
  font-weight: 500;
  li {
    margin-bottom: 10px;
    color: #585858;
  }
`;
export const Name = styled.p`
  grid-template-columns: repeat(3, 1fr);
  font-family: "Poppins", sans-serif;
  justify-self: center;
  font-size: 16px;
  font-weight: 500;
`;

export const Total = styled.div`
  font-size: 12px;
  color: #aaaaaa;
`;

export const General = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-rows: repeat(2, 1fr);
  justify-content: left;
`;
export const Icon = styled.span`
  justify-content: flex-end;
  display: flex;
  cursor: pointer;
  color: #898989;
  & svg {
    width: 20px;
    height: 20px;
  }
`;
export const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  grid-template-rows: 1fr;
  align-items: center;
`;
export const Pais = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: left;
  width: 190px;
  grid-template-columns: 36px 130px;
  grid-column-gap: 10px;
`;
/* Data */
export const Filtros = styled.li`
  font-weight: 500;
  margin-bottom: 10px;
  font-size: 13px;
  color: #000 !important;
`;
export const Data = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 33px;
`;

export const Separation = styled.hr`
  border-top: 1px solid #f2f2f2;
  width: 100%;
`;
