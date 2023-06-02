// import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from "./pages/signup";
import Page2 from "./pages/register";

// function App() {
//   return (
//     <>
//       <Page1/>
//       <Page2/>
//     </>
//   );
// }

// function App() {
//   const [currentPage, setCurrentPage] = useState("Page1");

//   const handleButtonClick = () => {
//     setCurrentPage("Page2");
//   };

//   return (
//     <>
//       {currentPage === "Page1" && <Page1 handleButtonClick={handleButtonClick} />}
//       {currentPage === "Page2" && <Page2 />}
//     </>
//   );
// }

// const Home = () => {
//   return (
//     <div>
//       <Page1/>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/src/pages/signup" element={Home} />
//         <Route path="/src/pages/register" component={Page2} />
//       </Routes>
//     </Router>
//   );
// };

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Signup />} />
        <Route path="/register" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
