import './App.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import Courses from './components/Courses';
// import CourseDetails from './components/CourseDetails';
// import Form from './components/Form';
// import Details from './components/Details';
import Routing from './components/routing';


function App() {
    return (
      <div>
        <Routing/>
      </div>
    );
    // <Router>
    //   <nav>
        
    //   </nav>
    //   <Routes>
    //     <Route path="/" component={Home}></Route>
    //     <Route path="/courses" component={Courses}></Route>
    //     <Route path="/courseDetails" component={CourseDetails}></Route>
    //     <Route path="/form" component={Form}></Route>
    //     <Route path="/details" component={Details}></Route>
    //     <Route>
    //       <Home/>
    //       <Courses/>
    //       <CourseDetails/>
    //       <Details/>
    //       <Form/>
    //     </Route>
    //   </Routes>
    // </Router>
  }

export default App;
