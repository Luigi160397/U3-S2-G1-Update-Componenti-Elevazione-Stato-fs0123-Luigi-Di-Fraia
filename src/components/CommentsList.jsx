import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.comments.map(comment => (
          <SingleComment key={comment._id} author={comment.author} comment={comment.comment} rate={comment.rate} />
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
