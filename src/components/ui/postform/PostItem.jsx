import React from "react";
import MyButton from "../../ui/button/MyButton";
import { useNavigate } from "react-router-dom";

const PostItem = (props) => {
  const navigate = useNavigate();
  return (
    <div className='posts'>
      <div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}</strong>
          <div>{props.post.title}</div>
          <div>{props.post.body}</div>
          <img src={props.post.image}></img>
          <div className='post__btns'>
            <MyButton onClick={() => props.remove(props.post)}>
              Удалить
            </MyButton>
            <MyButton onClick={() => navigate(`/events/${props.post.id}`)}>
              Открыть
            </MyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
