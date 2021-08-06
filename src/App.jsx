import * as React from 'react';
import { Grid } from '@material-ui/core';

// API
import youtube from './api/youtube';

//Custom Components
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';


export default function App() {

  const handleSubmit = async (searchTerm) => {
    try {
      const res = await youtube.get('search', {
        params: {
          part: 'snippet',
          maxResults: 5,
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          q: searchTerm
        }
      });
      console.log(res);
    }
    catch (err) {
      console.log(err);
    }
  };

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={handleSubmit} />
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