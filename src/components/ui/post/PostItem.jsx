import React from "react";

const PostItem = (props) => {
  return (
    <div className='posts'>
      <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}</strong>
          <div>{props.post.title}</div>
          <div>{props.post.body}</div>
          <div className='post__btns'>
            <button>Удалить</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
