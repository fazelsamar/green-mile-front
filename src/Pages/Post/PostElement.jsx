import styled from "styled-components";

export const ParentPost = styled.div`
  max-width: 900px;
  margin: auto;
  width: 100%;
`;

export const ImagePostDiv = styled.div`
  width: 100%;
  max-height: 300px;
  position: relative;
  height: 300px;
`;
export const ImagePost = styled.img`
  width: 100%;
  border-radius: 3px;
  height: 100%;
`;
export const DivLikeAndImage = styled.div`
  margin: auto;
  width: 50%;
`;
export const LikeBtnParent = styled.div`
  width: 70px;
  height: 30px;
  margin-top: 10px;
  cursor: pointer;
`;

export const LikeBtn = styled.button`
  background-color: #ff5050;
  outline: 0;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  vertical-align: middle;
  border: 0;
  font-size: 10px;
  width: 100%;

  height: 100%;
  border-radius: 3px;
`;

export const LineInfo = styled.div`
  margin-top: 50px;

  width: 100%;
  background-color: #acaaaa;
  height: 1px;
  display: flex;
  align-items: center;
`;
export const InfoDiv = styled.span`
  background-color: #fff;
  font-size: 15px;
  padding: 0 20px;
  margin-right: 20px;
`;
export const DivInfoPlace = styled.div`
  width: 100%;
  padding: 50px 20px;
`;
export const DivInfoPlaceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
  align-items: center;
  border-bottom: 1px solid #96919168;
  width: 50%;
  margin: auto;
`;

export const DivInfoPlaceItemQ = styled.span`
  color: #000;
  font-weight: bold;
  font-size: 13px;
  padding: 3px;
`;

export const DivInfoPlaceItemR = styled.span`
  color: gray;
  font-size: 13px;
  font-weight: lighter;
  padding: 3px;
`;

export const DivWelfare = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px 20px;
`;

export const DivWelfareItem = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const DivWelfareItemImg = styled.div`
  width: 100%;
  display: flex;
  background-color: gray;
  height: 100px;
  color: #fff;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
`;
export const DivWelfareItemTitle = styled.p`
  font-weight: bold;
`;

// map
export const DivMap = styled.div`
  display: felx;
  justify-content: center;
  margin: auto;
  width: 50%;
  height: 300px;
  align-items: center;
  padding: 50px 20px;
`;
export const MapElement = styled.div`
  background-color: gray;
  display: flex;
  align-items: center;
  border-radius: 3px;
  justify-content: center;
  width: 100%;
  height: 100%;
`;


export const Commnets = styled.div`
  padding: 50px 20px;
  
  width: 100%;
  


`
export const Commnet = styled.div`
  margin: 30px ;
  width: 30%;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
`

export const CommnetProfileDiv = styled.div`
  width: 40px;
  height: 40px;
  padding: 20px 0;
`
export const CommnetProfileImg = styled.img`
  width: 100%;
  border-radius: 20px;
  
  height: 100%;

`

export const CommnetUser = styled.div`
padding:0 20px;
`

export const UserName = styled.p`
  font-weight: 100;

`
export const TextCommnet = styled.p`

  color: #989393;
  padding: 0 5px;
  font-size: 15px;
` 
