import {Link} from "react-router-dom";
import styled from "styled-components";
export const DivPar = styled.div`
  max-width: 900;
  margin: 15px auto;
  

`





export const DivStates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 350px;
`;

export const StatesPr = styled.div`
  background-color: #02ab8a;
  padding: 4px 6px;
  border-radius: 3px;
  font-weight: 600;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 33.33333%;
  width: 115px;
  border: 1px solid #02ab8a;

  box-sizing: border-box;
  margin: 35px;
  height: 35px;
  transition: all 0.2s ease;
  &:hover {
    color: #02ab8a;
    background-color: #fff;
  }
`;
