import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import PostItem from "../../utils/post/PostItem";
import PostList from "../../utils/post/PostList";
import MyButton from "../../ui/button/MyButton";
import MyInput from "../../ui/input/MyInput";

function Events() {
  const [posts, setPosts] = useState([
    { id: 1, title: "1 new", body: "desc" },
    { id: 2, title: "2 new", body: "desc" },
    { id: 3, title: "3 new", body: "desc" },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  return (
    <div className='events'>
      <div className='container'>
        <div>
          <PostList posts={posts} title={"Новости и мероприятия"} />
          <form>
            <MyInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type='text'
              placeholder='Заголовок новости'
            />
            <MyInput
              value={body}
              onChange={(e) => setBody(e.target.value)}
              type='text'
              placeholder='Содержание новости'
            />
            <MyButton onClick={addNewPost}>Создать новость</MyButton>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Events;
