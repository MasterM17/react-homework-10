import React from 'react';

export const PostsComponent = ({ posts, error }) => {

    return (
        <div id='posts-component'>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Author</th>
                        <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => {
                        return (
                            <tr key={post.id}>
                                <td>{post.id}</td>
                                <td>{post.author}</td>
                                <td>{post.post}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {error && <h3>{error}</h3>}
        </div>
    )
}