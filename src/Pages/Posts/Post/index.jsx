import React, { Component } from "react";
import {
  AddCommnet,
  Commnet,
  CommnetProfileDiv,
  CommnetProfileImg,
  Commnets,
  CommnetUser,
  DivInfoPlace,
  DivInfoPlaceItem,
  DivInfoPlaceItemQ,
  DivInfoPlaceItemR,
  DivLikeAndImage,
  DivMap,
  DivWelfare,
  DivWelfareItem,
  DivWelfareItemImg,
  DivWelfareItemTitle,
  FromCommetDiv,
  FromCommetdivSubmit,
  FromCommetInput,
  FromCommetSubmit,
  ImagePost,
  ImagePostDiv,
  InfoDiv,
  LikeBtn,
  LikeBtnParent,
  LineInfo,
  MapElement,
  ParentPost,
  TextCommnet,
  UserName,
} from "./PostElement";
import Image from "./../../../images/189967449-talab-ir.jpg";
import { AiOutlineHeart } from "react-icons/ai";

class Post extends Component {
  state = {};
  render() {
    const { post } = this.props;
    return (
      <ParentPost>
        <DivLikeAndImage>
          <ImagePostDiv>
            <ImagePost src={Image} />
          </ImagePostDiv>
          <LikeBtnParent>
            <LikeBtn>
              <span>{post.like}</span>
              <AiOutlineHeart />
            </LikeBtn>
          </LikeBtnParent>
        </DivLikeAndImage>

        <LineInfo>
          <InfoDiv> اطلاعات : </InfoDiv>
        </LineInfo>

        <DivInfoPlace>
          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ>استراحت گاه :</DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>
              {post.sleep ? "دارد" : "ندارد"}
            </DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ>استان:</DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.state}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ> ادرس : </DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.addres}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ> نوع منطقه : </DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.typeOfArea}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>
        </DivInfoPlace>
        <LineInfo>
          <InfoDiv> مکان : </InfoDiv>
        </LineInfo>
        <DivMap>
          <MapElement>Map</MapElement>
        </DivMap>

        <LineInfo>
          <InfoDiv> امکانات رفاهی : </InfoDiv>
        </LineInfo>
        <DivWelfare>
          {post.welfareAmenities.map((welfare) => {
            return (
              <DivWelfareItem>
                <DivWelfareItemImg>{welfare.name}</DivWelfareItemImg>
                <DivWelfareItemTitle>{welfare.name}</DivWelfareItemTitle>
              </DivWelfareItem>
            );
          })}
        </DivWelfare>
        <LineInfo>
          <InfoDiv> نظرات : </InfoDiv>
        </LineInfo>
        <Commnets>
          {post.commnets.map((commnet) => {
            return (
              <Commnet>
                <CommnetProfileDiv>
                  <CommnetProfileImg src={Image} />
                </CommnetProfileDiv>
                <CommnetUser>
                  <UserName>
                    {commnet.user} :
                  </UserName>
                  <TextCommnet>
                    {commnet.commnet}
                  </TextCommnet>
                </CommnetUser>
              </Commnet>
            );
          })}
        </Commnets>
        <AddCommnet>
        <div>
          <label> ثبت نظر : </label>
        </div>
        <FromCommetDiv>

        <FromCommetInput></FromCommetInput>
        <FromCommetdivSubmit>
        <FromCommetSubmit type='submit' value='ثبت' / >
        </FromCommetdivSubmit>
        </FromCommetDiv>
        </AddCommnet>

      </ParentPost>
    );
  }
}

export default Post;
