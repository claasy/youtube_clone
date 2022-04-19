// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Page from "./pages/Page/Page";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import createCommentForm from "./components/CreateComment/CreateCommentForm";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  
  
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="/page"
          element={
            <PrivateRoute>
              <Page />
            </PrivateRoute>
          }
        />
        
        {/* <Route path="/search" element={<SearchPage />} /> */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
