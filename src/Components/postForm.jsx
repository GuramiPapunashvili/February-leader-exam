import { useState } from "react";

const PostForm = ({user,posts,setPosts}) => {
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const [isPrivate,setIsPrivate] = useState(false)

    const addPost = (e) => {
        e.preventDefault()

        const newPost = {title,body,isPrivate,userId : user.username}
        setPosts([...posts,newPost])
        localStorage.setItem('posts', JSON.stringify([...posts,newPost]))
        setTitle('')
        setBody('')
        setIsPrivate(false)
        console.log(posts)
    }

    return (
        <div>
            <h2>Add a post</h2>
            <form onSubmit={addPost}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
                <input type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="info"/>
                <label>
                    make the post private?
                    <input type="checkbox" checked={isPrivate} onChange={() => setIsPrivate(!isPrivate)}/>
                </label>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default PostForm;