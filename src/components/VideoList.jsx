import React from 'react';
import { Grid } from '@material-ui/core';

import VideoItem from './VideoItem';

export default function VideoList({ videos, onVideoSelect }) {

  let videoList;

  if (videos) {
    videoList = videos.map((video, idx) => <VideoItem key={idx} video={video} onVideoSelect={onVideoSelect} />);
  }
  else {
    videoList = [];
  }
  
  return (
    <Grid container spacing={10}>
      {videoList}
    </Grid>
  );
}
