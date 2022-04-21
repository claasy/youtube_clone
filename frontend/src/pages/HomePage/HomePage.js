import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";

// * Array of video objects are being passed in through props
const HomePage = ({generalVideos}) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    
    const fetchVideos = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setVideos(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchVideos();
  }, [token]);
  return (
    <div className="container">
      {console.log("General Videos props: ",generalVideos)}
      {/* Mapp general videos  here */}
      {generalVideos.map((video, index) => {
        return (
          <div key={index} > {video.snippet.title} {video.snippet.description} {video.snippet.thumbnails.default.url}</div>
        )
      })}
    </div>
  );
};

export default HomePage;



