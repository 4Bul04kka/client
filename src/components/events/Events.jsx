import React, { useState } from "react";
import { Link } from "react-router-dom";
import ".//events.css";
import PostItem from "../ui/post/PostItem";
import PostList from "../ui/post/PostList";
import MyButton from "../ui/button/MyButton";

function Events() {
  const [posts, setPosts] = useState([
    { id: 1, title: "1 new", body: "desc" },
    { id: 2, title: "2 new", body: "desc" },
    { id: 3, title: "3 new", body: "desc" },
  ]);
  return (
    <div className='events'>
      <div className='container'>
        <div>
          <form>
            <input type='text' placeholder='Заголовок новости' />
            <input type='text' placeholder='Содержание новости' />
            <MyButton>Создать новость</MyButton>
          </form>
        </div>
        <div>
          <PostList posts={posts} title={"Новости и мероприятия"} />
        </div>
      </div>
    </div>
  );
}

export default Events;
