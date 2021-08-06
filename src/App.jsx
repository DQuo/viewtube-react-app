import * as React from 'react';
import { Grid } from '@material-ui/core';

// API
import youtube from './api/youtube';

//Custom Components
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';


export default function App() {
  return (
    <Grid container spacing={16}>
      <Grid item xs={12}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <SearchBar />
          </Grid>
          <Grid item xs={8}>
            <VideoDetail />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}