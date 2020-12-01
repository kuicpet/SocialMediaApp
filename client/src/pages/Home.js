import React, { useContext } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { Grid } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";
import { FETCH_POSTS_QUERY } from "../utils/graphql";

function Home() {

    const { user } = useContext(AuthContext);
    const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY)
    return (
        <Grid columns={3}>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                { user && (
                    <Grid.Column>
                        <PostForm/>
                    </Grid.Column>
                )}
                { loading ? (
                    <h3>Loading posts...</h3>
                ): (
                    posts && posts.map(post => (
                        <Grid.Column key={post.id}>
                            <PostCard post={post}/>
                        </Grid.Column>
                    ))
                )}
            </Grid.Row>
        </Grid>
    );
}



export default Home;
