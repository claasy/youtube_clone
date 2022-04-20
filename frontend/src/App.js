// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

import React, { useState, useEffect } from 'react';
import axios from "axios";
import useAuth from "././hooks/useAuth";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Page from "./components/Page/Page";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import DisplayComments from "./components/CommentList/DisplayComments";
import CreateCommentForm from "./components/CreateComment/CreateCommentForm";

import PrivateRoute from "./utils/PrivateRoute";

function App() {
  const API_KEY = "AlzaSyDqq8qNVoNnuzEc3WA7KtosxpJbJpZMkNO";
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchVideos("castles");
  }, [token]);

  const fetchVideos = async (searchTerm) => {
    console.log("Inside fetch Videos")
    try {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=castles&key=AIzaSyDH9ESes-E7RKgZHm7IEHrHn7L4Wwk6Zow&part=snippet&maxResults=10`
      
      );
      console.log("Yout Tube Response: ", response.data)
      setVideos(response.data.items);
    } catch (error) {
      console.log(error.message);
    }
  };

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
              <HomePage generalVideos={videos} />
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
