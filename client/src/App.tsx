import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
