import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import PostItem from "../../utils/post/PostItem";
import PostList from "../../utils/post/PostList";
import MyButton from "../../ui/button/MyButton";
import MyInput from "../../ui/input/MyInput";
import PostForm from "../../ui/postform/PostForm";

function Events() {
  const [posts, setPosts] = useState([
    { id: 1, title: "1 new", body: "desc" },
    { id: 2, title: "2 new", body: "desc" },
    { id: 3, title: "3 new", body: "desc" },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className='events'>
      <div className='container'>
        <div>
          <PostList posts={posts} title={"Новости и мероприятия"} />
          <PostForm create={createPost} />
        </div>
      </div>
    </div>
  );
}

export default Events;
