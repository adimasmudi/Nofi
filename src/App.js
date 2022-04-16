import {React, useEffect, useState} from 'react';
import { getMovies } from './api';

import { CssBaseline, Grid } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import './App.css';

const App = ()=>{

  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(0);
  
  useEffect(()=>{
    getMovies('avengers',1).then(res=>{
      setResults(res.data.totalResults);
    });
  },[]);
  return (
    <>
      <CssBaseline />
      <Grid container spacing={2} className="container">
        <Grid item xs={4}>
          <h1>Nofi</h1>
        </Grid>
        <Grid item xs={8}>
          <TextField
            id="filled-search"
            label="Cari Film Kesukaan"
            type="search"
            style={{
              marginTop : '20px',
              marginLeft : '100px'
            }}
          />
          <Button 
          variant="contained" 
          endIcon={<SearchIcon />} 
          size="medium"
          style={{
            margin : '20px',
            height:'50px',
            width:'120px'
          }}
          >
            Cari
          </Button>
        </Grid>
        <Grid item xs="auto">
          {results > 0 ? (
            <h3>Total Hasil Pencarian : {results}</h3> 
          ) : (
            <h3>Belum ada data</h3>
          )}
          <Grid container xs='auto' style={{background:'yellow'}}>
            <Grid Item xs='auto'>
              
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default App;
