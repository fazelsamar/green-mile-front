import React, { Component } from 'react'
import { DivItemInfo, DivPostImg, ItemQ, ItemR, LinkPostDiv, LinkPost, ParentDivPost, PostImg, PostInfo, PostInfoMore, PostTitle } from './PostElement';
const url = 'http://127.0.0.1:8000'



class Post extends Component {

    render() {
        const { post } = this.props
        return (
            <ParentDivPost>
                <DivPostImg>
                    <PostImg src={`${url}${localStorage.getItem("profile_pic")}`} />
                </DivPostImg>
                <PostInfo>
                    <PostTitle>
                        {post.title}
                    </PostTitle>

                    <PostInfoMore>

                        <DivItemInfo>
                            <ItemQ> نوع منطقه :  </ItemQ>
                            <ItemR>  {post.location_kind} </ItemR>
                        </DivItemInfo>
                        <DivItemInfo>
                            <ItemQ> استان:  </ItemQ>
                            <ItemR>  {post.province} </ItemR>
                        </DivItemInfo>
                        <LinkPostDiv > <LinkPost postInfo={post} to={`/post/${post.province}/${post.id}`} > بیشتر </LinkPost></LinkPostDiv>
                    </PostInfoMore>
                </PostInfo>

            </ParentDivPost>
        );
    }
}

export default Post;