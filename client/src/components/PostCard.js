import React from 'react';
import { Card, Icon, Label, Image } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

function PostCard({ post: { id, body, createdAt, username, likeCount, commentCount, likes } }) {
    return (
        <Card  fluid>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
          />
          <Card.Header>{username}</Card.Header>
          <Card.Meta as={Link} to={`/posts/${id}`}>{moment(createdAt).fromNow()}</Card.Meta>
          <Card.Description>{body}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <p>buttons here</p>
        </Card.Content>
      </Card>
    )
}

export default PostCard
