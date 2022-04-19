import {React, useEffect, useState} from 'react';
import { getMovies } from './api';

import { Grid, Typography } from '@material-ui/core';

// import material UI components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import Card from './components/Card/Card';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import Footer from './components/Footer/Footer';

import './App.css';
import { ClassNames } from '@emotion/react';

const App = ()=>{

  let searchValue;

  const [page, setPage] = useState(1);
  const [results, setResults] = useState(0);
  const [movies, setMovies] = useState([]);

  
  
  return (
    <>
      <Grid container spacing={2} className="header" style={{
        padding : '10px 100px 10px 100px',
        borderBottom : '1px solid #A79E9E'
        }}>
        <Grid Item xs={6} >
            <Typography variant="h3" style={{color:'red'}}>
                Nofi<span style={{color:"white"}}>.</span>
            </Typography>
        </Grid>
        <Grid Item xs={6}>
            <TextField
                id="filled-search"
                label="Cari Film Kesukaan"
                type="search"
                onChange={(e)=>{
                  searchValue = e.target.value
                }}
                style={{
                  margin : '0 50px',
                  height : '55px',
                  width : '200px',
                  color : 'white'
                }}
            />
            <Button 
                variant="contained" 
                endIcon={<SearchIcon />} 
                size="medium"
                style={{
                  width:'180px',
                  height: '45px'
                }}
                onClick={()=>{
                  searchValue = searchValue === undefined ? '' : searchValue
                  getMovies(searchValue,page).then(res=>{
                    setResults(res.data.totalResults);
                    setMovies(res.data.Search);
                })}}
                >
                Cari Film
            </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="card-group">
        
        <Grid item xs={12}>
          {results > 0 ? (
            <h5 className="total">Total Hasil Pencarian : {results}</h5> 
          ) : (
            <h5 className="total">Tidak ada data</h5>
          )}
        </Grid>
        {movies && movies.map((m)=><Card data={m}/>)}
        <Grid item xs={8}>
            {
              results > 0 ? (
                <Stack spacing={2}>
                  <Pagination count={10} variant="outlined" shape="rounded" color="primary"/>
                </Stack>
              ) : (<p></p>)
            }
          
        </Grid>
        
        
      </Grid>
      <Footer />

      
    </>
  )
}

export default App;
