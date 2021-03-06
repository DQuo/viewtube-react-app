import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <Grid item xs={12}>
      <Paper style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}} onClick={() => onVideoSelect(video)}>
        <img alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
        <Typography variant='subtitle1'>{video.snippet.title}</Typography>
      </Paper>
    </Grid>
  )
}
