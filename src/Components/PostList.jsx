const PostList = ({posts}) => {
    return (
        <div>
            {
                posts ? (
                    posts.map((post,index) => (
                        <div key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <h3>{post.isPrivate ? 'Private' : 'Public'}</h3>
                        </div>
                    ))
                ) : (
                    <p>No posts</p>
                )
            }
        </div>
    )
}

export default PostList