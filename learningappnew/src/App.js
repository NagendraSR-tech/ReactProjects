import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AudioComp from "./pages/AudioComp";
import VideoComp from "./pages/VideoComp";
import BlogPage from "./pages/BlogPage";
import NavigationComp from "./components/NavigationComp";
import AddVideo from "./components/AddVideo";
import "./style.css";
import AddPost from "./components/AddPost";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <BrowserRouter>
          <Home />
          <NavigationComp />
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/video" element={<VideoComp />} />
            <Route path="/audio" element={<AudioComp />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/add-video" element={<AddVideo />} />
            <Route path="/add-post" element={<AddPost />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
