import styled from "styled-components";

export const MenuItem = styled.a`
  height: 22px;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  transition: background var(--speed);
  padding: 0.5rem 0;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const IconButton = styled.a`
  margin-left: 10px;
  padding: 100px;
  padding: 7px;
  border-radius: 50%;
  &:hover {
    background-color: #f0f0f0;
  }
  & svg {
    vertical-align: middle;
    width: 20px;
    height: 20px;
  }
`;
