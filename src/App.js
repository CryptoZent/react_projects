import React from "react";
import { comments } from "./js/commentData";
import Card from "./components/Card"

function App() {
  return (
    <div>
      {comments.map((comment, index) => (
        <Card key={index} commentObject={comment} />
      ))}
    </div>
  );
}

export default App;
