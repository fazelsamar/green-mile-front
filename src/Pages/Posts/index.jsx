import React, { Component } from 'react';
import Post from '../../Components/Post';
import { ParentElement } from './PostsElement';


class Posts extends Component {
    
    render() { 
        return (<>
            <h2 style={{textAlign:'center'}}> مکان مورد نظر خود را انتخاب کنید </h2>
            <ParentElement>

            {this.props.posts.map(post=>{

return(
                <Post post ={post} />

                
                )
            })}

            </ParentElement>
            </> 
         );
    }
}
 
export default Posts;