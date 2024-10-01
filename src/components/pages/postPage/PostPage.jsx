import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../../../API/PostService";
import { useFetching } from "../../hooks/useFetching";
import Loader from "../../ui/loader/Loader";

const PostPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [image, setImage] = useState({}); // Set to an object in case response contains multiple image properties

  // Fetching post by ID
  const [fetchPostById, isLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  // Fetching image by ID (simulated or independent fetch)
  const [fetchImageById, isImgLoading, imgError] = useFetching(async (id) => {
    const response = await PostService.getImageById(id); // Get the image by ID
    setImage(response.data); // Assuming response.data contains an object with the image URL
  });

  useEffect(() => {
    fetchPostById(params.id); // Fetch the post
    fetchImageById(params.id); // Fetch a related image, even though this may not match directly
  }, [params.id]); // Ensure useEffect runs when params.id changes

  return (
    <div>
      <h1>Страница с новостью ID = {params.id}</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}. {post.body}
        </div>
      )}
      {postError && <p>Error: {postError}</p>}

      {isImgLoading ? (
        <Loader />
      ) : (
        <div>
          {image.url ? (
            <img src={image.url} alt={post.title} loading='lazy' />
          ) : (
            <p>No image available</p>
          )}
        </div>
      )}
      {imgError && <p>Error: {imgError}</p>}
    </div>
  );
};

export default PostPage;
