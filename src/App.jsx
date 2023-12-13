import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // API Call
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    })();
  }, []);
  /**
   * 2 types of API Calls
   * - Whenever the page is created -> call an API
   *    - Load via React Router DOM
   *    - Load Via useEffect
   * - Call as per need -> simple async functions
   */

  return (
    <>
      <div>
        <h1>Posts</h1>
        <br />
        {posts.map((el, i) => (
          <div key={el.id}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <br />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

// Hooks -> Functions Replicating Class Based Component Functionalities which used to exist in React when it was Class Based and not Function Based.
// Why use Hooks -> What is the need of React Taking the Functional Approach
// -> Because React had an extreme learning curve.
/**
 * useState ->
 * useEffect
 */
