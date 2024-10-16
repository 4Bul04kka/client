import React, { useContext } from "react";
import MyButton from "../../ui/button/MyButton";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context";

const PostItem = (props) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const placeholderImage = "https://placehold.co/300x200/png";

  return (
    <div className='posts'>
      <div
        className='post'
        onClick={() => navigate(`/events/${props.post.id}`)}
      >
        <div className='post__content'>
          {/*<strong>{props.post.id}</strong>*/}
          <div className='post__title'>{props.post.title}</div>
          <div className='post__body'>{props.post.body}</div>
          <div className='post__btns'>
            {isAuth ? (
              <div>
                <MyButton
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents the click event from bubbling up to the post
                    props.remove(props.post);
                  }}
                >
                  Удалить
                </MyButton>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>

        <div className='post__content'>
          <img
            className='post__img'
            src={props.post.image || placeholderImage}
            alt={props.post.title}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
