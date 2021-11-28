import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import PostsList from './pages/PostsList';
import Post from './pages/Post';
import PostCreate from './pages/PostCreate';

import { PostProvider } from './hoc/PostProvider';
import './App.css';

export default function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' index element={<PostsList />} />
          <Route path='/posts/:id' element={<Post />} />
          <Route path='/posts/new' element={<PostCreate />} />
        </Route>
      </Routes>
    </PostProvider>
  );
}
