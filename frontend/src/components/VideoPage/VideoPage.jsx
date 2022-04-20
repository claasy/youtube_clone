import React, { useState, useEffect } from 'react';


const VideoPage = (props) => {
    
    useEffect(() => {
        getAllVideos();
      }, [])
    
      async function getAllVideos(){
        let response = await axios.get('https://www.googleapis.com/youtube/v3/videos');
        setVideos(response.data);
      }
      
    
    return ( 
        
    );
}
 
export default VideoPage;