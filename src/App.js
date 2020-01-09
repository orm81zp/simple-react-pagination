import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Posts from './components/Posts';
import Pagination from './components/Pagination';
import Dropdown from './components/Dropdown';

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState([])

  const paginate = (e, pageNumber) => {
    setCurrentPage(pageNumber);
    e.preventDefault();
  }

  const handleOnSelect = (e, value) => {
    setCurrentPage(1);
    setPostsPerPage(value);
    e.preventDefault();
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

      if (response && response['data']) {
        setPosts(response.data);
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  let indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const filteredPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const options = [
    {value: 5, label: 5},
    {value: 10, label: 10},
    {value: 15, label: 15},
    {value: 20, label: 20},
    {value: 50, label: 50},
  ]

  return (
    <div className="App container">
      <h1 className="text-primary mb-3">Posts</h1>
      <Dropdown activeOption={postsPerPage} title="Posts Per Page" options={options} handleOnSelect={handleOnSelect} />
      <Posts posts={filteredPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} paginate={paginate} totalPosts={posts.length} currentPage={currentPage}/>
    </div>
  );
}

export default App;
