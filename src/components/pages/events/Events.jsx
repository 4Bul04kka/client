import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import PostItem from "../../ui/postform/PostItem";
import PostList from "../../ui/postform/PostList";
import MyButton from "../../ui/button/MyButton";
import MyInput from "../../ui/input/MyInput";
import PostForm from "../../ui/postform/PostForm";
import MySelect from "../../ui/postform/MySelect";
import PostFilter from "../../ui/postform/PostFilter";
import MyModal from "../../ui/modal/MyModal";

function Events() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1 new",
      body: "desc",
      image:
        "https://sun9-9.userapi.com/impg/cWBDCm7VC_6llk3hkIYH8DdxXNy3Ngb23PwqBQ/PYJ0WUJHIUI.jpg?size=512x512&quality=96&sign=18655f5f5d382eacf3b6398a7a1a558a&type=album",
    },
    {
      id: 2,
      title: "2 new",
      body: "desc",
      image:
        "https://sun9-9.userapi.com/impg/cWBDCm7VC_6llk3hkIYH8DdxXNy3Ngb23PwqBQ/PYJ0WUJHIUI.jpg?size=512x512&quality=96&sign=18655f5f5d382eacf3b6398a7a1a558a&type=album",
    },
    {
      id: 3,
      title: "3 new",
      body: "desc",
      image:
        "https://sun9-9.userapi.com/impg/cWBDCm7VC_6llk3hkIYH8DdxXNy3Ngb23PwqBQ/PYJ0WUJHIUI.jpg?size=512x512&quality=96&sign=18655f5f5d382eacf3b6398a7a1a558a&type=album",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);
  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='events'>
      <div className='container'>
        <div>
          <PostFilter filter={filter} setFilter={setFilter} />
          <PostList
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title={"Новости и мероприятия"}
          />
          <PostForm create={createPost} />
        </div>
      </div>
    </div>
  );
}

export default Events;
