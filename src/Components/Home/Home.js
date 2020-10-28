import React, {useState, useEffect} from 'react';
import Post from '../Post/Post'

function Home() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])

    return (
       
        <div className="posts-container">
            {
                posts.map(post => <Post key={post.id} {...post} />)
            }
        </div>
    
    );
}

export default Home;