import React from "react";
import { Card, Dimmer, Segment, Image } from "semantic-ui-react";
import PostCard from "../PostCard/PostCard";
import Loader from '../Loader/Loader'

export default function PostGroupList({
  groups,
  numPhotosCol,
  user,
  loading
}) {

 


  return (

    <Card.Group itemsPerRow={numPhotosCol} stackable>
    {loading ? (
      <Segment>
        <Dimmer active inverted>
          <Loader size="small">Loading</Loader>
        </Dimmer>
        <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
      </Segment>
    ) : null}
    {groups.map((group) => {
      return (
        <PostCard
          group={group}
          key={group._id}
          user={user}
        />
      );
    })}
  </Card.Group>




 
  );
}