import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Post from '../../Components/Post';
import { ParentElementPosts } from '../Posts/PostsElement';

const SearchData = (props) => {

    const [value, setvalue] = useState(useParams());
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        let post  ;
        async function fechApi (){
            if(!post){
        await fetch(`${process.env.REACT_APP_URL_API}/v1/posts/?search=${value.value}`).then(resp => resp.json()).then(
            resps => {
                post = resps
            })
            setPosts(post)
        }
    }
        fechApi()

    }, []);
    console.log(posts)
    return (
        <>
        <h2 style={{textAlign:'center'}}> مکان مورد نظر خود را انتخاب کنید </h2>
        <ParentElementPosts >
        {posts? posts.map((post,index)=>{

            return(
                            <Post key={index} post ={post} />
            
                            
                            )
                        } ):null}
    </ParentElementPosts>
    </>
    )

}
export default SearchData