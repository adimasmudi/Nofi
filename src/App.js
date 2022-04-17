import {React, useEffect, useState} from 'react';
import { getMovies } from './api';

import Header from './components/Header/Header';
import Card from './components/Card/Card';

import { Grid } from '@material-ui/core';



import './App.css';
import { ClassNames } from '@emotion/react';

const App = ()=>{


  const [title, setTitle] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(0);
  const [movies, setMovies] = useState([]);
  
  useEffect(()=>{
    getMovies('avengers',1).then(res=>{
      console.log(res)
      setResults(res.data.totalResults);
      setMovies(res.data.Search);
    });
  },[]);
  return (
    <>
      <Header />
      {results > 0 ? (
        <h5 className="total">Total Hasil Pencarian : {results}</h5> 
      ) : (
        <h5 className="total">Belum ada data</h5>
      )}

      <Grid container spacing={2} className="card-group">
        
        {movies.map((m)=><Card data={m}/>)}
      </Grid>

      
    </>
  )
}

export default App;
