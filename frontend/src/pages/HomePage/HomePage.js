import React from "react";
import { useEffect, useState } from "react";

import axios from "axios";
import useAuth from "../../hooks/useAuth";
import DisplayComments from "../../components/NavBar/DisplayComments";
import CreateCommentForm from "../../components/CreateComment/CreateCommentForm";


const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [comments, setComments] = useState([
    {
      user: ' Justin ',
      text: 'Good Morning ',
    }, 
  ]);
  function addNewComment(comment) {
    let tempComments = [...comments, comment];
    setComments(tempComments);
  }

  useEffect(() => {
    const fetchComments = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/comments/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setComments(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchComments();
  }, [token]);
  return (
    <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {comments &&
        comments.map((comment) => (
          <p key={comment.id}>
            {comment.year} {comment.model} {comment.make}
          </p>
        ))}
        <div>
          <CreateCommentForm addNewCommentProperty={addNewComment}/>
        </div>
        <div>
      <DisplayComments parentComments={comments} />
    </div>
    </div>
    
  );
};

export default HomePage;
