import { useState, useEffect } from "react";
import Register from "./Register";
import Login from "./Login";
import PostForm from "./postForm";
import PostList from "./PostList";

const SocialMedia = () =>{
    const [user,setUser] = useState(null)
    const [posts,setPosts] = useState([])
    const [auth,setAuth] = useState(false)

    useEffect(() =>{
        const storedUser = localStorage.getItem('user');
        if(storedUser) {
            setUser(JSON.parse(storedUser))
            setAuth(true)
        }
        const storedPosts = JSON.parse(localStorage.getItem('posts'));
        setPosts(storedPosts || [])
    },[])

    const handleLogout = () => {
        setUser(null);
        setAuth(false)
        localStorage.removeItem('user')
    };

    return (
        <div>
            <h1>GOABook</h1>
            {
                !auth ? (
                    <div>
                        <Register/>
                        <Login setUser={setUser} setAuth={setAuth}/>
                    </div>
                ) : (
                    <div>
                        <PostForm user={user} posts={posts} setPosts={setPosts} />
                        <PostList posts={posts}/>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )
            }
        </div>
    )
}

export default SocialMedia;