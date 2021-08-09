import React, { useState } from 'react';
import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
  const [ searchTerm, setSearchTerm ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
  };

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <Paper elevation={6} style={{ padding: '25px', backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h1 style={{ fontSize: '90px', color: 'red'}}>ViewTube</h1>
      <form onSubmit={handleSubmit} style={{ width: '80vh', height: '5vh'}}>
        <TextField fullWidth label='Search...' value={searchTerm} onChange={handleChange} variant='outlined' color='primary'/>
      </form>
    </Paper>
  );
}


export default SearchBar;
