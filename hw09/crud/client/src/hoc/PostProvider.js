import { createContext, useState } from 'react';

export const PostContext = createContext(null);

export const PostProvider = ({ children }) => {
  const [postsList, setPostsList] = useState([]);
  const [post, setPost] = useState([]);

  const getPosts = async () => {
    try {
      const response = await fetch(`http://localhost:7777/posts`);
      const posts = await response.json();
      setPostsList(posts);
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (id) => {
    try {
      const response = await fetch(`http://localhost:7777/posts/${id}`);
      const post = await response.json();
      setPost(post);
    } catch (error) {
      console.error(error);
    }
  };

  const addPost = async (post) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ id: 0, content: post }),
    };

    try {
      await fetch(`http://localhost:7777/posts`, requestOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const editPost = async (post) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify(post),
    };

    try {
      await fetch(`http://localhost:7777/posts`, requestOptions);
    } catch (error) {
      console.error(error);
    }
  };

  const removePost = async (id) => {
    try {
      await fetch(`http://localhost:7777/posts/${id}`, { method: 'DELETE' });
    } catch (error) {
      console.error(error);
    }
  };

  const value = {
    postsList,
    post,
    getPosts,
    getPost,
    addPost,
    editPost,
    removePost,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
};
