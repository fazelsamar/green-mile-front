import styled from "styled-components";

export const FormLoginDiv = styled.div`
  width: 40%;
  margin: 50px auto;
  border: 1px solid gray;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 5px 0px grey;
  @media screen and (max-width: 500px){
  width: 70%;
  box-shadow: 0;
  border: 0;


      
  }
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
 
`;

export const InputsType = styled.input`
    outline: 0;
    width: 100%;
    border-radius: 3px;
    height: 33.3333333%;
    border: 1px solid gray;
    margin: 5px 0;
  box-sizing: border-box;
    padding: 4px 8px;

`
export const InputSubmit = styled.input`
    color: #fff;
    background-color: #02AB8A;
    width: 30%;
    outline: 0;
    border: 0;
    border-radius: 3px;
    
    min-height:30px ;
    margin: 5px 0;
    transition: all 0.5s ease;
    &:hover {
    background-color: #fff;
    color: #02AB8A;

    border: 1px solid #02AB8A ;
    }
`