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

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  

      const [videos, setVideos] = useState([{}])
      useEffect(() => {
        getAllComments();
      }, [])
      async function getAllComments(){
        let response = await axios.get('http://127.0.0.1:8000/api/comments/');
        setVideos(response.data);
      }
      async function addNewComment(entry){
        let response = await axios.post('http://127.0.0.1:8000/api/comments/', entry);
        if(response.status === 201){
          await getAllComments();
        }
        let tempEntries = [...videos, entry];
        setVideos(tempEntries);
      }
      async function deleteVideo(id){
        let response = await axios.delete('http://127.0.0.1:8000/api/comments/', [id])
        if(response.status === 201){
          await getAllComments();
      }
  
      

    
  }



  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
              <Page />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
