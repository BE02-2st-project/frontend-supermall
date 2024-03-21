import { useState, useEffect } from "react";
import styled from "styled-components";
import Pagination from "./Pagination";
import Card from "../components/Product/Card";

function Posts() {
  /////
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(36);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []); /////

  return (
    <Layout>
      <label>
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="10">10</option>
          <option value="12">12</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </label>

      <main>
        {posts.slice(offset, offset + limit).map((post) => (
          <Card
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
      </main>

      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </Layout>
  );
}

const Layout = styled.div`
  width: 1720px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

export default Posts;
