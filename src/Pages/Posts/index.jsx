import React, {useEffect, useState} from 'react';
import Post from '../../Components/Post';
import { ParentElement } from './PostsElement';
import { useParams } from "react-router-dom";

const Posts =(props)=> {
 const [state, setState] = useState(useParams().name);
          useEffect(  ()  => {
  
            props.setPosts(state)

            
        },[]);
        return (<>
            <h2 style={{textAlign:'center'}}> مکان مورد نظر خود را انتخاب کنید </h2>
            <ParentElement>
            
            {props.posts? props.posts.map(post=>{

return(
                <Post post ={post} />

                
                )
            } ):null}

            </ParentElement>
            </> 
         );
    }
 
export default Posts;