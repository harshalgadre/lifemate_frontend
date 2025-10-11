import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Landing from "./components/Landing";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default landing page */}
        <Route path="/" element={<Home />} />

        {/* Other pages */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Optional 404 route */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center text-center">
              <h1 className="text-4xl font-bold text-gray-800">404</h1>
              <p className="text-gray-600 mt-2">Page not found</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
