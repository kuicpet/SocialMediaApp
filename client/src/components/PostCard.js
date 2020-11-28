import React from 'react';
import { Card, Icon, Label, Button, Image } from "semantic-ui-react";
import moment from "moment";
import { Link } from "react-router-dom";

function PostCard({ post: { id, body, createdAt, username, likeCount, commentCount, likes } }) {

    function likePost(){
        console.log("Like Post");
    }

    function commentOnPost(){
        console.log("Comment on Post");
    }

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
        <Button as='div' labelPosition='right' onClick={likePost}>
          <Button color='red' basic>
              <Icon name='heart' />
            </Button>
            <Label basic color='red' pointing='left'>
              {likeCount}
            </Label>
          </Button>
          <Button as='div' labelPosition='right' onClick={commentOnPost}>
            <Button basic color='blue'>
              <Icon name='comments' />
            </Button>
            <Label as='a' basic color='blue' pointing='left'>
              {commentCount}
            </Label>
          </Button>
        </Card.Content>
      </Card>
    )
}

export default PostCard
