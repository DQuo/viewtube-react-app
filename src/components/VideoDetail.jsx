import React from 'react'
import { Paper, Typography } from '@material-ui/core';

const VideoDetail = ({ video }) => {

  console.log(video);

  return (
    <>
      { !video ? (
        <div>
          Loading
        </div>
      ) : (
        <>
          <Paper elevation={6} style={{ height: '700px' }}>
            <iframe 
              height='100%' 
              width='100%' 
              title='Video Player' 
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
            />
          </Paper>
          <Paper elevation={6} style={{ padding: '15px' }}>
            <Typography variant='h4'>{video.snippet.title} - {video.snippet.channelTitle}</Typography>
            <Typography variant='subtitle1'>{video.snippet.channelTitle}</Typography>
            <Typography variant='subtitle2'>{video.snippet.description}</Typography>
          </Paper>
      </>
      )}
    </>
  )
}

export default VideoDetail

