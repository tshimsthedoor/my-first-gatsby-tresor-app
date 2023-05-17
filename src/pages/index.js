// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your componet
const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
};
// You'll learn about this in the next task, just copy it for me
export const Head = () => <title>Home Page</title>;

// Step 3: Export your component
export default IndexPage;
