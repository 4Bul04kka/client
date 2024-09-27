import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import "./events.css";
import PostList from "../../ui/postform/PostList";
import PostForm from "../../ui/postform/PostForm";
import PostFilter from "../../ui/postform/PostFilter";
import MyModal from "../../ui/modal/MyModal";
import MyButton from "../../ui/button/MyButton";
import { usePosts } from "../../hooks/usePosts";
import PostService from "../../../API/PostService";
import Loader from "../../ui/loader/Loader";
import { useFetching } from "../../hooks/useFetching";
import { getPageCount, getPageArray } from "../../../utils/pages";

function Events() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  let pagesArray = getPageArray(totalPages);

  const [fetchPosts, arePostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className='events'>
      <div className='container'>
        <div>
          <MyButton onClick={fetchPosts}>Запросить посты</MyButton>
          <MyButton onClick={() => setModal(true)}>Создать новость</MyButton>
          <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
          </MyModal>
          <PostFilter filter={filter} setFilter={setFilter} />
          {postError && <h1> Произошла ошибка ${postError}</h1>}
          {arePostsLoading ? (
            <div className='loading'>
              <Loader />
            </div>
          ) : (
            <PostList
              remove={removePost}
              posts={sortedAndSearchedPosts}
              title={"Новости и мероприятия"}
            />
          )}
          {pagesArray.map((p) => (
            <MyButton>{p}</MyButton>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;
