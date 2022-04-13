import React, { Component, useEffect, useState } from "react";
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
  ImgWelf,
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
import ShowMap from "../../../Components/ShowMap";
import { useParams } from "react-router-dom";
const url = 'http://127.0.0.1:8000'

const Post= (props)=> {
    const [post, setPost] = useState({});
    const [state, setstate] = useState(useParams());
    const [valueCommnet, setValueCommnet] = useState('');
    const [locition, setLocition] = useState();
    
    
    
    const sevalueCommnet=(e)=>{
      setValueCommnet(e.target.value)
    }
    useEffect(() => {
      console.log('first')
      const setPosta = async () => {
        let goPost;
        await fetch(`${process.env.REACT_APP_URL_API}/v1/posts/?province__title=${state.state}`).then(resp => {
            return resp.json()
        }).then(resps => {
            console.log(resps);
            console.log(state.id)
            console.log(resps)
            goPost = resps.filter(item => {
                return item.id === Number(state.id)
            })
            console.log(goPost);
            const getlocition = goPost[0].location.split(',')
            console.log(getlocition)
            setLocition(getlocition)
            setPost(goPost[0])
        })
    }
    setPosta()
    }, []);
    const formHandel = (e)=>{
      let commnet = {}
      commnet.body = valueCommnet
      commnet.full_name=localStorage.getItem('first_name') + '' + localStorage.getItem('first_name')  
      commnet.profile_pic =  localStorage.getItem('profile_pic')
      let copyPost = post
      copyPost.comments.push(commnet)
      setPost(copyPost)
      e.preventDefault()
      let newForm=  new FormData()
      newForm.append('body',valueCommnet)
      
      fetch(`${process.env.REACT_APP_URL_API}/v1/post/${post.id}/new-comment/`,{
        method:'post',
        headers:{
          Authorization: `Token ${localStorage.getItem('token')}`
        },
        body:newForm
      }).then(resp=>{
        console.log(resp)
      })
    }
    return (
      <>
      {post ? 
      <ParentPost>
      <DivLikeAndImage>
          <ImagePostDiv>
            <ImagePost src={Image} />
          </ImagePostDiv>
          <LikeBtnParent>
            <LikeBtn>
              <span>{post.likes}</span>
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
              {post.rest_place ? "دارد" : "ندارد"}
            </DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ>استان:</DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.province}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ> ادرس : </DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.postal_address}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>

          <DivInfoPlaceItem>
            <DivInfoPlaceItemQ> نوع منطقه : </DivInfoPlaceItemQ>
            <DivInfoPlaceItemR>{post.location_kind}</DivInfoPlaceItemR>
          </DivInfoPlaceItem>
        </DivInfoPlace>
        <LineInfo>
          <InfoDiv> مکان : </InfoDiv>
        </LineInfo>
        <DivMap>
        {locition ? 
          <MapElement><ShowMap loc ={locition} /></MapElement>
          :null}
          </DivMap>

        <LineInfo>
          <InfoDiv> امکانات رفاهی : </InfoDiv>
        </LineInfo>
        <DivWelfare>
          {post.welfare_places? post.welfare_places.map((welfare) => {
            return (
              <DivWelfareItem>
                <DivWelfareItemTitle><ImgWelf src={welfare.image} /></DivWelfareItemTitle>
              </DivWelfareItem>
            );
          }):null}
        </DivWelfare>
        <LineInfo>
          <InfoDiv> نظرات : </InfoDiv>
        </LineInfo>
        <Commnets>
           {post.comments?post.comments.map((commnet) => {
            return (
              <Commnet>
                <CommnetProfileDiv>
                  <CommnetProfileImg src={`${url}${commnet.profile_pic}`} />
                </CommnetProfileDiv>
                <CommnetUser>
                  <UserName>
                    {commnet.full_name} :
                  </UserName>
                  <TextCommnet>
                    {commnet.body}
                  </TextCommnet>
                </CommnetUser>
              </Commnet>
            );
          }):null}
        </Commnets>
        <AddCommnet>
        <div>
          <label> ثبت نظر : </label>
        </div>
        <FromCommetDiv onSubmit={formHandel}>

        <FromCommetInput value={valueCommnet} name ='valueCommnet' onChange={sevalueCommnet}>  </FromCommetInput>
        <FromCommetdivSubmit>
        <FromCommetSubmit type='submit' value='ثبت' / >
        </FromCommetdivSubmit>
        </FromCommetDiv>
        </AddCommnet>
        </ParentPost>
        : null }
        </>
    );
}

export default Post;
