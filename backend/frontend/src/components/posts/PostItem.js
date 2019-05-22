import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { connect } from "react-redux";
import { addLike, removeLike } from "../../actions/post";

const PostItem = ({
  addLike,
  removeLike,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date }
}) => (
  <div class="posts">
    <div class="post bg-white p-1 my-1">
      <div>
        <a href="profile.html">
          <img class="round-img" src={avatar} alt="" />
          <h4>{name}</h4>
        </a>
      </div>
      <div>
        <p class="my-1">{text}</p>
        <p class="post-date">
          Posted on <Moment format="YYYY/MM/DD">{date}</Moment>
        </p>
        <button onClick={e => addLike(_id)} type="button" class="btn btn-light">
          <i class="fas fa-thumbs-up" />{" "}
          <span>{likes.length > 0 && <span>{likes.length}</span>}</span>
        </button>
        <button
          onClick={e => removeLike(_id)}
          type="button"
          class="btn btn-light"
        >
          <i class="fas fa-thumbs-down" />
        </button>
        <Link to={`/post/${_id}`} class="btn btn-primary">
          {/* if the post has comments display number of comments */}
          Discussion{" "}
          {comments.length > 0 && (
            <span class="comment-count">{comments.length}</span>
          )}
        </Link>
        {/* display delete button if post's user and logged in user match */}
        {!auth.loading && user === auth.user._id && (
          <button type="button" class="btn btn-danger">
            <i class="fas fa-times" />
          </button>
        )}
      </div>
    </div>
  </div>
);

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

// Bring in auth state so we can tell which posts belong to which user
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLike, removeLike }
)(PostItem);
