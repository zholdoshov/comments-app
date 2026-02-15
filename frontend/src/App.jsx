import { useEffect, useState } from 'react';
import './App.css'
import { createComment, getComments } from './api/comments';
import CommentList from './components/CommentList';
import CommentForm from './components/CommentForm';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const data = await getComments();
        setComments(data);
      } catch (error) {
        console.error("Failed to fetch comments", error);
      }
    }

    fetchComments();
  }, []);

  async function handleAdd(text) {
    try {
      const newComment = await createComment(text);
      setComments((prev) => [newComment, ...prev]);
    } catch (error) {
      console.error("Failed to create comment", error);
    }
  }

  return (
    <>
      <h1>All comments</h1>
      <CommentForm onAdd={handleAdd} />
      <CommentList
        comments={comments}
      />
    </>
  )
}

export default App
