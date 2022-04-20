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
import CreateCommentForm from "./components/CreateComment/CreateCommentForm";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
 
  const APIKEY ="AIzaSyAmWE_bDTa8g6GZUvrVMQn9UJkUeX2_NWU"

  useEffect(() => {
    fetchVideos("castles");
}, [token]);

const fetchVideos = async (searchTerm) => {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}part=snippet&maxResults=10&key=${APIKEY}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      setVideos(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  
  
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
      <div>
            <CreateCommentForm addNewCommentProperty={addNewComment}/>
          </div>
          <div>
        <DisplayComments parentComments={comments} />
      </div>
    </div>
  );
}

export default App;
