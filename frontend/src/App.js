// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import axios from "axios";
import React, { useState, useEffect } from 'react';
import useAuth from "././hooks/useAuth";
=======
// import axios from "axios";
import React, { useState } from "react";
// import useAuth from "././hooks/useAuth";
>>>>>>> c58c33b00efa9c344d492f3c81538ef889196981

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Page from "./components/Page/Page";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
<<<<<<< HEAD
// import Page from "./components/Page";
=======
import DisplayComments from "./components/CommentList/DisplayComments";
>>>>>>> c58c33b00efa9c344d492f3c81538ef889196981
import CreateCommentForm from "./components/CreateComment/CreateCommentForm";
// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  // const APIKEY = "AIzaSyAmWE_bDTa8g6GZUvrVMQn9UJkUeX2_NWU";
  // const [user, token] = useAuth();
  // const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  // useEffect(() => {
  //   fetchVideos();
  // }, [token]);

  // const fetchVideos = async (searchTerm) => {
  //   try {
  //     let response = await axios.get(
  //       `https://www.googleapis.com/youtube/v3/search?q=${searchTerm}part=snippet&maxResults=10&key=${APIKEY}`,
  //       {
  //         headers: {
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     setVideos(response.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  function addNewComment(comment) {
    let tempComments = [...comments, comment];

    setComments(tempComments);
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
      <div className="container">
        <div className="row">
          <h3 style={{ "margin-top": "1em" }}>
            Comments
            <small className="text-muted">Replies</small>
          </h3>
          <div className="col-md-6">
            <div className="border-box">
              <CreateCommentForm addNewCommentProperty={addNewComment} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="border-box">
              <DisplayComments parentComments={comments} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
