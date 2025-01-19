import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { PostDetailsPage } from "./pages/PostDetailsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Route with dynamic parameter */}
        <Route path="/post/:postId" element={<PostDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
