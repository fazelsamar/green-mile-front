import React, { Component } from 'react'
import { DivItemInfo, DivPostImg, ItemQ, ItemR, LinkPostDiv, LinkPost, ParentDivPost, PostImg, PostInfo, PostInfoMore, PostTitle } from './PostElement';
import img from './../../images/189967449-talab-ir.jpg'



class Post extends Component {

    render() {
        const { post } = this.props
        return (
            <ParentDivPost>
                <DivPostImg>
                    <PostImg src={img} />
                </DivPostImg>
                <PostInfo>
                    <PostTitle>
                        {post.title}
                    </PostTitle>

                    <PostInfoMore>
                        <DivItemInfo>
                            <ItemQ> ادرس  : </ItemQ>
                            <ItemR>  {post.addres} </ItemR>
                        </DivItemInfo>
                        <DivItemInfo>
                            <ItemQ> نوع منطقه :  </ItemQ>
                            <ItemR>  {post.typeOfArea} </ItemR>
                        </DivItemInfo>
                        <DivItemInfo>
                            <ItemQ> استان:  </ItemQ>
                            <ItemR>  {post.state} </ItemR>
                        </DivItemInfo>
                        <LinkPostDiv > <LinkPost to='/post' > بیشتر </LinkPost></LinkPostDiv>
                    </PostInfoMore>
                </PostInfo>

            </ParentDivPost>
        );
    }
}

export default Post;